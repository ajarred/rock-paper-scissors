let W = 0;
let L = 0;

const buttons = document.querySelectorAll('.button');
const record = document.querySelector('#record');
const log = document.querySelector('#log');
const output = document.querySelector('#output');

record.textContent = `Starting Record: ${W} - ${L}`;
log.textContent = 'YOU VS COMPUTER';
output.textContent = "GLHF<3";

function getComputerChoice(){
    let choices = ['SWORD', 'LANCE', 'AXE'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    if ((playerSelection == "SWORD" && computerSelection =="AXE") || 
        (playerSelection =="AXE" && computerSelection == "LANCE") ||
        (playerSelection =="LANCE" && computerSelection == "SWORD")) {
        W++;
        record.textContent = `Current Record: ${W}-${L}`;
        log.textContent = `(YOU)${playerSelection} vs ${computerSelection}(COMPUTER)= WIN`;
        output.textContent = "NICE";
        if (W==5) {
            log.textContent += "\nYOU WIN!";
            record.textContent = `Final Record: ${W}-${L}`;
            output.textContent = "GGS! CONGRATS";
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
            record.textContent = `Final Record: ${W}-${L}`;
            output.textContent = "GGS! BETTER LUCK NEXT TIME";
            W = 0;
            L = 0;
        }
    }
}

buttons.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.id);
    });
});