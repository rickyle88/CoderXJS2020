var axios = require('axios');

var url1 = 'https://jsonplaceholder.typicode.com/todos/1';
var url2 = 'https://jsonplaceholder.typicode.com/todos/2';
var url3 = 'https://jsonplaceholder.typicode.com/todos/3';

function axiosGetWebContent(path){
    return axios.get(path);
}

Promise.all([
    axiosGetWebContent(url1),
    axiosGetWebContent(url2),
    axiosGetWebContent(url3)
]).then(function(res){
    console.log(res[0].data);
    console.log(res[1].data);
    console.log(res[2].data);
})

axiosGetWebContent('https://jsonplaceholder.typicode.com/todos/1')
.then(function(data){
  console.log(data.data);
})
.catch(function(err){

})
.then(function(){
  return axiosGetWebContent('https://jsonplaceholder.typicode.com/todos/2');
})
.then(function(data){
  console.log(data.data);
});