
let playerSelection, computerSelection;
let winner,modal=false;

function showModal(){
    document.getElementById("last-ctn").style.display="flex";
}
function closeModal(){
    document.getElementById("last-ctn").style.display="none";
}

function playASet(inp){
    let ps = choose(inp);
    let cs = computerPlay();
    console.log(selectionToRPS(ps)+" "+selectionToRPS(cs));
    document.getElementById("player-ch").innerHTML = selectionToRPS(ps);
    document.getElementById("computer-ch").innerHTML = selectionToRPS(cs);
    showimg(ps,cs);
    playRound(ps,cs);
}
function showimg(ps,cs){
    pimg = document.createElement("img");
    if(ps == 1) pimg.src = "resources/images/rock.png";
    else if(ps == 2) pimg.src = "resources/images/paper.png";
    else if(ps == 3) pimg.src = "resources/images/scissors.png";
    else if(ps == 4) pimg.src = "resources/images/lizard.png";
    else if(ps == 5) pimg.src = "resources/images/spock.png";
    psl = document.getElementById("player-ch");
    cimg = document.createElement("img");
    if(cs == 1) cimg.src = "resources/images/rock.png";
    else if(cs == 2) cimg.src = "resources/images/paper.png";
    else if(cs == 3) cimg.src = "resources/images/scissors.png";
    else if(cs == 4) cimg.src = "resources/images/lizard.png";
    else if(cs == 5) cimg.src = "resources/images/spock.png";
    csl = document.getElementById("computer-ch");
    psl.appendChild(pimg);
    csl.appendChild(cimg);
}

function computerPlay(){
     
           let number = Math.floor(Math.random()*10);
           if(number%5==0)
            return 1;
            else if(number%5==1)
            return 2;
            else if(number%5==2) 
            return 3;
            else if(number%5==3)
            return 4;
            else if(number%5==4)
            return 5;

}

function selectionToRPS(selection){
    if(selection==1)
        return "Rock";
        if(selection==2)
        return "Paper";
        if(selection==3)
        return "Scissors";
        if(selection==4)
        return "Lizard";
        if(selection==5)
        return "Spock";
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
function playRound(playerSelection,computerSelection){
    if(playerSelection==computerSelection)
        verdict("draw");
    if(playerSelection==1)
    {
        if(computerSelection==2)
        verdict("computer");
        else if(computerSelection==3) 
        verdict("player");
        else if(computerSelection==4)
        verdict("player");
        else if(computerSelection==5)
        verdict("computer"); 
    }
    if(playerSelection==2)
    {
        if(computerSelection==3)
        verdict("computer");
        else if(computerSelection==1) 
        verdict("player");
        else if(computerSelection==5) 
        verdict("player");
        else if(computerSelection==4) 
        verdict("computer");
    }
    if(playerSelection==3)
    {
        if(computerSelection==1)
        verdict("computer");
        else if(computerSelection==2) 
        verdict("player");
        else if(computerSelection==4) 
        verdict("player");
        else if(computerSelection==5) 
        verdict("computer");
    }
    if(playerSelection==4)
    {
        if(computerSelection==1)
        verdict("computer");
        else if(computerSelection==2) 
        verdict("player");
        else if(computerSelection==3) 
        verdict("computer");
        else if(computerSelection==5) 
        verdict("player");
    }
    if(playerSelection==5)
    {
        if(computerSelection==1)
        verdict("player");
        else if(computerSelection==2) 
        verdict("computer");
        else if(computerSelection==3) 
        verdict("player");
        else if(computerSelection==4) 
        verdict("computer");
    }
}





document.getElementById("r-button").onclick = function(){playASet(1);}
document.getElementById("p-button").onclick = function(){playASet(2);}
document.getElementById("s-button").onclick = function(){playASet(3);}
document.getElementById("l-button").onclick = function(){playASet(4);}
document.getElementById("sp-button").onclick = function(){playASet(5);}
document.getElementById("modal-btn").onclick = function(){showModal();}
document.getElementById("understood").onclick = function(){closeModal();}





console.log("Computer selected: "+selectionToRPS(computerSelection));
console.log("You selected: "+selectionToRPS(playerSelection));



