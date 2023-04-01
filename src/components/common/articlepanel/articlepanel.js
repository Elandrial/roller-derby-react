import React from "react";
import { useState } from "react";

import Article from './article/article';
import Pager from '../pager/pager';

export default function ArticlePanel({
    jsondata,
    recordsPerPage=3,
    ariaName,
    templateControl=Article
}) {
    const [currentPage, setCurrentPage] = useState(1);
    function onPageChange(pageNum){
        setCurrentPage(pageNum);
    }
    function GeneratePagedEntries(){
        let records = jsondata;
        if (recordsPerPage < jsondata.length){
            let startNum = Math.max(0,(currentPage-1) * recordsPerPage);
            let endNum = Math.min(startNum + recordsPerPage, jsondata.length);
            records = jsondata.slice(startNum, endNum);
        }

        return records.map(templateControl);
    }

    let numPages = Math.ceil(jsondata.length/recordsPerPage);
    return (
        <React.Fragment>
            <GeneratePagedEntries />
            <Pager  pages={numPages} 
                    maxMainButtons={5} 
                    maxSideButtonsMD={3} 
                    maxSideButtonsLG={4} 
                    ariaName={ariaName} 
                    onPageChange={onPageChange}/>
        </React.Fragment>
    );
}