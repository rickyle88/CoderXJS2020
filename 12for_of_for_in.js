var employees = [
    {name: 'A', age: 28},
    {name: 'B', age: 26},
    {name: 'C', age: 32}
];


// for(let e of employees){
//     console.log(e.name);
// }

var myDog = {
    name: 'Dan',
    age: 1, 
    weight: 5
}

for(var key in myDog){
    console.log(key);
    console.log(myDog[key]);
}