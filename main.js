let scoreElement = document.getElementById('score-display');
const rules = document.getElementById('rules');
const closeRules = document.querySelector('.close');
const retryBtn = document.getElementById('retry');
const gameBoard = document.getElementById('game-board');
const mainGameBoard = document.querySelector('.main-game-board');
const yourPick = document.querySelector('.yourPick-div');
const immageDynamic = document.querySelector('.yourPick-div img');
const opponentPickImage = document.querySelector('.opponentPick-div img');
const result = document.getElementById('finalResult');
const results = document.querySelector('.results');
const popUp = document.getElementById('pop-up-div');

let scoreValue = localStorage.getItem('score') || 0;
scoreElement.innerHTML = scoreValue;

console.log(results);

rules.addEventListener('click', () => {
  popUp.classList.add('click');
});

closeRules.addEventListener('click', () => {
  popUp.classList.remove('click');
});

// console.group(result,retryBtn);

const images = {
  rock: 'images/icon-rock.svg',
  paper: 'images/icon-paper.svg',
  scissors: 'images/icon-scissors.svg',
};

function stylingTheImage(ImageId) {
  const yourPickImage = document.getElementById(ImageId).src;
  console.log(yourPickImage);
  immageDynamic.src = yourPickImage;

  const mobileWidth = '7rem';
  const mobileHeight = '9rem';
  const mobileBackgroundColor = 'rgb(255, 255, 255)';
  const mobileBorderStyle = '0.5rem solid rgb(220, 46, 78)';

  const desktopWidth = '12rem';
  const desktopHeight = '13rem';
  const desktopBackgroundColor = '#fff';
  const desktopBorder = '1.5rem solid';

  switch (ImageId) {
    case 'paper':
      immageDynamic.classList.add('paper-img');
      immageDynamic.style.width =
        window.innerWidth <= 768 ? mobileWidth : desktopWidth;
      immageDynamic.style.height =
        window.innerWidth <= 768 ? mobileHeight : desktopHeight;
      immageDynamic.style.backgroundColor =
        window.innerWidth <= 768
          ? mobileBackgroundColor
          : desktopBackgroundColor;
      immageDynamic.style.border =
        window.innerWidth <= 768
          ? mobileBorderStyle
          : `${desktopBorder} hsl(230, 89%, 62%)`;
      break;

    case 'scissors':
      immageDynamic.classList.add('scissor-img');
      immageDynamic.style.width =
        window.innerWidth <= 768 ? mobileWidth : desktopWidth;
      immageDynamic.style.height =
        window.innerWidth <= 768 ? mobileHeight : desktopHeight;
      immageDynamic.style.backgroundColor =
        window.innerWidth <= 768
          ? mobileBackgroundColor
          : desktopBackgroundColor;
      immageDynamic.style.border =
        window.innerWidth <= 768
          ? mobileBorderStyle
          : `${desktopBorder} hsl(40, 84%, 53%)`;
      break;

    case 'rock':
      immageDynamic.classList.add('rock-img');
      immageDynamic.style.width =
        window.innerWidth <= 768 ? mobileWidth : desktopWidth;
      immageDynamic.style.height =
        window.innerWidth <= 768 ? mobileHeight : desktopHeight;
      immageDynamic.style.backgroundColor =
        window.innerWidth <= 768
          ? mobileBackgroundColor
          : desktopBackgroundColor;
      immageDynamic.style.border =
        window.innerWidth <= 768
          ? mobileBorderStyle
          : `${desktopBorder} hsl(349, 71%, 52%)`;
      break;

    default:
      break;
  }
}

