var fs = require('fs');

var song1 = './song1.txt';
var song2 = './song2.txt';
var song3 = './song3.txt';

// Sync
// var song1 = fs.readFileSync(song1, {encoding: 'UTF8'});
// var song2 = fs.readFileSync(song2, {encoding: 'UTF8'});
// var song3 = fs.readFileSync(song3, {encoding: 'UTF8'});
// Async

fs.readFile(song1, {encoding: 'UTF8'}, function(err, data){
    console.log(data);
    fs.readFile(song2, {encoding: 'UTF8'}, function(err, data){
        console.log(data);
        fs.readFile(song3, {encoding: 'UTF8'}, function(err, data){
            console.log(data)
        })
    })
})

// nested if
