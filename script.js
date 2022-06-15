'use strict';

const nameOfGamer = prompt("Please type your name to begin!");
console.log(nameOfGamer);
let score = 20;
let highScore = 0;
let value = Math.trunc(Math.random()*20) + 1;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
const displayBody = function (body){
    document.querySelector('body').style.backgroundColor = body;
}
const displayScore = function (scores){
    document.querySelector('.score').textContent = scores;
}
displayMessage(`Start guessing ${nameOfGamer}`);

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number (document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
    //no input
    if(!guess){
        displayMessage (`${nameOfGamer}, please insert a number!`);

        //When player wins
    }else if(guess === value){
        displayMessage(`Good guessing, ${nameOfGamer}!`);
        displayBody('rgb(212, 200, 21)');
        document.querySelector('.number').style.width = '35rem';
        document.querySelector('.number').textContent = value;

        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    }else if (guess !== value){
        if(score > 1){
            displayMessage(guess > value ? `Go lower ${nameOfGamer}` : 
            `Go higher ${nameOfGamer}`) ;
            score--;
            displayScore(score);
        }
        else { //When player loses
            displayMessage (`You suck! Play another game Loser! ${nameOfGamer}`);
            displayScore(0);
        }
    }

});

//restarting the game
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    value = Math.trunc(Math.random()*20) + 1;
    displayBody(`Start guessing ${nameOfGamer}`);
    displayScore(score);
    document.querySelector('.number').textContent = '??';
    document.querySelector('.guess').value = '';
    displayBody('#222');
    document.querySelector('.number').style.width = '15rem';
   
});