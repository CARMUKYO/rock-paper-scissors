let choice = ["ROCK", "PAPER", "SCISSORS"]; 
let playerSelection;
let computerSelection;

//get random index of array to get a random choice;
function getComputerChoice(){
    return choice[Math.floor(Math.random()*3)];
}

//compare playerselection and computerselection to see if you win,lose or draw
function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "draw";
   }else if(playerSelection === "ROCK" && computerSelection ==="PAPER"){
        return "Win";
   }else if(playerSelection === "ROCK" && computerSelection ==="SCISSORS"){
        return "Lose";
   }else if(playerSelection === "PAPER" && computerSelection ==="SCISSORS"){
        return "Lose";
   }else if(playerSelection === "PAPER" && computerSelection ==="ROCK"){
        return "Win";
   }else if(playerSelection === "SCISSORS" && computerSelection ==="ROCK"){
        return "Lose";
   }else if(playerSelection === "SCISSORS" && computerSelection === "PAPER"){
        return "Win";
   }
}

//make the game five round, that keeps score and declares winner
function game(){
    let i = 0;
    let playerScore=0;
    let computerScore=0;
    while(i<5){
        playerSelection = prompt("Rock,Paper,Scissors","").toUpperCase();
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        if(playRound(playerSelection,computerSelection) === "Win"){
            playerScore++;
        }else if(playRound(playerSelection,computerSelection) === "Lose"){
            computerScore++;
        }
        i++;
    }

    if(playerScore === computerScore){
        console.log("draw");
    }else if(playerScore > computerScore){
        console.log("You WIN!" + playerScore + "-" + computerScore)
    }else if(playerScore < computerScore){
        console.log("You lose"+ playerScore + "-" + computerScore)
    }
    return "The game is done";
}

console.log(game())