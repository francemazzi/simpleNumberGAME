'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //Giocatore no input
  if (!guess) {
    displayMessage('Nessun numero! 🥴');

    //Giocatore vince
  } else if (guess === secretNumber) {
    displayMessage('Correct Number! 🎉');
    document.querySelector('.number').textContent = secretNumber;
    //Background color cambia se vinci il vaore va sempre messo in ''
    document.querySelector('body').style.backgroundColor = '#60b347';
    //Scritta vince
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //Se SBAGLIATO
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? displayMessage('Troppo alto! 📈')
        : displayMessage('Troppo basso! 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Hai perso ! ');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//tasto che inizializza il codice
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '20rem';
});
