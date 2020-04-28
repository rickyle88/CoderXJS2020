
var Mouse = require('./mouse');

var Cat = require('./cat');



var mickey = new Mouse('black');
var jerry = new Mouse('orange');

var tom = new Cat();
tom.eat(mickey);

// Cat { stomach: [ Mouse { color: 'black', dead: true } ] }

tom.eat(jerry);

console.log(tom);

// Cat {
//     stomach: [
//       Mouse { color: 'black', dead: true },
//       Mouse { color: 'orange', dead: true }
//     ]
//   }

////////////////////////////////


var m = require('./math');

console.log(m.multiply(2,5));


// circle

var Circle = require('./circle');
var circle1 = new Circle(0, 0, 1);
var circle2 = new Circle(0, 2, 1);
console.log(circle1.isOverlapped(circle2));

var circle3 = new Circle(0, 0, 3);
console.log(circle1.isOverlapped(circle3));

var circle4 = new Circle(5, 5, 1);
console.log(circle1.isOverlapped(circle4));