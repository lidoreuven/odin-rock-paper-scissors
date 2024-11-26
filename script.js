


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
        humanScore++;
    }
    else {
        console.log(`You ${massage}, ${computerChoice} beats ${inCaseHumanChoice}`);
        computerScore++;
    }
    

  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  console.log(`Computer Choice is: ${computerSelection}`);
  console.log(`Human Choice is: ${humanSelection}`);
  playRound(humanSelection, computerSelection);