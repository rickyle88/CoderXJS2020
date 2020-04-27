var numbers = [2,9,3,4,1];

// sort by asc order
var ascendingNumbers = numbers.sort(function(a,b){
    // a = 1, b = 4
    // a come before b 
    // a - b < 0
    return a-b;
})

// sort by dsc order
var descendingNumbers = numbers.sort(function(a,b){
    // a = 1, b = 4
    // a come after b 
    // b-a > 0
    return b-a;
})

var employees = [
    {name: 'Ti', age: 18},
    {name: 'Teo', age: 20},
    {name: 'Maria', age: 19},
];

// asc
var sortedEmployees = employees.sort(function(a,b){
    // a = employees[0], b = employees[1]
    // expected: a comes before b
    // a.age - b.age < 0
    return a.age - b.age;
})

console.log(sortedEmployees[1]);

var sortedEmployeesDESC = employees.sort(function(a,b){
    // a = employees[0], b = employees[1]
    // expected: a comes before b
    // a.age - b.age < 0
    return b.age - a.age;
})

