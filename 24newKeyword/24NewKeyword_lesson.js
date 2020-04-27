var today = new Date();
console.log(today);

// Sun Apr 26 2020 20:39:59 GMT-0700 (Pacific Daylight Time) {}

// Create new object: object literal
var mouse = {
    weight: 0.2,
    getWeight: function(){
        return this.weight;
    }
}

// Constructor function
function Mouse(color, weight){
    this.type = 'mouse';
    this.color = color;
    this.weight = weight;
}

var mouse1 = new Mouse('white', 0.2);

// console.log(mouse1);
// Mouse {type: "mouse"}

var mouse2 = {type: "mouse"};

// console.log(mouse2);
// Object {type: "mouse"}

//////////////////////////////////////////////////////////
// Object literal

var tom = {
    name: 'Tom',
    stomach: [],
    eat: function(mouse){
        this.stomach.push(mouse);
        return this;    // So we can use method channing
    }
}

var m1 = {name: 'm1'};
var m2 = {name: 'm2'};
var m3 = {name: 'm3'};

// Method channing: notice that eat function must return this
tom.eat(m1).eat(m2).eat(m3);

console.log(tom);

// Constructor function 
function M(name){
    this.name = name;
}

var mo1 = new M('m1');
var mo2 = new M('m2');

tom.eat(mo1).eat(mo2);