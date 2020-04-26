// Given an array of arrays, flatten them into a single array

/**
 * Example: 
 * var arrays = [
 *    ["1", "2", "3"],
 *    [true],
 *    [4, 5, 6]
 *  ];
 * 
 * flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
 */

function flatten(arr) {
    // viết code ở đây.
    return arr.reduce(function(a,v){
        for(let i = 0; i < v.length; i++){
            a.push(v[i]);
        }
        return a;
    },[]);
}

