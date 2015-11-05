////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

// Write an expression that operates on a variable called `move`
// If a `move` has a value, your expression should evaluate to that value.
// However, if `move` is not specified / is null, your expression should equal `getInput()`.

function getPlayerMove(move) {
    var getMove; 
    if (move === null) {
        getInput ();
    }
    if (move !== '') {
        getMove = move;
    }
    return getMove;
}

// Write an expression that operates on a variable called `move`
// If a `move` has a value, your expression should evaluate to that value.
// However, if `move` is not specified / is null, your expression should equal `randomPlay()`.

function getComputerMove(move) {
    var compMove;
    if (move !== '') {
        compMove = move;
    } else {
        randomPlay();
    }
    return compMove;
}

// Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove == computerMove) {
       winner = "tie";
    } else if (playerMove == "rock" && computerMove == "paper") {
       winner = "computer";
    } else if (playerMove == "rock" && computerMove == "scissors") {
       winner = "player";
    } else if (playerMove == "paper" && computerMove == "rock") {
       winner = "player";
    } else if (playerMove == "paper" && computerMove == "scissors") {
       winner = "computer";
    } else if (playerMove =="scissors" && computerMove == "rock") {
       winner = "computer";
    } else {
       winner = "player";
    }
    return winner;
}

// Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.

function playToFive(num) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        winner = getWinner(playerMove,computerMove);

        if (winner === "Player") {
            console.log("Player chose " + playerMove + "while Computer chose " + computerMove + "Player Wins!");
            playerWins++;
        }
        else if (winner === "Computer") {
            console.log("Player chose " + playerMove + "while Computer Chose " + computerMove + "Computer Wins!");
            computerWins++;
        }
        else if (winner === "Tie") {
            console.log("This round was a Tie.")
        }
        console.log("The score is " + playerWins + " to " + computerWins + ".");
    }
    return [playerWins, computerWins]
}