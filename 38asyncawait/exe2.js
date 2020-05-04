const axios = require('axios');

// Giải thích điểm khác nhau giữa 1 và 2:
// 1. Run in sequence
async function fetchUrls(urls) {
  const results = [];
  for (const url of urls) {
    const res = await axios.get(url);
    results.push(res);
  }
  return results;
}

// 2. Run in parallel 
async function fetchUrlsParallel(urls) {
  const results = await Promise.all(
    urls.map(function(url) {
      return axios.get(url);
    })
  );
  return results;
}

// Chạy thử 2 hàm trên với đầu vào dưới đây và so sánh tốc độ
const urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3'
];

// console.time();
fetchUrls(urls).then(function(data){
  console.log(data[0].data);
});
// console.timeEnd();


// console.time();
fetchUrlsParallel(urls).then(() => console.log('Done 2'));
// console.timeEnd();