/*
So, The problem is:
I am suppose to create a program that basically does rock paper
and scissors

Rules:
____GET THE USERS CHOICE FIRST!!____
1. It should be played against the computer.--use getComputerChoice
2. It should compare it with the computer
--like the normal rpc. IT SHOULD BE CASE INSENSITIVE
3. It should be played 5 times. 

Steps:
First Generate a random choice for the computer
Second Compare the user's choice to the computer
Then Declare the winning choice every round depending on their choice
Lastly Declare who won from the 5 rounds game of rock paper scissors

Initial solution:
[1] First Problem to be solved: Played Against the Computer
create a function that is called getComputerChoice, 
>it should be using the random feature where it returns random nummbers
>my initial thought is to use Math.random since its randomized and 
multiply it by 10; It will only produce 1-9.. so 
1-3 is for rock 
4-6 is for paper
7-9 is for scissors

[2] Second Problem to be solved: To compare the computers choice to plauer
create a function that is called playRound
>it should be comparing computerChoice with playerChoice
by using simple if cC === pC and toUpperCase() means its a draw
Rock beats Scissors
Paper beats Rocks
Scissors beats Paper
so.. 
>if player chose rock and computer chose scissors then
display You won! Rock beats scissors etc.

[3] Third Problem to be solved: Played 5 times
craete a function called game
>it should be played 5 times so loop the function to playRound 5 times


*/

function getComputerChoice(){
    const comChoice = Math.random() * 10;
    if (comChoice <= 3){
        return "ROCK";
    }else if (comChoice <= 6){
        return "PAPER";
    }else{
        return "SCISSORS";
    }
}

function playRound(playerChoiceVar,comChoiceVar){
    let winner;
    let upperCasedChoice = playerChoiceVar.toUpperCase();
    if (upperCasedChoice == comChoiceVar){
        winner = "Its a Draw!";
    }else if(upperCasedChoice == "ROCK"){
        if(comChoiceVar == "PAPER"){
            winner = "You lost! Paper beats Rock.";
        }else{
            winner = "You win! Rock beats Scissors!";
        }
    }else if(upperCasedChoice == "PAPER"){
        if(comChoiceVar == "SCISSORS"){
            winner = "You lost! Scissors beats Paper.";
        }else{
            winner = "You win! Paper beats Rock!";
        }
    }else if(upperCasedChoice == "SCISSORS"){
        if(comChoiceVar == "ROCK"){
            winner = "You lost! Rock beats Scissors.";
        }else{
            winner = "You win! Scissors beats Paper!";
        }
    }
    return winner;
}

function game(){
    let comChoice = getComputerChoice();
    let playerChoice = prompt("What is your chosen weapon?");
    playRound(playerChoice,comChoice);
    console.log(playRound);
}

game();


