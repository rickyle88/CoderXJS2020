/* Write a function that splits an array (first argument) into groups 
the length of size(second argument) and returns them as a two-dimensional array.
Example
 chunkArrayInGroups(["a", "b", "c", "d", "e"], 2) // [["a", "b"], ["c", "d"], ["e"]]
*/
function chunkArrayInGroups(arr, size){
    // write code here.
    let result = [];
    for(let i = 0; i < arr.length; i+=size){
        result.push(arr.slice(i,i+size));
    }
    return result;
  }