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

const choiceImages = {
    'rock': 'img/e2f514e97d8f1b87d406a7bced07190e2c368075.png',
    'scissors': 'img/388b63da8e9ba336eea3ea7f107fc48755a6b68d.png',
    'paper': 'img/9e584d5f879bf162796082bc4c606349436e0c52.png'
};

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const humanChoice = button.getAttribute('data-choice');
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        transitionToResult(humanChoice, computerChoice);
    });
});

function transitionToResult(human, computer) {
    document.querySelector('.choices').style.display = 'none'; // hide game buttons
    document.querySelector('.choose-box').style.display = 'flex'; // show the choose box

    // Set background images inside .btn-cir buttons
    document.querySelector('.box-left .btn-cir').style.backgroundImage = `url(${choiceImages[human]})`;
    document.querySelector('.box-right .btn-cir').style.backgroundImage = `url(${choiceImages[computer]})`;

    // Set border colors according to choice
    document.querySelector('.box-left .btn-cir').style.borderColor = getBorderColor(human);
    document.querySelector('.box-right .btn-cir').style.borderColor = getBorderColor(computer);

    // Set the result (Win / Lose / Draw)
    let result = checkWinner(human, computer);
    document.getElementById('result-text').textContent = result;
}

function checkWinner(user, pc) {
    if (user === pc) return "IT'S A DRAW";
    if ((user === 'rock' && pc === 'scissors') ||
        (user === 'paper' && pc === 'rock') ||
        (user === 'scissors' && pc === 'paper')) {
        return "YOU WON";
    }
    return "YOU LOST";
}

function getBorderColor(choice) {
    switch (choice) {
        case 'rock': return '#0074B6'; // blue
        case 'paper': return '#FFA943'; // orange
        case 'scissors': return '#BD00FF'; // purple
        default: return '#ccc';
    }
}

function playAgain() {
    window.location.reload();
}

    humanScoreSpan.innerText = humanScore;
    computerScoreSpan.innerText = computerScore;

    localStorage.setItem('humanScore', humanScore);
    localStorage.setItem('computerScore', computerScore);


const rulesButton = document.getElementById("rules-button");
const popup = document.getElementById("rules-popup");

rulesButton.addEventListener("click", () => {
    popup.style.display = popup.style.display === "none" ? "block" : "none";
});

