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
        alert("DRAW");
        return;
    }
    else {
    // ROCK
    if (playerSelection === "ROCK") {
        if (computerSelection === "SCISSORS") {
            alert(win);
        }
        else {
            alert(lose);
        }
    }
    // SCISSORS
    if (playerSelection === "SCISSORS") {
        if (computerSelection === "PAPER") {
            alert(win);
        }
        else {
            alert(lose);
        }
    }
    // PAPER 
    if (playerSelection === "PAPER") {
        if (computerSelection === "ROCK") {
            alert(win);
        }
        else {
            alert(lose);
        }
    }
}
}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection,computerSelection));


