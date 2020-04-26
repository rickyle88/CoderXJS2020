for(let i = 0; i < 10; i++){
    console.log(i);
}

for(let i = 9; i >= 0; i--){
    console.log(i);
}

var employees = [
    {name: 'A', age: 28},
    {name: 'B', age: 26},
    {name: 'C', age: 32}
];


for(let e of employees){
    console.log(e.name);
}

for(let i = 0; i < employees.length; i++){
    console.log(employees[i].name);
}