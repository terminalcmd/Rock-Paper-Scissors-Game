//Keeping the score from user and computer 
let humanScore = 0
let computerScore = 0

//Computer logic 
//It return random choices from 'rock,paper,scissors'


//Creating a function for computer choice
function getComputerChoice(){
    let choices ="rock,paper,scissors"
//Changing choices into array 
    let newchoice = choices.split(',')
//Generate a random choice
    let random = Math.floor((Math.random()*newchoice.length))
    let randomChoice = newchoice[random]
    return randomChoice
}


//Creating logic for human choice
//It return user input from the given choices 

function getHumanChoice(){
    let user = prompt("Enter your choice 'rock,paper,scissors' :").toLowerCase()
    if(user==='rock'||user==='paper'||user==='scissors'){
        return user
    }else{
        alert('Enter a valid choice')
    }
    
}

//Logic to play one round 
//To take user and computer choices
//Check who the winner get increase the score counter
//And prints the winner


///Pseudo code

///taking user and computer value 
///if user is rock and comp is scissors user wins score+1
///if comp is rock and user is scissors comp wins score+1

function playRound(humanChoice,computerChoice){
    let messageWin=`You win ${humanChoice} beats ${computerChoice}`
    if(humanChoice===computerChoice){
        console.log('It\'s a tie')
    }else if(humanChoice==='rock' && computerChoice==='scissors'){
        console.log(messageWin)
        humanScore++
        
    }else if(humanChoice==='paper' && computerChoice==='rock'){
        console.log(messageWin)
        humanScore++
        
    }else if(humanChoice==='scissors' && computerChoice==='paper'){
        console.log(messageWin)
        humanScore++
        
    }else{
        console.log(`You lose ${computerChoice} beats ${humanChoice}`)
        computerScore++
    }
}



//Play the game for 5 time and print the result at the end

function playGame(){
 i=0
 while(i<5){
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()
    playRound(humanSelection,computerSelection)
 i++

 }
 if(humanScore > computerScore){
    console.log(`Finally! You win by ${humanScore} points`)
 }else{
     console.log(`Finally! You lose by ${computerScore} points`)
 }

}
playGame()