


/*step 2*/
function getComputerChoice() {
    let guess = Math.random()*3 + 1;
    if (guess >= 1 && guess < 2)
        return "rock";
    else if (guess >= 2 && guess < 3)
        return "paper";
    else
        return "scissors"; 
}

/*step 3*/
function getHumanChoice() {
    return prompt("Enter your choice: ");
}

getHumanChoice();

/* step 4 */
let humanScore = 0, computerScore = 0;

/*STEP 5*/
function playRound(humanChoice, computerChoice) {

}