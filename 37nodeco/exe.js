var co = require('co');
var axios = require('axios');

/**
 * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
 */
var urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/4',
    'https://jsonplaceholder.tyspicode.com/todos/5'
];

function load(url) {
    return new Promise(function (resolve, reject) {
        axios.get(url)
            .then(function (data) {
                resolve(data);
            })
            .catch(function (err) {
                reject(err);
            })

    })
}

  // Cách 1: Sử dụng vòng lặp for
  co(function*(){
      var result = [];
      for(let url of urls){
          result.push(yield load(url)
                            .catch(function(err){
                                if(err){
                                    return;
                                }
                            })
        )
      }
      return result;
  }).then(function(values){
      for(let v of values){
          console.log(v.data);
      }
  })

  // Cách 2: Sử dụng array.map
  // Gợi ý: Có thể yield 1 array các Promise