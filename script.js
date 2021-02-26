'use strict';

let randomNumber = Math.floor(Math.random()*20 + 1);
let score = 20;

document.querySelector('.check').addEventListener('click', theNumberChecker);
document.querySelector('.again').addEventListener('click', onceAgain);

function theNumberChecker()
{
    let highScore = Number(document.querySelector('.highscore').textContent);
    const guessedNumber = Number(document.querySelector('.guess').value);

    if(score > 1)
    {
        if(!guessedNumber) document.querySelector('.message').textContent = 'Enter a number Boi';
        else if(guessedNumber > randomNumber) {
            document.querySelector('.message').textContent = 'A little higher there';
            document.querySelector('.score').textContent = --score;
        } 
        else if(guessedNumber < randomNumber) {
            document.querySelector('.message').textContent = 'A little lower there';
            document.querySelector('.score').textContent = --score;
        }
        else{
            document.querySelector('.message').textContent = 'You got the correct Answer Sir!';
            if(highScore < score) document.querySelector('.highscore').textContent = score;
            document.body.style.backgroundColor = 'lightgreen';
            document.querySelector('.number').textContent = randomNumber;

        }
    }
    else{
        document.querySelector('.message').textContent = 'You have lost the game. Loser';
        document.querySelector('.score').textContent = --score;
        document.body.style.backgroundColor = 'Red';
        document.querySelector('.number').textContent = randomNumber;
    }
}

function onceAgain() 
{
    randomNumber = Math.floor(Math.random()*20 + 1);
    score = 20;
    document.querySelector('.score').textContent = score;
    document.body.style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.guess').value = null;
    document.querySelector('.number').textContent = '?';
}