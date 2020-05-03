
// Excercise
// 1. Show all students
// Save to ./data.json => fs.readFileSync, JSON.parse
// 2. Create a new student - array 
// Your name
// Your age
// Your class
// save data to array
// 3. Save and exit
// save to ./data.json and exit


// Install readline-sync module first

// Read write file (NodeJS built in methods)
let fs = require('fs');

// Read data from user's input
let readlineSync = require('readline-sync');

// Function readfile
function returnFileContent(fileName) {
    let content = null;

    // Check if file exists
    if (!fs.existsSync(fileName)) {
        console.log('File not found');
    } else {
        content = fs.readFileSync(fileName, { encoding: 'UTF8' });
    }

    return content;
}

while (true) {

    let options = readlineSync.question('What is your option: ');

    let content = returnFileContent('./data.json');

    if (options === "1") {
        console.log(content);
    }
    else if (options === "2") {


        let name = readlineSync.question('What is your name: ');
        let age = readlineSync.question('What is your age: ');

        let newObjt = { name: name, age: age };

        // Read data.json
        // Convert string to object
        let result = JSON.parse(content);
        if (result === null) {
            result = {};
            result.students = [];
        }

        result.students.push(newObjt);

        fs.writeFileSync('./data.json', JSON.stringify(result));
    }
    else if (options === "3") {
        break;
    }
}