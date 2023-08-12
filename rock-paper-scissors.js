function getUserChoice (userInput) {
    userInput = prompt('Choose one... Rock, Paper, or Scissors?').toLowerCase();

<<<<<<< HEAD
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput
=======
function getUserChoice (userChoice) {
    console.log('Ready? Here we go!');
    userChoice = prompt('Choose one... Rock, Paper, or Scissors?').toLowerCase();

    if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
        console.log(userChoice);
>>>>>>> 5a7ed77 (reverted to old code for game)
    } else {
        console.log('That is not a valid option.');
        return getuserInput(userInput);
    }
};


function getComputerChoice () {
<<<<<<< HEAD
    let randomNumber = Math.floor(Math.random() * 3);
=======
    let computerChoice = Math.floor(Math.random() * 3);
>>>>>>> 5a7ed77 (reverted to old code for game)

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
};

function youLost () {
    console.log('Sorry, you lost this time. Wanna play again?');
<<<<<<< HEAD
    // add options to start again or say "goodbye".
=======
};

function playAgain() {
    userChoice = prompt('Would you like to play again?').toLowerCase();
    if (userChoice === 'yes') {
        return playGame();
    } else if (userChoice === 'no') {
        console.log('Thanks for playing!');
    } else {
        console.log("please choose 'yes' or 'no'.")
        playAgain();
    }
>>>>>>> 5a7ed77 (reverted to old code for game)
};

function determineWinner (userChoice, computerChoice) {
    
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

    if (userChoice === computerChoice) {
        console.log("It's a tie!");
    } 
<<<<<<< HEAD
    
    //All outcomes when user chooses rock.
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return youLost();
        }
=======
};
>>>>>>> 5a7ed77 (reverted to old code for game)

        if (computerChoice === 'scissors') {
            return youWon();
        }
    }
    
    //All outcomes when user chooses paper.
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return youLost(); 
        }

<<<<<<< HEAD
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
=======
function playGame() {
    start();
    getUserChoice();
    getComputerChoice();
    determineWinner();
};

playGame();
>>>>>>> 5a7ed77 (reverted to old code for game)
