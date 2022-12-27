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
        return filteredInput
    }
    else 
    window.alert("Invalid Input. Try Again.");
    getPlayerChoice();
}

console.log(getPlayerChoice());

