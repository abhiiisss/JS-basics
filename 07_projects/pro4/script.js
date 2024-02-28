// create random number from 1 to 100
let randomNumber = (parseInt(Math.random() * 100 + 1)); //the +1 neglects zero

//slectors -- click events
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const reamining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

//create a para
const p = document.createElement('p')

//previous guesses showcase
let prevGuess = [];

//attempts done
let numGuess = 1;

//game start 
let playGame = true;

if (playGame) {
   submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess);
   }) 
}

//Guess validation -- checks is it value and if it is a value does it lies under the given criteria
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if(guess < 1){
         alert("Please enter a number more than 0");
    } else if(guess > 100){
        alert("Please enter a number less than 100");
    } else {
        prevGuess.push(guess)
        if (prevGuess.length == 10) {
            cleanUpGuess(guess)
            displayMessage(`Game Over, Random Number was ${randomNumber}`)
            endGame() 
        }else{
            cleanUpGuess(guess)
            checkGuess(guess)
        }
    }
}

//Guess Check to print msg -- if the random no. is equal, higher or lower
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage("You guessed it right")
    } else if (guess < randomNumber) {
        displayMessage("Your number is tooo low")
    }else if(guess > randomNumber){
        displayMessage("Your number is tooooo high")
        
    }
}
//clean up guess -- it will clean the guess and uodate the array
function cleanUpGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    reamining.innerHTML = `${11 - numGuess}`

}
//display msg -- it tells the user if the msg is same or different
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>` 
}

//function to end a game
function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled' , '');
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">start a new game</h2>'
    startOver.appendChild(p);
    playGame = false;
    newGame();

}

//function for a new game
function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        reamining.innerHTML = `${10 - numGuess}` ;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    });
}

//create a function where if the random number matches ot shows game over


