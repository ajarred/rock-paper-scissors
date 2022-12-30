let W = 0;
let L = 0;
let log = '';
let record = '';

const buttons = document.querySelectorAll('.button');

function getComputerChoice(){
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    if ((playerSelection == "ROCK" && computerSelection =="SCISSORS") || 
        (playerSelection =="SCISSORS" && computerSelection == "PAPER") ||
        (playerSelection =="PAPER" && computerSelection == "ROCK")) {
        W+=1;
        log = `(YOU)${playerSelection} vs ${computerSelection}= WIN`;
        record = `Current Record: ${W}-${L}`;
        if (W==5) {
            log += "\nYOU WIN!";
            W = 0;
            L = 0;
            record = `Current Record: ${W}-${L}`;
        }
        }
    else if (playerSelection == computerSelection) {
        log = `(YOU)${playerSelection} vs ${computerSelection}= DRAW`;
        record = `Current Record: ${W}-${L}`;
        }
    else {
        L+=1;
        log = `(YOU)${playerSelection} vs ${computerSelection}= LOSE`;
        record = `Current Record: ${W}-${L}`;
        if (L==5) {
            log += "\nYOU LOSE!";
            W = 0;
            L = 0;
            record = `Current Record: ${W}-${L}`;
        }
    }
    document.getElementById('record').innerHTML = record;
    document.getElementById('log').innerHTML = log;
    return;
}

buttons.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.id);
    });
});