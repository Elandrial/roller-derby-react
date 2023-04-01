export function difference (a, b) 
{
    return a > b ? a - b : b - a;
};

export function generateRange(startNum, endNum){
    let numbers = endNum-startNum+1;
    return Array(numbers).fill().map((x,i)=>i+startNum);
}