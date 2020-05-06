// Date
// moment.js

var now = new Date();
var myBirthDay = new Date(1990, 4, 17);

// Number of milliseconds from 1-1-1970
console.log(now.getTime());
console.log(myBirthDay.getTime());

// 15885605695141588560569514
// 642927600000
// 642927600000

var moment = require('moment');

var n = moment('2020-01-02 07:00');

// 4 months ago
console.log(n.fromNow());

console.log(n.format('YYYY/MM/DD'));

