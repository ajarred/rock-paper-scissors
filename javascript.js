let W = 0;
let L = 0;

const buttons = document.querySelectorAll('input');

function getComputerChoice(){
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    })
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    if ((playerSelection == "ROCK" && computerSelection =="SCISSORS") || 
        (playerSelection =="SCISSORS" && computerSelection == "PAPER") ||
        (playerSelection =="PAPER" && computerSelection == "ROCK")) {
        W+=1;
        log =  `(YOU)${playerSelection} vs ${computerSelection}= WIN, 
        Current Record: ${W}-${L}`;
        if (W==5) {
            log += "\nYOU WIN!";
            disableButtons();
        }
        }
    else if (playerSelection == computerSelection) {
        log = log = `(YOU)${playerSelection} vs ${computerSelection}= DRAW, 
        Current Record: ${W}-${L}`;
        }
    else {
        L+=1;
        log = `(YOU)${playerSelection} vs ${computerSelection}= LOSE, 
            Current Record: ${W}-${L}`;
        if (L==5) {
            log += "\nYOU LOSE!";
        disableButtons();
        }
    }
    document.getElementById('log').innerHTML = log;
    return;
}

buttons.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.value);
    });
});