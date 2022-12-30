let W = 0;
let L = 0;
let log = '';
let record = '';

const buttons = document.querySelectorAll('.button');
const output = document.querySelector('#output');

output.textContent = "GLHF<3";

function getComputerChoice(){
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    if ((playerSelection == "ROCK" && computerSelection =="SCISSORS") || 
        (playerSelection =="SCISSORS" && computerSelection == "PAPER") ||
        (playerSelection =="PAPER" && computerSelection == "ROCK")) {
        W++;
        log = `(YOU)${playerSelection} vs ${computerSelection}(COMPUTER)= WIN`;
        record = `Current Record: ${W}-${L}`;
        output.textContent = "NICE";
        if (W==5) {
            log += "</br>YOU WIN!";
            output.textContent = "GGS! CONGRATS";
            W = 0;
            L = 0;
            record = `Current Record: ${W}-${L}`;
        }
        }
    else if (playerSelection == computerSelection) {
        log = `(YOU)${playerSelection} vs ${computerSelection}(COMPUTER)= DRAW`;
        record = `Current Record: ${W}-${L}`;
        output.textContent = "WOW";
        }
    else {
        L++;
        log = `(YOU)${playerSelection} vs ${computerSelection}(COMPUTER)= LOSE`;
        record = `Current Record: ${W}-${L}`;
        output.textContent = "OOF";
        if (L==5) {
            log += "<br>YOU LOSE!";
            output.textContent = "GGS! BETTER LUCK NEXT TIME";
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