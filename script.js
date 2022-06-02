
let playerSelection, computerSelection;
let winner;

document.getElementById("r-button").onclick = function(){playASet(1);}
document.getElementById("p-button").onclick = function(){playASet(2);}
document.getElementById("s-button").onclick = function(){playASet(3);}

function playASet(inp){
    let ps = choose(inp);
    let cs = computerPlay();
    console.log(selectionToRPS(ps)+" "+selectionToRPS(cs));
    document.getElementById("player-ch").innerHTML = selectionToRPS(ps);
    document.getElementById("computer-ch").innerHTML = selectionToRPS(cs);
    playRound(ps,cs);
}

function computerPlay(){
     
           let number = Math.floor(Math.random()*10);
           if(number%3==0)
            return 1;
            else if(number%3==1)
            return 2;
            else return 3;

}

function selectionToRPS(selection){
    if(selection==1)
        return "Rock";
        if(selection==2)
        return "Paper";
        if(selection==3)
        return "Scissors";
}

function choose(move){
    return move;
}

function verdict(win)
{
    if(win=="player")
    document.getElementById("verdict").innerHTML = "You win!!";
    else if(win=="computer")
    document.getElementById("verdict").innerHTML = "Computer wins!!";
    else if(win=="draw") 
    document.getElementById("verdict").innerHTML = "It's a draw!!";
}


computerSelection = computerPlay();

console.log("Computer selected: "+selectionToRPS(computerSelection));
console.log("You selected: "+selectionToRPS(playerSelection));


function playRound(playerSelection,computerSelection){
    if(playerSelection==computerSelection)
        verdict("draw");
    if(playerSelection==1)
    {
        if(computerSelection==2)
        verdict("computer");
        else if(computerSelection==3) verdict("player");
    }
    if(playerSelection==2)
    {
        if(computerSelection==3)
        verdict("computer");
        else if(computerSelection==1) verdict("player");
    }
    if(playerSelection==3)
    {
        if(computerSelection==1)
        verdict("computer");
        else if(computerSelection==2) verdict("player");
    }
}

