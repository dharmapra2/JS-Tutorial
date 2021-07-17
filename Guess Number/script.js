// 'use strict';
let scretNumber=Math.trunc(Math.random()*21);
let score=20;
let highScore=0;
const displayMessage= function(message){
    
    document.querySelector('.message').textContent=message;
}
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    if(!guess){
        displayMessage('No number !');
    }
    else if(guess===scretNumber){
        displayMessage('Currect number !');
        document.querySelector('.number').textContent=scretNumber;
        document.querySelector('.number').style.width='30rem';
        document.querySelector('body').style.backgroundColor='#60b347';
         if(score>highScore){
                highScore=score;
                 document.querySelector('.highScore').textContent=highScore;
                }
            }
     else if(guess!==scretNumber){
                if(score>1){
                    displayMessage(guess>scretNumber? 'Too High': 'Too Low');
                    score--;
                    document.querySelector('.score').textContent=score;
                    
                }
                else{
                    displayMessage('You lost the game!');
                    score--;
                    document.querySelector('.score').textContent=score;
                }
            }
        });
 document.querySelector('.again').addEventListener('click',function(){
            score=20;
            scretNumber=Math.trunc(Math.random()*21);
            displayMessage('Starts guessing.......');
            document.querySelector('.score').textContent=score;
            document.querySelector('.number').textContent='?';
            document.querySelector('.guess').value='';
            document.querySelector('body').style.backgroundColor='#222';
            document.querySelector('.body').style.width='15rem';
 });
