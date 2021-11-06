var userScore = 0
var computerScore = 0
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");
const winnertxt_span = document.getElementById("winner-text");
const userscore_span = document.getElementById("user-score");
const pcscore_span = document.getElementById("pc-score");
const again_btn = document.getElementById("again");

function getComputerChoice(){
    let options=["Rock","Paper","Scissors"];
    return options[Math.floor(Math.random()*options.length)];
}

function win(user,pc){
    userScore++;
    userscore_span.innerHTML = userScore;
    pcscore_span.innerHTML = computerScore;
    winnertxt_span.innerHTML = `You won! ${user} beats ${pc}`;
    document.getElementById(user).classList.add("win_glow");
    setTimeout(function() {
        document.getElementById(user).classList.remove("win_glow")
    },300);
}
function lose(user,pc){
    computerScore++;
    userscore_span.innerHTML = userScore;
    pcscore_span.innerHTML = computerScore;
    winnertxt_span.innerHTML = `You lost! ${user} beats ${pc}`;
    document.getElementById(user).classList.add("lose_glow");
    setTimeout(function() {
        document.getElementById(user).classList.remove("lose_glow")
    },300);}
function tie(user,pc){
    userscore_span.innerHTML = userScore;
    pcscore_span.innerHTML = computerScore;
    winnertxt_span.innerHTML = `You tied! ${user} equals ${pc}`;
    document.getElementById(user).classList.add("tie_glow");
    setTimeout(function() {
        document.getElementById(user).classList.remove("tie_glow")
    },300);}
function playAgain(){ 
    userScore=0;
    computerScore=0;
    userscore_span.innerHTML = userScore;
    pcscore_span.innerHTML = computerScore;
    winnertxt_span.innerHTML = "";
}
function fiveRoundsAlert(){
    if(userScore===5){
        alert("You won 5 rounds! Congrats! 👏🎉👏");
        playAgain();
    }
    else if(computerScore===5){
        alert("You lost 5 rounds! 😓😓 Try again! 💪💪" );
        playAgain();
    }
}
function playRound(user){
    let pc = getComputerChoice();
    switch (user+pc) {
        case "RockScsissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(user,pc);
            fiveRoundsAlert()
            break;
        case "RockPaper":
        case "ScissorsRock":
        case "PaperScissors":
            lose(user,pc);
            fiveRoundsAlert()
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            tie(user,pc);
            fiveRoundsAlert()
            break;
    }
}
function userClickListen(){
    rock_div.addEventListener("click",function(){
        playRound("Rock");
    })
    paper_div.addEventListener("click",function(){
        playRound("Paper");
    })
    scissors_div.addEventListener("click",function(){
        playRound("Scissors");
    })
    again_btn.addEventListener("click",function(){
        playAgain();
    })
}
userClickListen()