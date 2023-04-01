export default function PageButton({
    currentPage,
    pageNumber,
    ariaName,
    hiddenLG,
    hiddenMD,
    hiddenSM,
    hiddenXS,
    onClick
}){
    let cssClasses = [];
    let ariaLabel;
    let disabled = false;

    if(hiddenLG) cssClasses.push('hidden-l');
    if(hiddenMD) cssClasses.push('hidden-m');
    if(hiddenSM) cssClasses.push('hidden-s');
    if(hiddenXS) cssClasses.push('hidden-xs');


    if(currentPage === pageNumber){
        ariaLabel = `Current ${ariaName} Page, Page ${pageNumber}`;
        disabled = true;
    }
    else{
        ariaLabel = `Go to ${ariaName} page ${pageNumber}`;
    }

    return (
        <button disabled={disabled} 
                aria-label={ariaLabel} 
                aria-current="true" 
                key={pageNumber} 
                className={cssClasses.join(' ')}
                onClick={() => onClick(pageNumber)}>
            {pageNumber}
        </button>
    );
}