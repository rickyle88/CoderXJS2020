var products = [
    {name: 'A', quantity: 2, unitPrice: 10},
    {name: 'B', quantity: 3, unitPrice: 20},
    {name: 'C', quantity: 4, unitPrice: 30}
]

// total = ? (150 => Number data type)
var total = products.reduce(function(accumulator, product){
    return accumulator + product.quantity * product.unitPrice;
},0);

// loop 1: accumulator = 0, product = products[0]
// 0 + 2*10 = 20
// loop 2: accumulator = 20, product = products[1]
// 20 + 3*20 = 80
// loop 3: accumulator = 80, product = products[2]
// 80 + 4*30 = 200

console.log(total);

var items = ['Tom', 'Bill', 'Kim'];
// Use reduce to make this result
// '<Tom><Bill><Kim>'

let newString = items.reduce(function(a,v){
    return a + '<' + v + '>';
},'')

console.log(newString);
