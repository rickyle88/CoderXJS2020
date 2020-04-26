/**
 * Count the occurrences of each element inside an array using reduce
 * @params {array}
 * @return {object}
 * Example: 
 * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
}
*/

function countOccurrences(arr) {
    // viết code ở đây.
    return arr.reduce(function(a,v){       

        // if(v in a){
        if(a.hasOwnProperty(v)){
            a[v] += 1;
        }else{
            a[v] = 1;
        }
        return a;
    },{});

}

// loop 1: a = {}, v = 'a'
// 

console.log(countOccurrences(['a', 'b', 'c', 'b', 'a']));

