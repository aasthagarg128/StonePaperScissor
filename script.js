const choices = ['rock', 'paper', 'scissors'];
const humanScoreSpan = document.getElementById('human-score');
const computerScoreSpan = document.getElementById('computer-score');
const resultDiv = document.getElementById('result');
const celebrationDiv = document.getElementById('celebration');

let humanScore = parseInt(localStorage.getItem('humanScore')) || 0;
let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;

// Set the initial scores
humanScoreSpan.innerText = humanScore;
computerScoreSpan.innerText = computerScore;

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const humanChoice = button.getAttribute('data-choice');
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        playGame(humanChoice, computerChoice);
    });
});

function playGame(human, computer) {
    celebrationDiv.classList.add('hidden');

    if (human === computer) {
        resultDiv.innerText = `It's a draw! You both chose ${human}.`;
    } else if (
        (human === 'rock' && computer === 'scissors') ||
        (human === 'paper' && computer === 'rock') ||
        (human === 'scissors' && computer === 'paper')
    ) {
        humanScore++;
        resultDiv.innerText = `You Win! ${human} beats ${computer}`;
        celebrationDiv.classList.remove('hidden');
    } else {
        computerScore++;
        resultDiv.innerText = `You Lose! ${computer} beats ${human}`;
    }

    humanScoreSpan.innerText = humanScore;
    computerScoreSpan.innerText = computerScore;

    localStorage.setItem('humanScore', humanScore);
    localStorage.setItem('computerScore', computerScore);
}

// Rules popup logic
const rulesButton = document.getElementById('rules-button');
const rulesPopup = document.getElementById('rules-popup');
const closePopup = document.getElementById('close-popup');

rulesButton.addEventListener('click', () => {
    rulesPopup.classList.remove('hidden');
});

closePopup.addEventListener('click', () => {
    rulesPopup.classList.add('hidden');
});
