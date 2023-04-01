import { useState } from "react";
import PageButton from './PageButton/pagebutton';
import * as common from "../../../utility/common";

/**
 * 
 * A control that takes renders buttons to control paged content including next and previous
 */
export default function Pager(props) {
    const [currentPage, setCurrentPage] = useState(1);
    //set defaults
    const {
        ariaName, 
        pages = 1, 
        maxMainButtons=5, 
        maxSideButtonsLG = Math.ceil((maxMainButtons-1)/2), 
        maxSideButtonsMD = maxSideButtonsLG, 
        maxSideButtonsSM = maxSideButtonsMD, 
        maxSideButtonsXS = maxSideButtonsSM,
        onPageChange = (pageNum) =>{}} = props;
    
    function handleGoToPage(pageNum){
        setCurrentPage(pageNum);
        onPageChange(pageNum);
    }

    function PreviousPageButton(){
        let ariaLabel = `Go to previous ${ariaName} page`;
        return (
            <button disabled={currentPage === 1} aria-label={ariaLabel} onClick={()=>handleGoToPage(currentPage-1)}>&lt;</button>
        );
    }
    function NextPageButton(){
        let ariaLabel = `Go to next ${ariaName} page`;
        return (
            <button disabled={currentPage === pages} aria-label={ariaLabel} onClick={()=>handleGoToPage(currentPage+1)}>&gt;</button>
        );
    }


    function CreatePageNumbers(){
        let pageNumbers = [];
        let defPadding = (maxMainButtons - 1) /2;
        let startNum = 1;
        let endNum = pages;
        let bufferzone = 0;

        //if maxMainButtons is greater than the total number of pages, then we render them all
        if(maxMainButtons < pages){
            startNum = currentPage - defPadding;
            endNum = currentPage + defPadding;
            if (startNum < 1){
                bufferzone = 1-startNum;
                endNum += bufferzone;
                startNum = 1;
            }
            if (endNum> pages){
                endNum = pages;
            }
            //TODO: add button buffer for when we are at the end of the sequence
        }

        pageNumbers = common.generateRange(startNum,endNum);

        //convert to object properties for use on the PageButton component
        let objPageNumbers = pageNumbers.map((num)=>{
            let diff = common.difference(currentPage,num) - bufferzone+1;
            return {
                currentPage: currentPage,
                ariaName: ariaName,
                pageNumber: num,
                hiddenXS: diff > maxSideButtonsXS,
                hiddenSM: diff > maxSideButtonsSM,
                hiddenMD: diff > maxSideButtonsMD,
                hiddenLG: diff > maxSideButtonsLG,
                onClick:handleGoToPage
            }});

        return objPageNumbers.map(PageButton);
    }
    
    return (
        <div className="page-control">
            <PreviousPageButton />
            <CreatePageNumbers />
            <NextPageButton />
        </div>
    );
  }
  


