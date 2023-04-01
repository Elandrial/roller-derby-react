/**
 * Difference gives the value difference between two numbers
  */
export function difference (a, b) 
{
    return a > b ? a - b : b - a;
};

/**
 * generateRange generates an array of numbers based on the start and the end numbers
  */
export function generateRange(startNum, endNum){
    let numbers = endNum-startNum+1;
    return Array(numbers).fill().map((x,i)=>i+startNum);
}