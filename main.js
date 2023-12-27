
let game1 = game ();
let game2 = game ();
let game3 = game ();
let game4 = game ();
let game5 = game ();

// let game1 = "USER";
// let game2 = "COMPUTER";
// let game3 = "USER";
// let game4 = "TIE";
// let game5 = "USER";

let playRound = [game1, game2, game3, game4, game5];
console.log (playRound);

let user = playerCounter ("USER"); 
let computer = playerCounter ("COMPUTER");
let tie = playerCounter ("TIE")

console.log(user, computer, tie);

function playerCounter (player) {
    let result;
    let result2 = secondCount ();
    let resultGeneral;
    
    if (game1 == player) {
        if (game2 == player || game3 == player) {
            if (game2 == player) {
                if (game2 && game3 == player) {
                    result = 3;
                    } else {
                    result = 2;
                    }
                } else if (game3 == player) {
                    result = 2;
                } else if (game2 == player && game3 == player) {
                    result = 3; } 
        } else {
            result = 1;
        }
    } else if (game2 == player) {
        if (game3 == player) {
            result = 2;
        } else {
        result = 1;
        }
    } else if (game3 == player) {
        result = 1;
    } else {
        result = 0;
    }

    function secondCount () {
        let result;
        if (game4 == player || game5 == player) {
            if (game4 == player && game5 == player) {
                result = 2;
            } else {
                result = 1;
            } 
        } else {
        result = 0;
        }
        return result
    }
    return resultGeneral = result + result2
}

function game () {
    let input = prompt ("What's your winner hand today?")
    let userSelection = input.toUpperCase ();
    let computerSelection = getComputerChoice ();

        function getComputerChoice () {
            let hands = ["ROCK", "PAPER", "SCISSORS"]
            let computerSelection = hands [Math.floor(Math.random() * hands.length)];
            // I don't really understand why this Math.floor and Math.random works. But it does.
            return computerSelection;
        }

        function getRoundWinner () {
            if (userSelection == "ROCK" && computerSelection == "SCISSORS") {
                alert ("You fricking win! Rock beats Scissors")
                return "USER"
            } else if (userSelection == "PAPER" && computerSelection == "ROCK") {
                alert ("You fricking win! Paper beats Rock")
                return "USER"
            } else if (userSelection == "SCISSORS" && computerSelection == "PAPER") {
                alert ("You fricking win! Scissors beat Paper")
                return "USER"
            } else if (userSelection == "SCISSORS" && computerSelection == "ROCK") {
                alert ("You loser! Rock beats Scissors")
                return "COMPUTER"
            } else if (userSelection == "PAPER" && computerSelection == "SCISSORS") {
                alert ("You loser! Scissors beat Paper")
                return "COMPUTER"
            } else if (userSelection == "ROCK" && computerSelection == "PAPER") {
                alert ("You loser! Paper beats Rock")
                return "COMPUTER"
            } else if (userSelection == computerSelection){
                alert ("Tie!")
                return "TIE"
            } else {
                alert ("Error")
            }
        
        }
    return getRoundWinner ();
}