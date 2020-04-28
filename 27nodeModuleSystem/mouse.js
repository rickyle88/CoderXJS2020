function Mouse(color){
    this.color = color;
    this.dead = false;
}

Mouse.prototype.die = function(){
    this.dead = true;
}

// export constructor function
module.exports = Mouse;