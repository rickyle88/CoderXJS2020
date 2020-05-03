// npm install axios --save

var axios = require('axios');

var url1 = 'https://jsonplaceholder.typicode.com/todos/1';
var url2 = 'https://jsonplaceholder.typicode.com/todos/2';

axios.get(url1)
    .then(function(res){
        console.log(res.data);
    })
    .catch(function(err){
        console.log(err);
    })
    .then(function(){
        return axios.get(url2);
    })
    .then(function(res){
        console.log(res.data);
    })
    .catch(function(err){
        console.log(err);
    })
