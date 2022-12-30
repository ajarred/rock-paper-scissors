let W = 0;
let L = 0;
// let log = '';
// let record = '';

const buttons = document.querySelectorAll('.button');
const output = document.querySelector('#output');
const log = document.querySelector('#log');
const record = document.querySelector('#record');

record.textContent = `Starting Record: ${W} - ${L}`;
log.textContent = 'YOU VS COMPUTER';
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
        log.textContent = `(YOU)${playerSelection} vs ${computerSelection}(COMPUTER)= WIN`;
        record.textContent = `Current Record: ${W}-${L}`;
        output.textContent = "NICE";
        if (W==5) {
            log.textContent += "<\n>YOU WIN!";
            output.textContent = "GGS! CONGRATS";
            record.textContent = `Final Record: ${W}-${L}`;
            W = 0;
            L = 0;
            
        }
        }
    else if (playerSelection == computerSelection) {
        log.textContent = `(YOU)${playerSelection} vs ${computerSelection}(COMPUTER)= DRAW`;
        record.textContent = `Current Record: ${W}-${L}`;
        output.textContent = "WOW";
        }
    else {
        L++;
        log.textContent = `(YOU)${playerSelection} vs ${computerSelection}(COMPUTER)= LOSE`;
        record.textContent = `Current Record: ${W}-${L}`;
        output.textContent = "OOF";
        if (L==5) {
            log.textContent += "\nYOU LOSE!";
            output.textContent = "GGS! BETTER LUCK NEXT TIME";
            record.textContent = `Final Record: ${W}-${L}`;
            W = 0;
            L = 0;
        }
    }
  //  document.getElementById('record').innerHTML = record;
   // document.getElementById('log').innerHTML = log;
   // return;
}

buttons.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.id);
    });
});