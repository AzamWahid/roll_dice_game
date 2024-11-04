let randomNum = 0;
let Player1CurrScore = 0;
let Player2CurrScore = 0;
let Player1TotalScore = 0;
let Player2TotalScore = 0;
let CurrPlayer = true;

let player1Name = prompt("First Player Name").toUpperCase();
let player2Name = prompt("Second Player Name").toUpperCase();

document.querySelector('#player1Name').innerHTML = player1Name;
document.querySelector('#player2Name').innerHTML = player2Name;

function rollDice() {
    randomNum = Math.ceil(Math.random() * 6);
    document.querySelector('img').src = `./assets/${randomNum}.png`;
    if (CurrPlayer) {
        if (randomNum != 1) {
            Player1CurrScore += randomNum;
        }
        else {
            Player1CurrScore = 0;
            switchPlayer();
        }
    }
    else {
        if (randomNum != 1) {
            Player2CurrScore += randomNum;
        }
        else {
            Player2CurrScore = 0;
            switchPlayer();
        }
    }
    UpdateScoreOnUI();

}


function hold() {
    if (CurrPlayer) {

        Player1TotalScore += Player1CurrScore;
        if (Player1TotalScore >= 100) {
            document.querySelector('.gameArea').innerHTML = `<h1>${player1Name} WIN </h1> <br/>
              <button onclick="newGame()">New Game</button>`;
        }
        else {
            switchPlayer();
        }
    }
    else {
        Player2TotalScore += Player2CurrScore;
        if (Player2TotalScore >= 100) {
            document.querySelector('.gameArea').innerHTML = `<h1>${player2Name} WIN </h1> <br/>
              <button onclick="newGame()">New Game</button>`;
        }
        else {
            switchPlayer();
        }
    }

    UpdateScoreOnUI();
}


function switchPlayer() {
    CurrPlayer = !CurrPlayer;
    document.querySelector('.playBody1').classList.toggle('active');
    document.querySelector('.playBody2').classList.toggle('active');
    Player1CurrScore = 0;
    Player2CurrScore = 0;
}


const player1CurrScoreElement = document.querySelector('#Player1CurrScore');
const player2CurrScoreElement = document.querySelector('#Player2CurrScore');
const player1ScoreElement = document.querySelector('#Player1Score');
const player2ScoreElement = document.querySelector('#Player2Score');




function UpdateScoreOnUI() {

    if (player1CurrScoreElement) 
        player1CurrScoreElement.innerHTML = Player1CurrScore;
    
    if (player2CurrScoreElement) 
        player2CurrScoreElement.innerHTML = Player2CurrScore;
    
    if (player1ScoreElement) 
        player1ScoreElement.innerHTML = Player1TotalScore;
    
    if (player2ScoreElement)
        player2ScoreElement.innerHTML = Player2TotalScore;

}

function newGame() {
    location.reload();
}