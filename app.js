const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let result = null;

const choices = [
  {choice: 'rock', icon: '<i class="fa-solid fa-hand-back-fist"></i>' },
  {choice: 'paper', icon: '<i class="fa-solid fa-hand"></i>' },
  {choice: 'scissors', icon: '<i class="fa-solid fa-hand-scissors"></i>' },
]

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  playerChoice = e.target.closest('button');

  const icon = playerChoice.firstElementChild;
  const cloneIcon = icon.cloneNode(true);

  if(playerChoiceDisplay.firstElementChild !== null){
    playerChoiceDisplay.firstElementChild.replaceWith(cloneIcon);
  } else {
    playerChoiceDisplay.append(cloneIcon);
  }

  playerChoiceDisplay.title = playerChoice.title;

  computerChoiceDisplay.classList.add('spinner');

  if(computerChoiceDisplay.firstElementChild !== null){
    computerChoiceDisplay.innerText = ''
  }

  if(resultDisplay.innerText !== ''){
    resultDisplay.innerText = ''
  }

  setTimeout(() => {
    generateComputerChoice();
    getResult();
  },2000)
}));

function generateComputerChoice(){
  const randomNumber = Math.floor( Math.random() * possibleChoices.length );
  computerChoiceDisplay.innerHTML = choices[randomNumber].icon;
  computerChoiceDisplay.title = choices[randomNumber].choice;
  computerChoiceDisplay.classList.remove('spinner')
}

function getResult () {
  const draw = 'its a draw';
  const win = 'you win';
  const lose = 'you lose';

  if(computerChoiceDisplay.title === playerChoiceDisplay.title){
    result = draw;
  }

  // win conditions
  if(computerChoiceDisplay.title === 'rock' && playerChoiceDisplay.title === 'paper'){
    result = win;
  }

  if(computerChoiceDisplay.title === 'paper' && playerChoiceDisplay.title === 'scissors'){
    result = win;
  }

  if(computerChoiceDisplay.title === 'scissors' && playerChoiceDisplay.title === 'rock'){
    result = win;
  }

  // lose conditions
  if(computerChoiceDisplay.title === 'paper' && playerChoiceDisplay.title === 'rock'){
    result = lose;
  }

  if(computerChoiceDisplay.title === 'scissors' && playerChoiceDisplay.title === 'paper'){
    result = lose;
  }

  if(computerChoiceDisplay.title === 'rock' && playerChoiceDisplay.title === 'scissors'){
    result = lose;
  }

  resultDisplay.innerText = result;
}