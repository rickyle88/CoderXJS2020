var coffeeMachine = {
    makeCoffee: function(onFinish){
        console.log('Making coffee...');
        onFinish();
    }
}

var beep = function(){
    console.log('Tit tit');
}

coffeeMachine.makeCoffee(beep);

coffeeMachine.makeCoffee(function(){
    console.log('Bip bip');
})