var axios = require('axios');

var url1 = 'https://jsonplaceholder.typicdode.com/todos/1';
var url2 = 'https://jsonplaceholder.typicode.com/todos/2';
var url3 = 'https://jsonplaceholder.typicode.com/todos/3';



function axiosGetWebContent(path) {
    return axios.get(path);
}

var fs = require('fs');


var song1 = './song1.txt';
var song2 = './song2.txt';
var song3 = './song3.txt';


function readFilePromise(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, { encoding: 'UTF8' }, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })

}
async function run() {
    var task1 = await readFilePromise(song1).catch(function (err) {
        if (err) return err;
    });
    var task2 = await axiosGetWebContent(url1).catch(function(err){
        return err;
    });


    return [task1, task2];
}

run()
    .then(function (values) {
        console.log(values);
    })
