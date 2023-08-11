var start = function () {
    console.log('Hey there!' +
    ' Thanks for playing Rock, Paper, Scissors!' +
    ' You choose first, then the computer will choose too.');
};

function getUserChoice (userChoice) {
    console.log('Ready? Here we go!');
    userChoice = prompt('Choose one... Rock, Paper, or Scissors?').toLowerCase();

    if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
        return userChoice
    } else {
        console.log('That is not a valid option.');
        return getUserChoice(userChoice);
    }
};

function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 2);

    switch (computerChoice) {
        case 0:
            console.log('rock');
            break;
        case 1:
            console.log('paper');
            break;
        case 2:
            console.log('scissors');
            break;
}};

function youWon () {
    console.log('You won! wanna play again?');
    // add options to start again or say "goodbye".
};

function youLost () {
    console.log('Sorry, you lost this time. Wanna play again?');
    // add options to start again or say "goodbye".
}

function determineWinner (userChoice, computerChoice) {
    //The computer wins.
    if (userChoice === computerChoice) {
        console.log('Thats a tie, play again!');
        return getUserChoice(); }
    else if (userChoice === 'rock' && computerChoice =='paper') {
            return youLost(); }
    else if (userChoice === 'paper' && computerChoice == 'scissors') {
            return youLost(); }
    else if (userChoice === 'scissors' && computerChoice == 'rock') {
        return youLost();
    //If this function is called before userChoice or computerChoice.
    } else if (userChoice === undefined){
        console.log('Someone has not played yet!');
        return getUserChoice();
    } else if (computerChoice === undefined) {
        console.log('The computer has not played...');
        return getComputerChoice();
    //There is a tie.
    } else {
        return youWon();
    }};


// function playGame() {
//     start();
//     getUserChoice();
//     getComputerChoice();
//     determineWinner();
// }


