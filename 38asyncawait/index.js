var fs = require('fs');


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

async function run(){
    var song1Data = await readFilePromise(song1);
    var song2Data = await readFilePromise(song2);
    return [song1Data, song2Data];
}

run().then(function(values){
    console.log(values);
});