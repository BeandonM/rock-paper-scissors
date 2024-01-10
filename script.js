const choices = ["rock","paper","scissors"]
function getComputerChoice()
{
    let decision = choices[Math.floor(Math.random()*choices.length)];
    return decision;
}