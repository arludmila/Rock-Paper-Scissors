var userScore = 0
var computerScore = 0

function scores(){
    document.getElementById("pcscorecontainer").innerHTML=computerScore;
    document.getElementById("userscorecontainer").innerHTML=userScore;
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

function userPlay(){
    return user
    playRound()
}

function computerPlay(){
    return options[Math.floor(Math.random()*options.length)];
}


function playRound(){
    let computerSelection="paper"
    let playerSelection="scissors"
    if((playerSelection === "paper" && computerSelection === "rock")||(playerSelection === "rock" && computerSelection === "scissors")||(playerSelection === "scissors" && computerSelection === "paper")){
        let roundresult="You Win!"
        document.getElementById("roundwinner").innerHTML=roundresult
    }
}