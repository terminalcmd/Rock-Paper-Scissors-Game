
let humanScore = 0
let computerScore = 0

//It return random choices from 'rock,paper,scissors'

function getComputerChoice(){
    let choices ="rock,paper,scissors"
    let newchoice = choices.split(',')
    let random = Math.floor((Math.random()*newchoice.length))
    let randomChoice = newchoice[random]
    return randomChoice
}


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