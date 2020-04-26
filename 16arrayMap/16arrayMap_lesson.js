var number = [1,2,3,4,5];
var squareNumbers = numbers.map(function(x){
    return x * x;
})

var rectangles = [
    {width: 10, height: 5},
    {width: 10, height: 20},
    {width: 4, height: 16}
];


var newArr = rectangles.map(function(r){
    return r.width * r.height;
});

