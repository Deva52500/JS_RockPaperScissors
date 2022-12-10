let computerScore = 0
let playerScore =  0

document.getElementById("scissors_button").addEventListener("click", scissors);

function scissors(){
    let s_val= document.getElementById("scissors_button").innerText
    document.getElementById("p_options").innerHTML="Player Played:"+ " " + s_val
    let items = Array("Rock", "Paper", "Scissors")
          let item = items[Math.floor(Math.random()*items.length)];
          console.log ('ComputerPlay Item', item)
          document.getElementById("c_options").innerHTML="Computer Played:"+ " " + item  
    console.log(s_val,item)        
    const play = playRound(s_val,item)
    if (play==="Computer Won"){
        computerScore = computerScore + 1;
        console.log("Computer Score", computerScore)
        document.getElementById("c_score").innerHTML="Computer Score:"+ computerScore
    }else if (play==="Player Won"){
        playerScore= playerScore + 1;
        console.log("Player Score", playerScore)
        document.getElementById("p_score").innerHTML="Player Score:"+playerScore
    }else{
        console.log("Its a Tie: Current Player Score", playerScore, "Computer Score", computerScore)
    }  
    const game=FinalGame(playerScore, computerScore)
    if (game==undefined){
            document.getElementById("result").innerHTML="Winner:"+ " "
        }else{
            document.getElementById("result").innerHTML="Winner:"+ " " + game
        console.log(game)
        }

}

document.getElementById("paper_button").addEventListener("click", paper);

function paper(){
    let p_val= document.getElementById("paper_button").innerText
    document.getElementById("p_options").innerHTML="Player Played:"+ " " + p_val 
    let items = Array("Rock", "Paper", "Scissors")
          let item = items[Math.floor(Math.random()*items.length)];
          console.log ('ComputerPlay Item', item)
          document.getElementById("c_options").innerHTML="Computer Played:"+ " " + item  
    console.log(p_val,item)        
    const play = playRound(p_val,item)
    if (play==="Computer Won"){
        computerScore = computerScore + 1;
        console.log("Computer Score", computerScore)
        document.getElementById("c_score").innerHTML="Computer Score:"+ computerScore
    }else if (play==="Player Won"){
        playerScore= playerScore + 1;
        console.log("Player Score", playerScore)
        document.getElementById("p_score").innerHTML="Player Score:"+ playerScore
    }else{
        console.log("Its a Tie: Current Player Score", playerScore, "Computer Score", computerScore)
    }  
    const game=FinalGame(playerScore, computerScore)
        if (game==undefined){
            document.getElementById("result").innerHTML="Winner:"+ " "
        }else{
            document.getElementById("result").innerHTML="Winner:"+ " " + game
        console.log(game)
        }
}


document.getElementById("rock_button").addEventListener("click", rock);


function rock(){
    let r_val= document.getElementById("rock_button").innerText
    document.getElementById("p_options").innerHTML="Player Played:"+ " " + r_val
    let items = Array("Rock", "Paper", "Scissors")
    let item = items[Math.floor(Math.random()*items.length)];
    console.log ('ComputerPlay Item', item)
    document.getElementById("c_options").innerHTML="Computer Played:"+ " " + item  
    console.log(r_val,item)
    const play = playRound(r_val, item)
    console.log("Play",play)        
        
        if (play==="Computer Won"){
            computerScore = computerScore + 1;
            console.log("Computer Score", computerScore)
            document.getElementById("c_score").innerHTML="Computer Score:"+ computerScore
        }else if (play==="Player Won"){
            playerScore= playerScore + 1;
            console.log("Player Score", playerScore)
            document.getElementById("p_score").innerHTML="Player Score:"+ playerScore
           
        }else{
            console.log("Its a Tie: Current Player Score", playerScore, "Computer Score", computerScore)
        }  
        const game=FinalGame(playerScore, computerScore)
        if (game==undefined){
            document.getElementById("result").innerHTML="Winner:"+ " "
        }else{
            document.getElementById("result").innerHTML="Winner:"+ " " + game
        console.log(game)
        }
        
    }

function playRound(playerSelection, computerSelection){

    if(playerSelection == computerSelection){
       console.log ('Tie');
       return "Tie"
    }
    else if(playerSelection == 'Rock'){
        if(computerSelection == 'Paper'){
            console.log ('Computer Won');
            return "Computer Won"            
        }else{
            console.log ('Player Won');
            return "Player Won"       
        }  
    }
        
    else if(playerSelection == 'Scissors'){
        if(computerSelection == 'Rock'){
            console.log ('Computer Won');
            return "Computer Won"
            
        }else{
            console.log ('Player Won');
            return "Player Won"
        }
    }
        
    else if(playerSelection == 'Paper'){
        if(computerSelection == 'Scissors'){
             console.log ('Computer Won');
             return "Computer Won"
        }else{
            console.log ('Player Won');
            return "Player Won"
        }
    }   
}

function FinalGame(player_score, computer_score){
    if (player_score==5){
        document.getElementById("rock_button").disabled = true;
        document.getElementById("paper_button").disabled = true;
        document.getElementById("scissors_button").disabled = true;     
        return "Player Win"
        
    }
    if (computer_score==5){
        document.getElementById("rock_button").disabled = true;
        document.getElementById("paper_button").disabled = true;
        document.getElementById("scissors_button").disabled = true;     
        return "Computer Win"
    }
}