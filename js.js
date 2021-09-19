function computerPlay() {
    var randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0){
       return "Rock"
    } else if(randomNumber === 1){
        return "Paper"
    } else {
        return "Scissors"
    }

}
 
function oneRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase()
    if(player === "rock" && computerSelection === "Paper"){
        return "You lose! Paper beats Rock"
    } else if(player === "rock" && computerSelection === "Scissors"){
        return "You win! Rock beats Scissors"
    } else if(player === "rock" && computerSelection === "Rock"){
        return "It's a tie. You both chose Rock"
    } else if(player === "paper" && computerSelection === "Paper"){
        return "It's a tie. You both chose Paper"
    } else if(player === "paper" && computerSelection === "Rock"){
        return "You win! Paper beats Rock"
    } else if(player === "paper" && computerSelection === "Scissors"){
        return "You lose! Paper beats Rock"
    } else if(player === "scissors" && computerSelection === "Scissors"){
        return "It's a tie. You both chose Scissors" 
    } else if(player === "scissors" && computerSelection === "Rock"){
        return "You lose! Rock beats Scissors"
    } else{
        return "You win! Scissors beats Paper"
    }

}

function game(){
    let computerWins = 0
    let playerWins = 0

    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("What is your choice?")
        let round = oneRound(playerSelection, computerPlay())
        console.log(round)
        if(round.includes("win")){
            playerWins++
        }else if(round.includes("lose")){
            computerWins++
        } 
    }
    console.log(`The score is ${playerWins + " : " + computerWins}`)
    if(playerWins > computerWins){
        console.log("You are the winner!")
    }else{
        console.log("You lose!")
    }
}

game()