function imageClicked(ImageId) {
  stylingTheImage(ImageId);

  gameBoard.style.display = 'none';
  mainGameBoard.style.display = 'flex';

  const options = Object.keys(images);
  const randomIndex = Math.floor(Math.random() * options.length);
  const randomOption = options[randomIndex];
  const randomImage = images[randomOption];
  opponentPickImage.src = randomImage;

  // console.log(randomOption);

  const mobileWidth = '7rem';
  const mobileHeight = '9rem';
  const mobileBackgroundColor = 'rgb(255, 255, 255)';
  const mobileBorderStyle = '0.5rem solid rgb(220, 46, 78)';

  const desktopWidth = '13rem';
  const desktopHeight = '14rem';
  const desktopBackgroundColor = '#fff';
  const desktopBorder = '1.5rem solid';

  switch (randomOption) {
    case 'paper':
      opponentPickImage.classList.add('paper-img');
      opponentPickImage.style.width =
        window.innerWidth <= 768 ? mobileWidth : desktopWidth;
      opponentPickImage.style.height =
        window.innerWidth <= 768 ? mobileHeight : desktopHeight;
      opponentPickImage.style.backgroundColor =
        window.innerWidth <= 768
          ? mobileBackgroundColor
          : desktopBackgroundColor;
      opponentPickImage.style.border =
        window.innerWidth <= 768
          ? mobileBorderStyle
          : `${desktopBorder} hsl(230, 89%, 62%)`;
      break;

    case 'scissors':
      opponentPickImage.classList.add('scissor-img');
      opponentPickImage.style.width =
        window.innerWidth <= 768 ? mobileWidth : desktopWidth;
      opponentPickImage.style.height =
        window.innerWidth <= 768 ? mobileHeight : desktopHeight;
      opponentPickImage.style.backgroundColor =
        window.innerWidth <= 768
          ? mobileBackgroundColor
          : desktopBackgroundColor;
      opponentPickImage.style.border =
        window.innerWidth <= 768
          ? mobileBorderStyle
          : `${desktopBorder} hsl(40, 84%, 53%)`;
      break;

    case 'rock':
      opponentPickImage.classList.add('rock-img');
      opponentPickImage.style.width =
        window.innerWidth <= 768 ? mobileWidth : desktopWidth;
      opponentPickImage.style.height =
        window.innerWidth <= 768 ? mobileHeight : desktopHeight;
      opponentPickImage.style.backgroundColor =
        window.innerWidth <= 768
          ? mobileBackgroundColor
          : desktopBackgroundColor;
      opponentPickImage.style.border =
        window.innerWidth <= 768
          ? mobileBorderStyle
          : `${desktopBorder} hsl(349, 71%, 52%)`;
      break;

    default:
      break;
  }

  decideResult(ImageId, randomOption);
}

function decideResult(userChoice, opponentChoice) {
  console.log('User Choice:', userChoice);
  console.log('Opponent Choice:', opponentChoice);

  results.style.opacity = '1';
  results.style.transition = 'opacity 0.3s ease';

  immageDynamic.classList.remove('your-pick-winner');
  opponentPickImage.classList.remove('auto-picked-winner');

  if (userChoice === opponentChoice) {
    result.innerHTML = 'Draw';
    immageDynamic.classList.add('your-pick-winner');
    opponentPickImage.classList.add('auto-picked-winner');
  } else if (userChoice == 'paper' && opponentChoice == 'rock') {
    result.innerHTML = 'you won';
    immageDynamic.classList.add('your-pick-winner');
    scoreValue++;
  } else if (userChoice == 'paper' && opponentChoice == 'scissors') {
    result.innerHTML = 'you won';
    opponentPickImage.classList.add('auto-picked-winner');
  } else if (userChoice == 'scissors' && opponentChoice == 'paper') {
    result.innerHTML = 'you won';
    immageDynamic.classList.add('your-pick-winner');
    scoreValue++;
  } else if (userChoice == 'scissors' && opponentChoice == 'rock') {
    result.innerHTML = 'you won';
    opponentPickImage.classList.add('auto-picked-winner');
  } else if (userChoice == 'rock' && opponentChoice == 'paper') {
    result.innerHTML = 'you won';
    opponentPickImage.classList.add('auto-picked-winner');
  } else if (userChoice == 'rock' && opponentChoice == 'scissors') {
    result.innerHTML = 'you won';
    immageDynamic.classList.add('your-pick-winner');
    scoreValue++;
  }

  // Update the HTML element with the new score value
  scoreElement.innerHTML = scoreValue;

  // Save the score to localStorage
  localStorage.setItem('score', scoreValue);
  console.log('Score saved in localStorage:', scoreValue);
  resetGame(scoreValue);
}

function resetGame(value) {
  // scoreValue = 0;
  scoreElement.innerHTML = value;

  // Remove the score from localStorage
  localStorage.setItem('score', value);
}

resetGame();

retryBtn.addEventListener('click', (e) => {
  // e.preventDefault();
  resetGame(scoreValue);
});

decideResult();
