

playGame();

//Create function that randomly returns rock, paper or scissors
//Create a variable to store the random number
// Create a variable to store the string for the choice
//Generate a random number between 1 & 3 and store it in the random number variable
// Based on the random assign rock, paper or scissors to the string variable
// return the choice

function getComputerChoice(){
    //variable declaration
    let randNum;
    let choice;

    //using math.random to generate a random number between 1 & 3
    //floor is used to round the number down to the nearest whole number
    randNum = Math.floor(Math.random() * 3) +1;
    
    //switch that assigns choice a string value based on the random number
    switch(randNum){
        case 1:
            choice = "Rock";
            break;
        
        case 2:
            choice = "Paper";
            break;
        
        case 3:
            choice = "Scissors";
            break;
        
        //not adding default as there cannot be any other number except 1,2,3
    }
    return choice;
}


//create a function getHumanChoice that asks the user their choice and return it
//create a variable for storing user choice
//create a loop condition variable
//create a repeating cycle where user is asked to enter a choice of rock paper or scissors
//store their choice in a variable
//check if the choice is valid
//if the choice is not valid alert the user and ask them to renter a valid choice
//keep repeating until the user enters a valid choice
//if the choice is valid, stop repeatings, capitalize it and return it
// return the user's choice

function getHumanChoice(roundNum){

    let choice;
    let loopCondition = true;
    while (loopCondition){
        //Ask user for input
        choice = prompt(`Round: ${roundNum}
            Make your choice; type rock, paper or scissors`);
        
        choice = choice.toLowerCase();//converts it to lowercase for comparison
        //checks if choice is valid
        if (choice === 'rock' || choice === 'paper' || choice === 'scissors'){
            loopCondition = false;
        }
        else{
            alert("Please enter a valid choice")
        }
    }
    
    //capitalize the the choice selected by the user
    choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
    
    return choice;
}

//create a function that plays a single round
//enter the human and computer choices
//compare them to determine who wins: Rock beats scissors, paper beats rock and scissors beats paper
//increase the score of the winner
//announce the round winner: tell the choices and the winner
//if there is a tie and no winner then keep the scores at 0
//announce a tie
//return 0 for computer win, 1 for player win and 2 for tie

function playRound(humanChoice, computerChoice){

    switch(humanChoice){
        //when player chooses rock
        case 'Rock':
            if (computerChoice === 'Paper'){
                console.log("Paper beats Rock, you lost!");
                alert("Paper beats Rock, you lost!")
                return 0;
            }
            else if(computerChoice === 'Scissors'){
                console.log("Rock beats Scissors, you win!");
                alert("Rock beats Scissors, you win!")
                return 1;
            }
            else{
                console.log("you both chose Rock, its a tie!");
                alert("you both chose Rock, its a tie!")
                return 2;
            }
            //break not needed as we are returning
        //when player chooses paper
         case 'Paper':
            if (computerChoice === 'Scissors'){
                console.log("Scissors beats Paper, you lost!");
                alert("Scissors beats Paper, you lost!")
                return 0;
            }
            else if(computerChoice === 'Rock'){
                console.log("Paper beats Rock, you win!");
                alert("Paper beats Rock, you win!")
                return 1;
            }
            else{
                console.log("you both chose Paper, its a tie!");
                alert("you both chose Paper, its a tie!")
                return 2;
            }

            //when player chooses Scissors
             case 'Scissors':
            if (computerChoice === 'Rock'){
                console.log("Rock beats Scissors, you lost!");
                alert("Rock beats Scissors, you lost!")
                return 0;
            }
            else if(computerChoice === 'Paper'){
                console.log("Scissors beats Paper, you win!");
                alert("Scissors beats Paper, you win!")
                return 1;
            }
            else{
                console.log("you both chose Scissors, its a tie!");
                alert("you both chose Scissors, its a tie!")
                return 2;
            }
            break;
    }
}


//create a function that runs the game for 5 rounds called playGame
//game will last 5 rounds by calling playRound 5 times
//declare variables to hold human and computer scores
//declare a variable to track the number of rounds and initialize to 0
//declare variables to store the human choice and computer choice
//declare a variable to determine the winner of each round
//create loop for 5 rounds
//at the end of the 5 rounds check who has the higher score and announce the winner

function playGame(){

    let round = 0;
    let humanSelection;
    let computerSelection;
    let humanScore = 0;
    let computerScore = 0;
    let roundWinner;

    for (let i = 0; i < 5; i++){
        round++;
        computerSelection = getComputerChoice();
        humanSelection = getHumanChoice(round);
        roundWinner = playRound(humanSelection, computerSelection);

        switch(roundWinner){
            case 0:
                computerScore++;
                break;
            
            case 1:
                humanScore++;
                break;

            case 2:
                break;
        }
    }

    if (humanScore > computerScore){
        console.log(`Congratulations you won!`);
        console.log(`Final Score: You ${humanScore} computer ${computerScore}`);
        alert(`Congratulations you won!
            Final Score: You ${humanScore} computer ${computerScore}`)
    }
    else if(humanScore < computerScore){
        console.log(`Oh man you lost!`);
        console.log(`Final Score: You ${humanScore} computer ${computerScore}`);
        alert(`Oh man you lost!
            Final Score: You ${humanScore} computer ${computerScore}`)
    }
    else{
        console.log(`It was a tie, thats crazy!`);
        console.log(`Final Score: You ${humanScore} computer ${computerScore}`);
        alert(`It was a tie, thats crazy!
            Final Score: You ${humanScore} computer ${computerScore}`)
    }
}