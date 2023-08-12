function getUserChoice (userInput) {
    userInput = prompt('Choose one... Rock, Paper, or Scissors?').toLowerCase();


    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        console.log(`your choice: ${userInput}`);
    } else {
        console.log('That is not a valid option.');
        return getUserChoice(userInput);
    }
};

function getComputerChoice () {
    var computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        console.log('rock');
    } else if (computerChoice === 1) {
        console.log('paper');
    } else if (computerChoice === 2) {
        console.log('scissors');
    }
};


function youWon () {
    console.log('You won!');
    playAgain();
};

function youLost () {
    console.log('Sorry, you lost this time.');
    playAgain();
};

function playAgain() {
    userInput = prompt('Would you like to play again?').toLowerCase();
    if (userInput === 'yes') {
        return playGame();
    } else if (userInput === 'no') {
        console.log('Thanks for playing!');
    } else {
        console.log("please choose 'yes' or 'no'.")
        playAgain();
    }
};

function determineWinner (userChoice, computerChoice) {

    if (userChoice === computerChoice) {
        console.log("It's a tie!");
    }
    
    //All outcomes when user chooses rock.
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return youLost();
        }

        if (computerChoice === 'scissors') {
            return youWon();
        }
    }
    
    //All outcomes when user chooses paper.
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return youLost(); 
        }

        if (computerChoice === 'rock') {
            return youWon();
        }
    }

    //All ourcomes when user chooses scissors. 
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return youLost(); 
        }
        if (computerChoice === 'paper') {
            return youWon();
        }
    }  
};

function playGame() {
    getUserChoice();
    getComputerChoice();
    determineWinner();
}

playGame();
