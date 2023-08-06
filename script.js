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
let playerScore = 0;
let computerScore = 0;


function getComputerChoice(){
    //const comChoice = Math.random() * 10;//since this returns 0 - 9 
    const comChoice = Math.floor(Math.random() * 3) + 1;
    if (comChoice === 1){
        return "slipper";
    }else if (comChoice === 2){
        return "hanger";
    }else{
        return "belt";
    }
}
function showWeapon(plChoice, comChoice, plState, comState){
    
    const computerWeaponState = document.querySelector('#computer-choice');
    computerWeaponState.setAttribute('src',`/pictures/c-${comChoice}-${comState}.png`);


    const playerWeaponState = document.querySelector('#player-choice');
    playerWeaponState.setAttribute('src',`/pictures/p-${plChoice}-${plState}.png`);

}

function compareChoice(button) {
    let comChoice = getComputerChoice();
    console.log("computer:"+comChoice);
    const textArea = document.querySelector('#text');
    textArea.classList.add('.textCont');
    console.log("player:"+button.id);

    let comState;
    let plState; 
    if (button.id == comChoice){
        textArea.textContent =  "Its a Draw!";

        comState = "win";
        plState = "win";
        showWeapon(button.id, comChoice,plState,comState);
    }else if(button.id == "slipper"){
        if(comChoice == "hanger"){
            computerScore += 1;
            textArea.textContent =  "You lost! hanger beats slipper.";

            comState = "win";
            plState = "lost";
        }else{
            playerScore += 1;
            textArea.textContent =  "You win! slipper beats belt!";
            
            comState = "lost";
            plState = "win";
        }
        showWeapon(button.id, comChoice,plState,comState);
    }else if(button.id == "hanger"){
        if(comChoice == "belt"){
            computerScore += 1;
            textArea.textContent =  "You lost! belt beats hanger.";

            comState = "win";
            plState = "lost";
        }else{
            playerScore += 1;
            textArea.textContent =  "You win! hanger beats slipper!";

            comState = "lost";
            plState = "win";
        }
        showWeapon(button.id, comChoice,plState,comState);
    }else if(button.id == "belt"){
        if(comChoice == "slipper"){
            computerScore += 1;
            textArea.textContent =  "You lost! slipper beats belt.";

            comState = "win";
            plState = "lost";
        }else{
            playerScore += 1;
            textArea.textContent =  "You win! belt beats hanger!";

            comState = "lost";
            plState = "win";
        }
        showWeapon(button.id, comChoice,plState,comState);
    }
}


function endRound(textAreaScore){
    if(playerScore == 5 && computerScore == 5){
        document.getElementById("slipper").disabled = true;
        document.getElementById("hanger").disabled = true;
        document.getElementById("belt").disabled = true;
        textAreaScore.textContent = "DRAW!!";
    }else if(playerScore == 5){
        document.getElementById("slipper").disabled = true;
        document.getElementById("hanger").disabled = true;
        document.getElementById("belt").disabled = true;
        textAreaScore.textContent = "You Won!!!!";
    }else if(computerScore == 5){
        document.getElementById("slipper").disabled = true;
        document.getElementById("hanger").disabled = true;
        document.getElementById("belt").disabled = true;
        textAreaScore.textContent = "You Lose..";
    }
}


function playRound(){//round starts every time the user pushes the button
    const buttons = document.querySelectorAll('button');
    const textAreaScore = document.querySelector('.score');
    const computerWeapon = document.querySelector('.computer-weapon');
    const playerWeapon = document.querySelector('.player-weapon'); 
    textAreaScore.classList.add('.score-area');
    buttons.forEach((button) => {//
        button.addEventListener('click', () => {//when clicked
            compareChoice(button);
            textAreaScore.textContent = `Player = ${playerScore}       Computer = ${computerScore}`;
            console.log(playerScore)
            endRound(textAreaScore);
        });
        textAreaScore.setAttribute('style','font-size: 30px; font-weight:600;');
        textAreaScore.textContent = "Player = 0  | Computer = 0";//to be changed by the playerScore above
        
    }); 
}


playRound();



