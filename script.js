'use strict';

let randomNumber = Math.floor(Math.random()*20 + 1);
let score = 20;

document.querySelector('.check').addEventListener('click', theNumberChecker);
document.querySelector('.again').addEventListener('click', onceAgain);

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

function theNumberChecker() {
    let highScore = Number(document.querySelector('.highscore').textContent);
    const guessedNumber = Number(document.querySelector('.guess').value);

    if(score > 1)
    {
        if(!guessedNumber) displayMessage('Enter a number Boi');
        else if(guessedNumber !== randomNumber) {
            displayMessage(guessedNumber > randomNumber ? 'A little higher there' : 'A little lower there');
            document.querySelector('.score').textContent = --score;
        }
        else{
            displayMessage('You got the correct Answer Sir!');

            if(highScore < score) document.querySelector('.highscore').textContent = score;
            document.body.style.backgroundColor = 'lightgreen';
            document.querySelector('.number').textContent = randomNumber;
        }
    }
    else{
        displayMessage('You have lost the game. Loser');
        document.querySelector('.score').textContent = --score;
        document.body.style.backgroundColor = 'Red';
        document.querySelector('.number').textContent = randomNumber;
    }
}

function onceAgain() {
    randomNumber = Math.floor(Math.random()*20 + 1);
    score = 20;
    document.querySelector('.score').textContent = score;
    document.body.style.backgroundColor = '#222';
    displayMessage('Start Guessing...');
    document.querySelector('.guess').value = null;
    document.querySelector('.number').textContent = '?';
}