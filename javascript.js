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
    let currentMatch = `(YOU)${playerSelection} vs ${computerSelection}`;
    let draw = `${currentMatch} = DRAW`;
    let win = `${currentMatch} = YOU WIN`;
    let lose = `${currentMatch} = YOU LOSE`;
    let result = `Current Record: ${W}-${L}`;

    // DRAW
    if (playerSelection === computerSelection) {
        console.log(draw);
        console.log(result);
    }
    else {
    // ROCK
    if (playerSelection === "ROCK") {
        if (computerSelection === "SCISSORS") {
            console.log(win);
            W++;
            console.log(result);
        }
        else {
            console.log(lose);
            L++;
            console.log(result);
        }
    }
    // SCISSORS
    if (playerSelection === "SCISSORS") {
        if (computerSelection === "PAPER") {
            console.log(win);
            W++;
            console.log(result);
        }
        else {
            console.log(lose);
            L++;
            console.log(result);
        }
    }
    // PAPER 
    if (playerSelection === "PAPER") {
        if (computerSelection === "ROCK") {
            console.log(win);
            W++;
            console.log(result);
        }
        else {
            console.log(lose);
            L++;
            console.log(result);
        }
    }
}
}
function game() {

    for (let i=0; i<5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection);
    }
}

console.log(game());