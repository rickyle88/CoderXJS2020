var myDog = {
    name: 'Mily',
    age: 1, 
    dead: false
};

// Convert object to JSON string => to save to file
var myDogString = JSON.stringify(myDog);

// Convert JSONstring to object
var myCatString = '{"name":"Tom", "age":2}';

var myCat = JSON.parse(myCatString);

console.log(myDogString);

console.log(myCat);