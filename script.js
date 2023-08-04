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
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
function getComputerChoice(){
    //const comChoice = Math.random() * 10;//since this returns 0 - 9 
    const comChoice = getRndInteger(1,9);
    if (comChoice <= 3){
        return "ROCK";
    }else if (comChoice <= 6){
        return "PAPER";
    }else{
        return "SCISSORS";
    }
}

function playRound(){
    const buttons = document.querySelectorAll('button');
    const textAreaScore = document.querySelector('.score');
    let playerScore = 0;
    let computerScore = 0;
    buttons.forEach((button) => {//
        
        button.addEventListener('click', () => {//when clicked
            
            let comChoice = getComputerChoice();
            console.log("computer:"+comChoice);
            const textArea = document.querySelector('#text');
            textArea.classList.add('.textCont');
            console.log("player:"+button.id);
            if (button.id == comChoice){
                textArea.textContent =  "Its a Draw!";
            }else if(button.id == "ROCK"){
                if(comChoice == "PAPER"){
                    computerScore += 1;
                    textArea.textContent =  "You lost! Paper beats Rock.";
                }else{
                    playerScore += 1;
                    textArea.textContent =  "You win! Rock beats Scissors!";
                }
            }else if(button.id == "PAPER"){
                if(comChoice == "SCISSORS"){
                    computerScore += 1;
                    textArea.textContent =  "You lost! Scissors beats Paper.";
                }else{
                    playerScore += 1;
                    textArea.textContent =  "You win! Paper beats Rock!";
                }
            }else if(button.id == "SCISSORS"){
                if(comChoice == "ROCK"){
                    computerScore += 1;
                    textArea.textContent =  "You lost! Rock beats Scissors.";
                }else{
                    playerScore += 1;
                    textArea.textContent =  "You win! Scissors beats Paper!";
                }
            }
            textAreaScore.textContent = `Player = ${playerScore} | Computer = ${computerScore}`;
           console.log(playerScore)
            if(playerScore == 5 && computerScore == 5){
                document.getElementById("ROCK").disabled = true;
                document.getElementById("PAPER").disabled = true;
                document.getElementById("SCISSORS").disabled = true;
                textAreaScore.textContent = "DRAW!!";
            }else if(playerScore == 5){
                document.getElementById("ROCK").disabled = true;
                document.getElementById("PAPER").disabled = true;
                document.getElementById("SCISSORS").disabled = true;
                textAreaScore.textContent = "You Won!!!!";
            }else if(computerScore == 5){
                document.getElementById("ROCK").disabled = true;
                document.getElementById("PAPER").disabled = true;
                document.getElementById("SCISSORS").disabled = true;
                textAreaScore.textContent = "You Lose..";
            }
        });
        textAreaScore.textContent = "Player = 0 | Computer = 0";//to be changed by the playerScore above
    });
    
}
playRound();



