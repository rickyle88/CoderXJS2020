/* Write a function return maximum possible sum of some of its k consecutive numbers 
(numbers that follow each other in order.) of a given array of positive integers
*/
function maxOfSumChain(arr, k) {
    // write code here.
    arr.sort(function(a,b){
        return b-a;
    })

    let sum = 0;
    for(let i = 0; i < k; i++){
        sum += arr[i];
    }
    return sum;
}