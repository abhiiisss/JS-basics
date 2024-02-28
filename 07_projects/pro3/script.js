//
const clock = document.getElementById('clock');



// this code setInterval gives the realtime in the output.
setInterval(function(){
    let date = new Date();
    //console.log(date.toLocaleTimeString()); 
    
    //this code gives the time inside the clock boddy
    clock.innerHTML = date.toLocaleTimeString();
    
}, 1000)