var fs = require('fs');
var co = require('co');

var song1 = './song1.txt';
var song2 = './song2.txt';
var song3 = './song3.txt';


function readFilePromise(path){
    return new Promise(function(resolve, reject){
        fs.readFile(path, {encoding: 'UTF8'}, function(err, data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    }) 
    
}

// generator function
// co(function*(){
//     // var song1Data = yield readFilePromise(song1);
//     // var song2Data = yield readFilePromise(song2);
//     // var song3Data = yield readFilePromise(song3);    

//     // console.log(song1Data, song2Data, song3Data);
//     // return [song1Data, song2Data, song3Data];

//     var values = yield[
//         readFilePromise(song1),
//         readFilePromise(song2),
//         readFilePromise(song3)
//     ];

//     return values;
    
// }).then(function(values){
//     console.log(values);
// }).catch(function(err){
//     console.log(err);
// })

var readFiles = co.wrap(function*(files){
    // [String] => [Promise]
    var values = yield files.map(function(file){
        return readFilePromise(file);
    })
    return values;
})

readFiles([song1, song2, song3])
    .then(function(values){
        console.log(values);
    })
