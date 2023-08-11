var start = function () {
    console.log('Hey there!' +
    ' Thanks for playing Rock, Paper, Scissors!' +
    ' You choose first, then the computer will choose too.');
};

function getUserChoice (userInput) {
    console.log('Ready? Here we go!');
    userInput = prompt('Choose one... Rock, Paper, or Scissors?').toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput
    } else {
        console.log('That is not a valid option.')
        return getUserChoice(userInput);
    }
};

function getComputerChoice () {
    computerChoice = Math.floor(Math.random() * 2)

    switch (computerChoice) {
        case 0:
            console.log('computer: Rock!');
            break;
        case 1:
            console.log('computer: Paper!');
            break;
        case 2:
            console.log('computer: Scissors!');
            break;
    }
};

function youWon () {
    console.log('You won! wanna play again?');
    // add options to start again or say "goodbye".
};

function youLost () {
    console.log('Sorry, you lost this time. Wanna play again?');
    // add options to start again or say "goodbye".
}

function determineWinner (userInput, computerChoice) {
    if (userInput === 'rock' && computerChoice === 1, 
        userInput === 'paper' && computerChoice === 2, 
        userInput === 'scissors' && computerChoice === 0)  {
        return youLost();
    } else if (userInput === null || computerChoice === null) {
        console.log('Someone has not played yet!');
        return getUserChoice();
    } else {
        return youWon();
    }
};

// function playGame() {
//     start();
//     getUserChoice();
//     getComputerChoice();
//     determineWinner();
// }


