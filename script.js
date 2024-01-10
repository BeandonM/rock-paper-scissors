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
    let result = 0
    console.log("Player picked: " + playerSelection);
    console.log("Computer picked: " + computerSelection);
    if(playerSelection == computerSelection)
    {
        return result
    }
    switch(playerSelection)
    {
        case "rock":
        {
            if(computerSelection == "paper"){
                result = -1
            }
            else{
                result = 1
            }
            break;
        }
        case "paper":{
            if(computerSelection == "scissors"){
                result = -1
            }
            else{
                result = 1
            }
            break;
        };
        case "scissors":{
            if(computerSelection == "rock"){
                result = -1
            }
            else{
                result = 1
            }
            break;
        }
    }
    return result
}


function game()
{
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++)
    {
        result = playRound(getPlayerPrompt(),getComputerChoice());
        switch(result){
            case -1:
            {
                computerScore++;
                console.log("Computer Won This Round");
                break;
            }
            case 0:
            {
                i--;
                console.log("Tie Breaker Replaying the Round")
                break;
            }
            case 1:
            {
                playerScore++;
                console.log("Player Won This Round");
                break;
            }
        }
    }

    if(playerScore > computerScore)
    {
        console.log("Player Won the best of 5")
    }
    else
    {
        console.log("Computer Won the best of 5");
    }
}
game();