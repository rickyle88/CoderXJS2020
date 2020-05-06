// setInterval(fn, ms): call fn every ms 

// var i = 0;
// var intervalId = setInterval(() => {
//     i++;
//     console.log(i);
//     if(i===10){
//         clearInterval(intervalId);
//     }
// }, 1000);


// Write a function that count from 1 to 10
function countFrom(a, b) {
    return new Promise(function (resolve, rejected) {
        if (isNaN(a) || isNaN(b)) {
            rejected('Must be a number');
        } else if (a > b) {
            rejected('Error');
        }
        else {
            let intervalId = setInterval(function () {
                console.log(a);
                a++;
                if (a > b) {
                    clearInterval(intervalId);
                    resolve(a);
                }
            }, 1000);
        }

    })
}

countFrom(2, 5)
    .then(function (data) {
        console.log('Done');
        console.log(data);
    })