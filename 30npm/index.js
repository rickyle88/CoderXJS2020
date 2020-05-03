var readlineSync = require('readline-sync');

// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

// Example 1
var languages = [];

var language = readlineSync.question('What is your mother language');
languages.push(language);

console.log(languages);

// Example 2
var pet = {};

var name = readlineSync.question('Your pet name: ');
var gender = readlineSync.question('Your pet\'s gender male female: ');
var weight = readlineSync.question('Your pet\'s weight: ');

pet.name = name;
pet.gender = gender;
pet.weight = parseInt(weight);

console.log(pet);

