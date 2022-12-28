var player = 0
var computer = 0
function game(value){
    const playerSelectionDisplay = document.getElementById("player-choice");
    const computerSelection = getComputerChoice();
    const computerSelectionDisplay = document.getElementById('computer-choice');
    const container = document.getElementsByClassName("choice-container")
    const info = document.getElementById("info")
    const score = document.getElementById("score")
    const button = document.querySelector('#button');
    let choice = value
    let result = playRound(choice,computerSelection)
    playerSelectionDisplay.innerHTML = choice;
    computerSelectionDisplay.innerHTML = ""+computerSelection;
    winner(result[0]) 
    if (player == 5 || computer == 5){
        info.innerHTML = ""
        playerSelectionDisplay.innerHTML = "-";
        computerSelectionDisplay.innerHTML = "-";
    }
    else{
    info.innerHTML = result[1]
    playerSelectionDisplay.innerHTML = choice;
    computerSelectionDisplay.innerHTML = ""+computerSelection;}
    
    if (player == 5 || computer == 5){
        button.disabled = true;
    }

}
function winner(value){
    
        if (value==1 && player < 5 && computer < 5){
            player++
            console.log("player :",player)
            score.innerHTML = player +'-'+computer
            

        }
        else if(value==2 && player < 5 && computer < 5){
            computer++
            console.log("computer :",computer)
            score.innerHTML = player +'-'+computer
            
        }
        
    if(player == 5 && player < 6 && computer < 6){
        score.innerHTML = "<h1 style='color:Green'>YOU win</h1> <div><a href='.' style='background-color: rgb(245, 280, 300); color: black; text-decoration: none; padding: 0.5em;margin-top: 50px; border-radius: 25px; border:1px solid;'>RESTART</a></div>"
        
    
    }
    else if(computer == 5 && player < 6 && computer < 6){
        score.innerHTML = "<h1 style='color:Green'>YOU win</h1> <div><a href='.' style='background-color: rgb(245, 280, 300); color: black; text-decoration: none; padding: 0.5em;margin-top: 50px; border-radius: 25px; border:1px solid;'>RESTART</a></div>"
        
    }
    
    

   
    
}
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
