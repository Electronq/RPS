


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
    console.log("Computer: " + computerPlay)
    console.log("You: " + playerHand)

    if(playerHand.toLowerCase() == "rock" && computerPlay == "rock" ){
        console.log(`Draw! Computer played ${computerPlay}`)
    }else if (playerHand.toLowerCase() == "rock" && computerPlay == "paper"){
        console.log(`You LOSE! Computer played ${computerPlay}!  paper beats rock`)
    }else if(playerHand.toLowerCase() == "rock" && computerPlay == "scissors"){
        console.log(`You WIN! Computer played ${computerPlay}, rock beats scissors`)
    }else if(playerHand.toLowerCase() == "paper" && computerPlay == "rock"){
        console.log(`You WIN! Computer played ${computerPlay}, paper beats rock`)
    }else if(playerHand.toLowerCase() == "paper" && computerPlay == "paper"){
        console.log(`Draw! Computer played ${computerPlay}`)
    }else if(playerHand.toLowerCase() == "paper" && computerPlay == "scissors"){
        console.log(`You LOSE! Computer played ${computerPlay}`)
    }else if(playerHand.toLowerCase() == "scissors" && computerPlay == "rock"){
        console.log(`You LOSE! Computer played ${computerPlay}`)
    }else if(playerHand.toLowerCase() == "scissors" && computerPlay == "paper"){
        console.log(`You WIN! Computer played ${computerPlay}`)
    }else if(playerHand.toLowerCase() == "scissors" && computerPlay == "scissors"){
        console.log(`Draw! Computer played ${computerPlay}`)
    }
}
    

let computerPlay = computerHand()
let playerHand = prompt("What is your hand?")


console.log(playRound(playerHand, computerPlay))