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

function getPlayerChoice() {
    let input = prompt();
    let filteredInput = input.toUpperCase();
    if (filteredInput === "ROCK" || filteredInput === "PAPER" || filteredInput === "SCISSORS") {
        return filteredInput;
    }
    else 
    window.alert("Invalid Input. Try Again.");
    getPlayerChoice();
}

function playRound(playerSelection,computerSelection) {
    let currentMatch = `${playerSelection} vs ${computerSelection}`;
    let win = `${currentMatch} = YOU WIN`;
    let lose = `${currentMatch} = YOU LOSE`;
    // DRAW
    if (playerSelection === computerSelection) {
        console.log("DRAW");
        return;
    }
    else {
    // ROCK
    if (playerSelection === "ROCK") {
        if (computerSelection === "SCISSORS") {
            console.log(win);
        }
        else {
            console.log(lose);
        }
    }
    // SCISSORS
    if (playerSelection === "SCISSORS") {
        if (computerSelection === "PAPER") {
            console.log(win);
        }
        else {
            console.log(lose);
        }
    }
    // PAPER 
    if (playerSelection === "PAPER") {
        if (computerSelection === "ROCK") {
            console.log(win);
        }
        else {
            console.log(lose);
        }
    }
}
}
function game() {
    for (let i=0; i<5; i++) {
        getComputerChoice();
        getPlayerChoice();
        playRound();
    }
}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

console.log(`PLAYER: ${playerSelection}`);
console.log(`COMPUTER: ${computerSelection}`);
console.log(playRound(playerSelection,computerSelection));



