
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

console.log(getComputerChoice());
