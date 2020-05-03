// Student manager app
// - Show current student list
// - Add new students

// 1. Show all students
// 2. Create a new student
// 3. Save and exit

var readlineSync = require('readline-sync');
var fs = require('fs');

var students = [];

// function loadData(){
//     var fileContent = fs.readFileSync('./data.json');
//     students = JSON.parse(fileContent);
// }

function loadData(){
    var fileContent = fs.readFileSync('./data.json',{encoding:'UTF8'});
    students = JSON.parse(fileContent);
}

function showMenu(){
    console.log('1. Show all students');
    console.log('2. Create a new student');
    console.log('3. Save and Exit');

    var option = readlineSync.question('Enter your option: ');
    switch (option) {
        case '1':
            showStudents();
            showMenu();
            break;
        case '2':
            showCreateStudent();
            showMenu()
            break;
        case '3':
            saveAndExit();
            break;
        default:
            console.log('Wrong option');
            showMenu();
            break;
    }
}

function showStudents(){
    for(var student of students){
        console.log(student.name, student.age);
    }
}

function showCreateStudent(){
    var name = readlineSync.question('Enter your name: ');
    var age = readlineSync.question('Enter your age: ');
    var student = {
        name: name, 
        age: parseInt(age)
    }
    students.push(student);

}

function saveAndExit(){
    var content = JSON.stringify(students);
    fs.writeFileSync('./data.json', content, {encoding: 'UTF8'});
}

function main(){
    loadData();

    

    showMenu();

   
}

main();