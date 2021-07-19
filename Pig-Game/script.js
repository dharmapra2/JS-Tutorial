'use strict';

//selecting elsements
const player1=document.querySelector('.left');
const player2=document.querySelector('.right');
const score1=document.getElementById('score-1');
const score2=document.getElementById('score-2');
const current1=document.getElementById('current-1');
const current2=document.getElementById('current-2');

//selecting the button elements
const diceEl=document.querySelector('.dicePic');
const diceRoll=document.querySelector('.rollDice');
const diceHold=document.querySelector('.hold');
const diceNew=document.querySelector('.newGame');

//creating variables
let scores,currentScore,activePlayer,playing;

//starting condition
const inti =function(){
    scores=[0,0];
    currentScore= 0;
    activePlayer=0;
    playing=true;

    score1.textContent = 0;
    score2.textContent = 0;
    current1.textContent = 0;
    current2.textContent = 0;

    diceEl.classList.add('hidden');
    player1.classList.remove('player-winner');
    player2.classList.remove('player-winner');
    player1.classList.add('active');
    player2.classList.remove('active');
};
inti(); //function calling

const switchPlayer= function(){
    document.getElementById('current-${activePlayer}').textContent=0;
    currentScore = 0;
    activePlayer= activePlayer === 0 ? 1:0;
    player1.classList.toggle('active');
    player2.classList.toggle('active');
};

//Rolling dice functionality
diceRoll.addEventListener('click',function(){
    if(playing){
        //generating random dice roll
        const dice=Math.trunc(Math.random()*6)+1;

        //display dice
        diceEl.classList.remove('hidden');
        diceEl.src= 'dice-${dice}.png';
        
        //check for rolled 1
        if(dice!==1){
            currentScore+=dice;
            document.getElementById('current-${activePlayer}').textContent=currentScore;
        }
        else{
            //switch to next player
            switchPlayer();
        }
    }
});
diceHold.addEventListener('click', function () {
    if (playing) {
      // 1. Add current score to active player's score
      scores[activePlayer] += currentScore;
      // scores[1] = scores[1] + currentScore
  
      document.getElementById('score-${activePlayer}').textContent =
        scores[activePlayer];
  
      // 2. Check if player's score is >= 100
      if (scores[activePlayer] >= 100) {
        // Finish the game
        playing = false;
        diceEl.classList.add('hidden');
  
        document
          .querySelector('.player-${activePlayer}')
          .classList.add('player-winner');
        document
          .querySelector('.player-${activePlayer}')
          .classList.remove('player-active');
      } else {
        // Switch to the next player
        switchPlayer();
      }
    }
  });
  
 diceNew.addEventListener('click', init());