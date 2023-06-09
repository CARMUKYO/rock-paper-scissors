let playerScore = 0;
let computerScore =0;
let choice = ["ROCK", "PAPER", "SCISSORS"]; 
let computerSelection;
const buttons = document.querySelectorAll('input');

function getComputerChoice(){
    return choice[Math.floor(Math.random()*3)];
}

function playRound(playerSelection){
    let result = "";
    computerSelection = getComputerChoice();

    if(playerSelection === computerSelection){
        result = ("Tie. You both chose "+ playerSelection + "<br> Player Score: " + playerScore + " | Computer score: " + computerScore);
    }else if((playerSelection == 'ROCK' && computerSelection == 'SCISSORS') || (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') ||
             (playerSelection == 'PAPER' && computerSelection == 'ROCK')){
                playerScore += 1;
                result = ('You win the round! ' + playerSelection + ' beats ' + computerSelection + "<br>Player score: " + playerScore + " | Computer score: " + computerScore);
                if (playerScore == 5) {
                    result += '<br>You won the game!';
                    endGame();
                }
    }else{
        computerScore += 1;
        result = ('You lose the round! ' + computerSelection + ' beats ' + playerSelection + "<br>Player score: " + playerScore + " | Computer score: " + computerScore);

        if (computerScore == 5) {
            result += '<br>You lost the game!';
            endGame();
        }
    }
    document.getElementById('result').innerHTML = result;
    return;
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value);
    })
})

function endGame() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}