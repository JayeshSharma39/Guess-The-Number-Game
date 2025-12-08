let randomNumber=parseInt(Math.random()*100+1);
const submit=document.querySelector("#subt");
const userInput=document.querySelector("#guessField");
const guessSlot=document.querySelector(".guesses");
const remaining=document.querySelector(".lastResult");
const lowOrHi=document.querySelector(".lowOrHi");
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');

let numGuess=1;

let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        validateGuess(guess);
    });
}

function validateGuess(guess){
    // check whether value between range or is a value
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if(guess<1){
        alert('Please enter a number more than 1');

    }
    else if(guess>100){
        alert('Please enter a number less than 100');
    }
    else{
        if(numGuess===11){
            cleanUpGuess(guess);
            displayMessage(`Game Over.Random number was ${randomNumber}`)
            endGame();
        }
        else{
            cleanUpGuess(guess);
            checkGuess(guess)
        }
    }

}
function checkGuess(guess){
    // check whether value is equal to random number or not and call displayMessage
    if(guess===randomNumber){
        displayMessage(`You Guessed it Right`)
        endGame()
    }
    else if(guess<randomNumber){
        displayMessage(`Number is TOOO Low`)
    }
    else if(guess>randomNumber){
        displayMessage(`Number is TOOO High`)
    }

}
function cleanUpGuess(guess){
    // clean values, update previous guesses and remaining guesses
    userInput.value='';
    guessSlot.innerHTML +=`${guess} `;
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`;

}
function displayMessage(message){
    // diplay message like low or high
    lowOrHi.innerHTML=`<h2>${message}</h2>`;

}
function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}
function newGame(){
    const newGameButton=document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(){
        randomNumber=parseInt(Math.random()*100+1);
        numGuess=1;
        guessSlot.innerHTML=''
        remaining.innerHTML=10;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        lowOrHi.innerHTML=''
        playGame=true;
    })


}