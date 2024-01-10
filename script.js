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
/*
    let result = ""
    if(playerSelection == computerSelection)
    {
        //Draw
        result = "Ti"
    }
*/
}

alert(getPlayerPrompt());