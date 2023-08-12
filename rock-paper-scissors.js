function getUserChoice (userInput) {
    userInput = prompt('Choose one... Rock, Paper, or Scissors?').toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput
    } else {
        console.log('That is not a valid option.');
        return getuserInput(userInput);
    }
};

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else if (randomNumber === 2) {
        return 'scissors';
    }
};

function youWon () {
    console.log('You won! wanna play again?');
    // add options to start again or say "goodbye".
};

function youLost () {
    console.log('Sorry, you lost this time. Wanna play again?');
    // add options to start again or say "goodbye".
};

function determineWinner (userChoice, computerChoice) {
    //The computer wins.
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

    var userChoice = getUserChoice();
    var computerChoice = getComputerChoice();

    determineWinner(userChoice, computerChoice);