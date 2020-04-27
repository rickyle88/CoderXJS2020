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
    this.sleep2 = function(){
        console.log('Sleeping 2');
    }
}

Mouse.prototype.sleep = function(){
    console.log('Sleeping');
}

var jerry = new Mouse('orange', 20);

jerry.sleep();
