const choices = ['rock', 'paper', 'scissors'];
const humanScoreSpan = document.getElementById('human-score');
const computerScoreSpan = document.getElementById('computer-score');
const choiceBox = document.querySelector('.choices'); 
const chooseBox = document.getElementById('choose-box');
const userChoiceBtn = document.getElementById('user-choice-btn');
const computerChoiceBtn = document.getElementById('computer-choice-btn');
const resultText = document.getElementById('result-text');
const winText = document.getElementById('win-text');
const winnerBox = document.getElementById('winner');
const choiceButtons = document.querySelectorAll('.choice-btn');

let humanScore = parseInt(localStorage.getItem('humanScore')) || 0;
let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;

humanScoreSpan.innerText = humanScore;
computerScoreSpan.innerText = computerScore;

choiceButtons.forEach(button => {
  button.addEventListener("click", () => {
    const userChoice = button.getAttribute("data-choice");
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    userChoiceBtn.innerHTML = button.innerHTML;
    userChoiceBtn.style.borderColor = getBorderColor(userChoice);

    const computerButton = document.querySelector(`.choice-btn[data-choice="${computerChoice}"]`);
    if (computerButton) {
      computerChoiceBtn.innerHTML = computerButton.innerHTML;
      computerChoiceBtn.style.borderColor = getBorderColor(computerChoice);
    }

    const result = getResult(userChoice, computerChoice);
    resultText.textContent = result;

    if (result === "YOU WIN") {
      humanScore++;
    } else if (result === "YOU LOSE") {
      computerScore++;
    }

    humanScoreSpan.innerText = humanScore;
    computerScoreSpan.innerText = computerScore;

    localStorage.setItem('humanScore', humanScore);
    localStorage.setItem('computerScore', computerScore);

    // CHECK SCORE
    if (humanScore >= 15 || computerScore >= 15) {
      checkFinalWinner();  // if 15 reached, show winner
    } else {
      showChooseBox();     // otherwise, continue the game
    }
  });
});

function showChooseBox() {
  choiceBox.classList.add("hidden");
  chooseBox.classList.remove("hidden");
  winnerBox.classList.add("hidden");
}

function showWinner() {
  choiceBox.classList.add("hidden");
  chooseBox.classList.add("hidden");
  winnerBox.classList.remove("hidden");
}

function checkFinalWinner() {
  if (humanScore > computerScore) {
    winText.textContent = "YOU WON!";
  } else {
    winText.textContent = "COMPUTER WON!";
  }
  showWinner();

  // Reset scores
  humanScore = 0;
  computerScore = 0;
  localStorage.setItem('humanScore', humanScore);
  localStorage.setItem('computerScore', computerScore);
}

function playAgain() {
  winnerBox.classList.add("hidden");
  chooseBox.classList.add("hidden");
  choiceBox.classList.remove("hidden");
}

function getBorderColor(choice) {
  if (choice === "rock") return "#0074B6"; 
  if (choice === "scissors") return "#BD00FF"; 
  if (choice === "paper") return "#FFA943"; 
  return "#ccc"; 
}

function getResult(user, computer) {
  if (user === computer) return "TIE";
  if (
    (user === "rock" && computer === "scissors") ||
    (user === "scissors" && computer === "paper") ||
    (user === "paper" && computer === "rock")
  ) {
    return "YOU WIN";
  }
  return "YOU LOSE";
}

const rulesButton = document.getElementById("rules-button");
const popup = document.getElementById("rules-popup");

rulesButton.addEventListener("click", () => {
  popup.style.display = popup.style.display === "block" ? "none" : "block";
});
