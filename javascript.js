let W = 0;
let L = 0;

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);
    switch(computerChoice) {
        case 0:
            computerChoice = "ROCK";
            break;
        case 1:
            computerChoice = "PAPER";
            break;
        case 2:
            computerChoice = "SCISSORS";
            break;
    }
    return computerChoice;
}

/* function getPlayerChoice() {
    let input = prompt();
    let filteredInput = input.toUpperCase();
    if (filteredInput === "ROCK" || 
        filteredInput === "PAPER" || 
        filteredInput === "SCISSORS") {
        return filteredInput;
    }
    else 
    window.alert("Invalid Input. Try Again.");
    getPlayerChoice();
} */

function playRound(playerSelectionn) {
    let computerSelection = computerChoice();
    let currentMatch = `(YOU)${playerSelection} vs ${computerSelection}`;
    let draw = `${currentMatch} = DRAW`;
    let win = `${currentMatch} = YOU WIN`;
    let lose = `${currentMatch} = YOU LOSE`;
    let record = `Current Record: ${W}-${L}`;
    let log = '';
    

    if (playerSelection === computerSelection) {
        log = draw.concat("\n",record);
    }
    else if 
        ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || 
        (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK")) {
        W++;
        log = win.concat("\n",record);
        if (W==5) {
        log = "YOU WIN";
        disableButtons();
        }
        }
    else {
        L++;
        log = lose.concat("\n",record);
        if (L==5) {
        log = "YOU LOSE";
        disableButtons();
        }
    }
    document.getElementById('log').innerHTML = log;
    return;
}

/*function game() {
    // for (let i=0; i<5; i++) {
       // let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection);
    }
// } */ 

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

const buttons = document.querySelectorAll('.btn');

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = "ROCK";
    game();
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = "PAPER";
    game();
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = "SCISSORS";
    game();
});
