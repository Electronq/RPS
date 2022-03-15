function game(playerSelection){
    
    console.log(isGameOver())
    if(isGameOver()){
        return;
    } else{
        computerPlay = computerHand()
        playRound(playerSelection, computerPlay)
        updateScore()
        if(isGameOver()){
            const endGame = document.createElement('div');
        endGame.textContent = `Game over! ${whoWon()}`
        endGame.classList.add('midbold')

        
        restartBtn.textContent = 'Restart Game'
        restartBtn.classList.add('restartBtn')

        endGame.appendChild(restartBtn)
        outcome.appendChild(endGame)
        return;
        } 
    }


}

const pcScoreHook = document.getElementById('pcScore');
const playerScoreHook = document.getElementById('playerScore');

function updateScore(){
    pcScoreHook.textContent = `${pcScore}`
    playerScoreHook.textContent = `${playerScore}`
}



function isGameOver(){
    let totalGame = gamesPlayed
    if(totalGame === 5){
        return true
    }else{
        return false
    }

}

function restartGame(){
    const allGameContainers = document.querySelector('#outcome');
    while(allGameContainers.firstChild){
        allGameContainers.removeChild(allGameContainers.firstChild)
    }
    
    playerScore = 0;
    pcScore = 0;
    gamesPlayed = 0;
    updateScore()
}

function whoWon(){
    if(playerScore > pcScore) return 'You won!'
    else if(pcScore > playerScore) return 'You lose!'
    else return `It's a draw!`
}

let gamesPlayed = 0;
let playerScore = 0;
let pcScore = 0;




function computerHand(){
    let x = Math.floor(Math.random() * 3)
    if(x === 0){
        return "rock"
    }else if (x === 1){
        return "paper"
    }else{
        return "scissors"
    }
}


function playRound(playerHand, computerPlay){

    const drawResult = function(){
        const parentContainer = document.createElement('div');
        parentContainer.classList.add('center');


        const container = document.querySelector('#outcome')
        const gameContainer = document.createElement('div')
        gameContainer.classList.add('gameContainer')

        const pcResult = document.createElement('div');
        pcResult.textContent = `PC: ${computerPlay}`
        pcResult.classList.add('leftconv')

        const playerResult = document.createElement('div');
        playerResult.textContent =`You: ${playerHand}`
        playerResult.classList.add('rightconv')

        const outcome = document.createElement('div');
        outcome.classList.add('mid')
        outcome.textContent = `It's a draw!`
        

        
        container.appendChild(parentContainer);
        parentContainer.appendChild(gameContainer);
        gameContainer.appendChild(pcResult);
        gameContainer.appendChild(playerResult);
        gameContainer.appendChild(outcome)
    }

    const pcWinResult = function(){
        const container = document.querySelector('#outcome')
        const gameContainer = document.createElement('div')
        gameContainer.classList.add('gameContainer')

        const pcResult = document.createElement('div');
        pcResult.textContent = `PC: ${computerPlay}`
        pcResult.classList.add('leftconv')

        const playerResult = document.createElement('div');
        playerResult.textContent =`You: ${playerHand}`
        playerResult.classList.add('rightconv')

        const outcome = document.createElement('div');
        outcome.classList.add('mid')
        outcome.textContent = `You lose!`
        

        container.appendChild(gameContainer);
        gameContainer.appendChild(pcResult);
        gameContainer.appendChild(playerResult);
        gameContainer.appendChild(outcome)
    }

    const playerWins = function(){
        const container = document.querySelector('#outcome')
        const gameContainer = document.createElement('div')
        gameContainer.classList.add('gameContainer')

        const pcResult = document.createElement('div');
        pcResult.textContent = `PC: ${computerPlay}`
        pcResult.classList.add('leftconv')

        const playerResult = document.createElement('div');
        playerResult.textContent =`You: ${playerHand}`
        playerResult.classList.add('rightconv')

        const outcome = document.createElement('div');
        outcome.classList.add('mid')
        outcome.textContent = `You win!`
        

        container.appendChild(gameContainer);
        gameContainer.appendChild(pcResult);
        gameContainer.appendChild(playerResult);
        gameContainer.appendChild(outcome)
    }



    if(playerHand.toLowerCase() == "rock" && computerPlay == "rock" ){
        drawResult();
        
    }else if (playerHand.toLowerCase() == "rock" && computerPlay == "paper"){
        pcWinResult()
        pcScore++;
        

    }else if(playerHand.toLowerCase() == "rock" && computerPlay == "scissors"){
        playerWins()
        playerScore++;
        

    }else if(playerHand.toLowerCase() == "paper" && computerPlay == "rock"){
        playerWins()
        playerScore++;
       

    }else if(playerHand.toLowerCase() == "paper" && computerPlay == "paper"){
        drawResult();
        
    }else if(playerHand.toLowerCase() == "paper" && computerPlay == "scissors"){
        pcWinResult()
        pcScore++;
        

    }else if(playerHand.toLowerCase() == "scissors" && computerPlay == "rock"){
        pcWinResult()
        pcScore++;
        

    }else if(playerHand.toLowerCase() == "scissors" && computerPlay == "paper"){
        playerWins()
        playerScore++;
        

    }else if(playerHand.toLowerCase() == "scissors" && computerPlay == "scissors"){
        drawResult();

    }else{
        const result = document.createElement('div');
        result.textContent ='Error: Wrong Input';
        document.body.appendChild(result);
    }
    gamesPlayed++

    
}
    

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const restartBtn = document.createElement('button');

rockBtn.addEventListener('click', () => {
    game('rock');
});


paperBtn.addEventListener('click', () => {
    game('paper');
});


scissorsBtn.addEventListener('click', () => {
    game('scissors');

});

restartBtn.addEventListener('click', () => {
    restartGame();

})

