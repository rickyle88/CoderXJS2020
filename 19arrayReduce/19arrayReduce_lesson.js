var numbers = [1,2,3,4];

let sum = numbers.reduce(function(a,v){
    console.log(a,v);
    return a + v;
})

// 1 2
// 19arrayReduce_lesson.js:4
// 3 3
// 19arrayReduce_lesson.js:4
// 6 4
// 19arrayReduce_lesson.js:4
// 10

console.log(sum);

var orders = [
    {name: 'A', quantity: 2, unitPrice: 100},
    {name: 'B', quantity: 1, unitPrice: 400},
    {name: 'C', quantity: 3, unitPrice: 15}
]

// User reduce to calculate total price
var totalPrice = orders.reduce(function(a,v){
    return a + v.quantity * v.unitPrice;
},0);

var totalPrice2 = orders.map(function(order){
    return order.quantity*order.unitPrice;
}).reduce(function(a,b){
    return a+b;
})

let total = order.map((x) => x.quanlity * x.unitPrice).reduce((a,b)=> a + b);

console.log(totalPrice);


