const options=["rock","paper","scissors"];
var user="";
var pc="";

function userPlay(){
    return user
}

function userRock(){
    user="rock";
    alert(user);
    playRound();
}
function userPaper(){
    user="paper";
    alert(user);
    userPlay();
}
function userScissors(){
    user="scissors";
    alert(user);
    userPlay();
}

function computerPlay(){
    return options[Math.floor(Math.random()*options.length)];
}


function playRound(){
    playerSelection=userPlay()
    computerSelection=computerPlay()
    console.log("Computer choice: "+computerSelection)
    if  (playerSelection === "rock" && computerSelection === "paper"){
         console.log("You lose!");
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
         console.log("You win!");
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
         console.log("You win!");
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
         console.log("You lose!");
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
         console.log("You win!");
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
         console.log("You lose!");
    }
    else if(playerSelection===computerSelection){
         console.log("You tied!")
    }
}