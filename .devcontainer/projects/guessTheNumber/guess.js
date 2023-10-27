const form = document.querySelector("form");
let prevGuess = [];
let noOfGuess = 1;
let playGame = true;
const p = document.createElement("p");
const param = document.querySelector("#param");
const highLow = document.querySelector("#highLow");
const display = document.querySelector("#guessValue");
const userInput = document.querySelector("#guessNumber");
const remainingGuess = document.querySelector("#remainingGuess");
let math = parseInt(Math.random() * 100 + 1);

if (playGame) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let guess = parseInt(document.querySelector("#guessNumber").value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Not a number");
  } else if (guess < 0 || guess > 100) {
    alert("please enter a valid guess");
  } else {
    if (noOfGuess === 11) {
      endGame();
    }
    userInput.value = "";
    compareGuess(guess);
    prevGuess.push(guess);
    displayGuess(prevGuess);
    noOfGuess += 1;
    remainingGuess.innerHTML = 11 - noOfGuess;
    console.log(noOfGuess);
  }
}

function compareGuess(guess) {
  if (math === guess) {
    highLow.innerHTML = "Correct guess";
    newGame();
  }
  if (guess >= math) {
    highLow.innerHTML = "Guess is high";
  }
  if (guess <= math) {
    highLow.innerHTML = "Guess is low";
  }
}

function displayGuess(guess) {
  display.innerHTML = guess;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id = 'newGame'>Start new Game</h2>`;
  param.appendChild(p);
  newGame();
}

function newGame() {
  const button = document.getElementById("newGame");
  button.addEventListener("click", function () {
    let math = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    let noOfGuess = 1;
    remainingGuess.innerHTML = 10;
    userInput.removeAttribute("disabled");
    param.removeChild(p);
    playGame = true;
  });
}
