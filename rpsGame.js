const choices = ["rock", "paper", "scissor"];

function getComputerChoice() {
    const computerChoiceIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[computerChoiceIndex];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if (playerSelection == "rock" && computerSelection == "scissor" ||
             playerSelection == "scissor" && computerSelection == "paper" ||
             playerSelection == "paper" && computerSelection == "rock") 
    {
        return "Player Wins";
        
    }
    else if (computerSelection == "rock" && playerSelection == "scissor" ||
             computerSelection == "scissor" && playerSelection == "paper" ||
             computerSelection == "paper" && playerSelection == "rock")
    {
        return "Computer Wins";
    }
}

function game() {
    
    let playerScore = 0;
    let computerScore = 0;

    for (let roundToPlay = 0; roundToPlay < 5; roundToPlay++) {
   
    const computerSelection = getComputerChoice();
   
    const playerSelection = prompt("Rock, Paper, Scissors?");
    const result = playRound(playerSelection, computerSelection);
    
    console.log(result)
    
    if (result == "Player Wins") {
        playerScore += 1;
    }
    else {
        computerScore += 1;
    }
}

}
game();