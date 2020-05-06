var myClasses = [
    {
        id: 0,
        name: '1A',
        teacher: 0
    },
    {
        id: 1,
        name: '2A',
        teacher:1
    },
    {
        id: 2,
        name: '3A',
        teacher: 2
    },
    {
        id: 3,
        name: '4A',
        teacher: 3
    },
    {
        id: 4,
        name: '5A',
        teacher: 4
    }

]

// var class1A = myClasses.filter(function(x){
//     return x.name === '1A';
// })

// Return JSON value
var class1A = myClasses.find(function (x) {
    return x.name === '1A';
})

var students = [
    { id: 0, name: 'Minh', height: 120, class: 0 },
    { id: 1, name: 'Minh', height: 120 , class: 0},
    { id: 2,name: 'Minh', height: 120, class: 0 }
]

var teachers = [
    {
        id: 0,
        name: 'Quynh',
        age: 30
    },
    {
        id: 1,
        name: 'Chinh',
        age: 55
    },
    {
        id: 2,
        name: 'Nguyen',
        age: 40
    },
    {
        id: 3,
        name: 'Huong',
        age: 45
    },
    {
        id: 4,
        name: 'Hai',
        age: 50
    }
]

function getStudentsInClass(className){
    var classObject = myClasses.find(function(x){
        return x.name === className;
    })

    var studentsInClass = students.filter(function(student){
        return student.class === classObject.id;
    });

    return studentsInClass;
}

var students = getStudentsInClass('1A');

console.log(students);
