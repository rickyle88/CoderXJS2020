// setTimeOut => timer
// clearTimeOut
function done(){
    console.log('Finish')
}

// var done = function(){
//     console.log('Finish');
// }

console.log('Start');
// setTimeout(function done(){
//     console.log('Finish');
// }, 1000);
var timeOutId = setTimeout(done, 1000);

console.log('Done');


clearTimeout(timeOutId);