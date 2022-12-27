
function getComputerChoice(){
ComputerChoice = Math.floor(Math.random()*3)
if(ComputerChoice == 0){
    return("ROCK")
}
else if (ComputerChoice == 1){
    return("PAPER")
}
else{
    return("SCISSOR")
}
};
function playRound(playerSelection, computerSelection){
    pselection = playerSelection.toUpperCase();
    if(pselection == "ROCK"){
        if(computerSelection == "ROCK"){
            return([0,"Its a draw Rock vs Rock"])
        }
        else if(computerSelection == "PAPER"){
            return([2,"You lose! Paper beats Rock"])
        }
        else{
            return([1,"You win! Rock crushes Scissor"])
        }}
    else if(pselection == "PAPER"){
            if(computerSelection == "ROCK"){
                return([1,"You win! Paper beats Rock"])
            }
            else if(computerSelection == "PAPER"){
                return([0,"Its a draw Paper vs Paper"])
            }
            else{
                return([2,"You lose! Scissor cuts Paper"])
            }
    }
    else if(pselection == "SCISSOR"){
        if(computerSelection == "PAPER"){
            return([1,"You win! Scissor cuts paper"])
        }
        else if(computerSelection == "SCISSOR"){
            return([0,"Its a draw Scissor vs Scissor"])
        }
        else{
            return([2,"You lose! Rock crushes Scissor"])
        }}
    else{
        alert("wrong selection")
    }
}
function game(){
    player = 0
    computer = 0
    for ( let i=0; i<5; i++){
        const input = prompt("Enter your selection:")
        result = playRound(input,getComputerChoice())
        if (result[0]==1){
            player++
            console.log("player",player)
            console.log(result[1])
        }
        else if (result[0]==0){
            console.log(result[1])
        }
        else if(result[0]==2){
            computer++
            console.log("computer",computer)
            console.log("player",player)
            console.log(result[1])
        }
    
    };
    if(player > computer){
        
        alert(`Player wins by ${player} to ${computer}`)
    }
    else if (player < computer ){
        alert(`Computer wins by ${computer} to ${player}`)
    }
    else{
        alert(`It's a draw  ${computer} to ${player}`)
    }

}
