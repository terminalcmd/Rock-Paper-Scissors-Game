const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const div = document.querySelector('div')
const result = document.createElement('div')
const scores = document.createElement('div')
const winner = document.createElement('div')
let humanScore = 0
let computerScore = 0


function getComputerChoice(){
    let choices ="rock,paper,scissors"
    let newchoice = choices.split(',')
    let random = Math.floor((Math.random()*newchoice.length))
    let randomChoice = newchoice[random]
    return randomChoice
}


function gamerun(choice){
    const humanSelection = choice
    const computerSelection = getComputerChoice()
    playRound(humanSelection,computerSelection)
}

function endWinner(win){
    winner.textContent=`${win} won! . ${win} reached 5 points. `
    div.appendChild(winner)
    div.removeChild(result)
    playRound=false
    
}


function playRound(humanChoice,computerChoice){
    if(humanScore===5){
       endWinner('You')
    }
    else if(computerScore===5){
       endWinner('Computer')
    }
    let messageWin=`You win ${humanChoice} beats ${computerChoice}`
    if(humanChoice===computerChoice){
       result.textContent=`It\'s a tie`
        div.appendChild(result)
        
        
        
    }else if(humanChoice==='rock' && computerChoice==='scissors'){
       result.textContent=`${messageWin}`
        div.appendChild(result)
        humanScore++
        
       
        
    }else if(humanChoice==='paper' && computerChoice==='rock'){
       result.textContent=`${messageWin}`
        div.appendChild(result)
        humanScore++
        
    }else if(humanChoice==='scissors' && computerChoice==='paper'){
       result.textContent=`${messageWin}`
        div.appendChild(result)
        humanScore++
        
    }else{
       result.textContent=`You lose ${computerChoice} beats ${humanChoice}`
        div.appendChild(result)
        computerScore++
    }
    scores.textContent=`Player = ${humanScore}  Computer = ${computerScore}`
    div.appendChild(scores)
    
   
}

rock.addEventListener("click",(e)=>{
    const choiceNew1 = e.target.textContent
    const selRock = choiceNew1.toLowerCase()
    gamerun(selRock)

})
paper.addEventListener('click',(e)=>{
    const choiceNew1 = e.target.textContent
    const selPaper = choiceNew1.toLowerCase()
    gamerun(selPaper)

})
scissors.addEventListener('click',(e)=>{
    const choiceNew1 = e.target.textContent
    const selScissors = choiceNew1.toLowerCase()
    gamerun(selScissors)
    

})



