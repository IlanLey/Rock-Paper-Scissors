const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const computerChoiceIndex = Math.floor(Math.random() * choices.length);
    return choices[computerChoiceIndex];   
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return "Win";
    }  
    else if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock") 
    ) {
        return "Loss";
    } else {
        return "Tie";
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        
        const playerChoice = button.textContent.toLowerCase();
        console.log(playerChoice);

        const computerChoice = getComputerChoice();
        console.log(computerChoice);

        const roundPlayed = playRound(playerChoice, computerChoice);
        console.log(roundPlayed);

        displayRoundResult(roundPlayed);
        displayScore(roundPlayed);

        announceWinner();
    });
});

const resultElement = document.getElementById('result');
let playerScore = 0;
let computerScore = 0;

function displayRoundResult (result) {
    if (result === "Win") {
        resultElement.textContent = "Round Won!"
        playerScore++;
    } else if (result === "Loss") {
        resultElement.textContent = "Round Lost!"
        computerScore++;
    } else {
        resultElement.textContent = "Stalemate"
    }
}

const scoreElement = document.getElementById('score');
function displayScore () {
    scoreElement.textContent = `Player ${playerScore}, Computer ${computerScore}`;
}

function announceWinner () {
    if (playerScore === 5 || computerScore === 5) {
        resultElement.textContent = playerScore === 5 ? "Player wins the game!" : "Computer wins the game!";
        
        playerScore = 0;
        computerScore = 0;
    }
}