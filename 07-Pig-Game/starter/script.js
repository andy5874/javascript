'use strict';
//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions
let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  diceEl.classList.add('hidden');
  score1El.textContent = 0;
  score0El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player0El.classList.remove('player-winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

const switchP = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//rolling dicr functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1.generate random dice
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2.display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3.check if 1 if true switch player
    if (dice !== 1) {
      //add dice to current scsore
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchP();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1.add current score to active player
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2.check if player score is > 100
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }
    //3. switch player if no win
    switchP();
  }
});

btnNew.addEventListener('click', init);
//btnNew.addEventListener('click', function () {
//activePlayer = 0;
//scores[0] = 0;
//scores[1] = 0;
//diceEl.classList.add('hidden');
//document.getElementById('current--0').textContent = 0;
//document.getElementById('current--1').textContent = 0;
//document.getElementById('score--0').textContent = scores[0];
//document.getElementById('score--1').textContent = scores[1];
//document.querySelector(`.player--0`).classList.remove('player--winner');
//document.querySelector(`.player--1`).classList.remove('player--winner');

//});
