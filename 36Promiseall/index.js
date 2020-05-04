var promisefs = require('promise-fs');

var song1 = './song1.txt';
var song2 = './song2.txt';
var song3 = './song3.txt';

// function onDone(song){
//     console.log(song);
// }

// function onError(err){
//     console.log(err);
// }

// function readFile(path){
//     return promisefs.readFile(path, {encoding: 'UTF8'});
// }

// // promisefs.readFile(song1, {encoding: 'UTF8'})
// //     .then(function(res){
// //         console.log(res);
        
// //     })
// //     .catch(function(err){
// //         console.log(err);
// //     })

// readFile(song1)
//     .then(onDone)
//     .catch(onError)
//     .then(function(){
//         return readFile(song2);
//     })
//     .then(onDone)
//     .catch(onError)


var fs = require('fs');
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

readFilePromise(song1)
    .then(function(res){
        console.log(res);
        return readFilePromise(song2);
    })
    .catch(function(err){
        console.log(err);
    })
    .then(function(res){
        console.log(res);
        return readFilePromise(song3);
    })
    .then(function(res){
        console.log(res);
    })


Promise.all([
    readFilePromise(song1),
    readFilePromise(song2),
    readFilePromise(song3)
]).then(function(res){
    // called when all promises resolved
   console.log(res);
}).catch(function(err){
    console.log(err);
})