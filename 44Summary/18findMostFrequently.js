/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/

function findMostFrequent(arr) {
    // Viết code tại đây!

    // Step 1: Create new dictionary object
    let dictionaryObject = {};
    for(let i of arr){
        if(!dictionaryObject[i]){
            dictionaryObject[i] = 1;
        }else{
            dictionaryObject[i] += 1;
        }
    }

    // Object {1: 3, 2: 3, 3: 1, 4: 1}
     // Find max occurency in object
     let max = 0;
     for(let i in dictionaryObject){
         if(max < dictionaryObject[i]){
            result.push(parseInt(i));
         }
     }

     // Create new arry to hold result
     let result = [];
     for(let i in dictionaryObject){
         if(max === dictionaryObject[i]){
             result.push(i);
         }
     }

     return result;


}
