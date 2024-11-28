
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
  


function playGame() {

/* step 4 */
let humanScore = 0, computerScore = 0;

    /*STEP 5*/
    function playRound(humanChoice, computerChoice) {
        let inCaseHumanChoice = humanChoice.toLowerCase();
        let massage = "";
        switch (inCaseHumanChoice) {
            case "paper":
                (computerChoice == "rock") ? massage = "win" : (computerChoice == "paper" ? massage = "tie" : massage = "lose");
                break;
            case "rock":
                (computerChoice == "scissors") ? massage = "win" : (computerChoice == "rock" ? massage = "tie" : massage = "lose");
                break;
            case "scissors":
                (computerChoice == "paper") ? massage = "win" : (computerChoice == "scissors" ? massage = "tie" : massage = "lose");
                break;
        }
        if (massage == "tie"){
            console.log("It's a tie!");
        } 
        else if (massage == "win"){
            console.log(`You ${massage}, ${inCaseHumanChoice} beats ${computerChoice}`);
        }
        else {
            console.log(`You ${massage}, ${computerChoice} beats ${inCaseHumanChoice}`);
        }
        return massage;

    }    

    for (let i = 0; i<5; i++) {
        round_massage = playRound(getHumanChoice(), getComputerChoice());
        if (round_massage = "win") humanScore++;
        else if  (round_massage = "lose") computerScore++;
    }
    console.log(`The Game is over! ${humanScore > computerScore ? "You win!" : humanScore < computerScore ? "You lose!" : "Tie!"}`);

}

playGame();