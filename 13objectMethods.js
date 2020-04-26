var myDog = {
    weight: 5,
    name: 'Dan',
    age: 1,
    bark: function(){
        console.log('Meo Meo, my name is ' + this.name);
    },
    eat: function(bone){
        this.weight = this.weight + bone.weight;
        // return this;
    }
};

// To execute function => ()
myDog.bark();

var bone = {weight: 0.5};

console.log('Before eating: ' + myDog.weight);

myDog.eat(bone);

console.log('After eating: ' + myDog.weight);



// anonymous function


function bark(){
    console.log('Meo Meo, my name is ' + this.name);
    // this.name belong to global context => undefined
}

bark();
