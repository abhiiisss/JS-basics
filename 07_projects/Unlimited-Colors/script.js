// generate a random color

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for( let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

//console.log(randomColor())

//this code will give the hex output if start is clicked and it will stop when stop is clicked
const start = document.getElementById('start')
const stop = document.getElementById('stop')


let IntervalId;

const startChangingColor = function(){
     document.body.style.backgroundColor = randomColor()
    //console.log(randomColor());
}

start.addEventListener('click', function(){
    if(!IntervalId){
         IntervalId = setInterval(startChangingColor, 1000);
    }
});


stop.addEventListener('click', function(){
    clearInterval(IntervalId);
    IntervalId = null;
    console.log("Random Colors is stopped");
})