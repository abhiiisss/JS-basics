// create buttons

const buttons = document.querySelectorAll('.button');
//console.log(buttons);
const body = document.querySelector("body") 


//create a loop to access buttons 
buttons.forEach(function(button){
    console.log(button);
    //adding eventlistener
    button,addEventListener('click', function(e){
         console.log(e)
         console.log(e.target);
         //use switch case to change the background color(we can use if condition also)
         switch (e.target.id === "grey") {
            case body.style.backgroundColor = e.target.id:
                
                break;
         
            default:
                break;
         }

         switch (e.target.id === "white") {
            case body.style.backgroundColor = e.target.id:
                
                break;
         
            default:
                break;
         }

         switch (e.target.id === "blue") {
            case body.style.backgroundColor = e.target.id:
                
                break;
         
            default:
                break;
         }

         switch (e.target.id === "yellow") {
            case body.style.backgroundColor = e.target.id:
                
                break;
         
            default:
                break;
         }

         switch (e.target.id === "pink") {
            case body.style.backgroundColor = e.target.id:
                
                break;
         
            default:
                break;
         }
    })
})
