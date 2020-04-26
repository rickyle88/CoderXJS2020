var numbers = [1,2,3,4];

let foudNumber = numbers.find(function(n){
    return n % 2 === 0;
})

console.log(foudNumber);
// =< 2