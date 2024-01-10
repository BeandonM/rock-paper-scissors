const choices = ["rock","paper","scissors"]
function getComputerChoice()
{
    let decision = choices[Math.floor(Math.random()*choices.length)];
    return decision;
}

function getPlayerPrompt()
{
    let playerPrompt = ""
    while (!choices.includes(playerPrompt)){
        playerPrompt = prompt("Pick between Rock, Paper, Scissors").toLowerCase();
        if(!choices.includes(playerPrompt)){
            alert("Please enter a valid choice");
        }
    }
    return playerPrompt;
}
function playRound(playerSelection, computerSelection)
{
    let result = ""
    console.log(playerSelection);
    console.log(computerSelection);
    if(playerSelection == computerSelection)
    {
        result = "TIE"
        return result
    }
    switch(playerSelection)
    {
        case "rock":
        {
            if(computerSelection == "paper"){
                result = "Computer Won"
            }
            else{
                result = "You Won"
            }
            break;
        }
        case "paper":{
            if(computerSelection == "scissors"){
                result = "Computer Won"
            }
            else{
                result = "You Won"
            }
            break;
        };
        case "scissors":{
            if(computerSelection == "rock"){
                result = "Computer Won"
            }
            else{
                result = "You Won"
            }
            break;
        }
    }
    return result
}

console.log(playRound(getPlayerPrompt(),getComputerChoice()));