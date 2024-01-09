
//use addEventListener

let score= JSON.parse(localStorage.getItem('score')) ||
{
    wins:0,
    losses:0,
    ties:0
};
updateScoreElement();
function pickComputerMove(){
    let computerMove='';
    const randomNumber=Math.random();
    if(randomNumber >=0 && randomNumber <1/3){
        computerMove='rock';
    }else if(randomNumber >=1/3 && randomNumber < 2/3){
        computerMove='paper';
    }else{
        computerMove='scissors';
    }
    return computerMove;
}

document.querySelector('.js-rock-button').addEventListener('click',()=>{
    playGame('rock');
});
document.querySelector('.js-paper-button').addEventListener('click',()=>{
    playGame('paper');
});
document.querySelector('.js-scissor-button').addEventListener('click',()=>{
    playGame('scissors');
});
function playGame(playerMove){
    const computerMove=pickComputerMove();
    let result='';
    if(playerMove === 'rock'){
        if (computerMove === 'rock'){
            result='Tie.';
        }else if(computerMove === 'paper'){
            result='You lose.'
        }else{
            result='You win.'
        }
    }else if(playerMove === 'paper'){
        if (computerMove === 'rock'){
            result='You win.';
        }else if(computerMove === 'paper'){
            result='Tie.'

        }else{
            result='You lose.'
        }
    }else{
        if (computerMove === 'rock'){
            result='You lose.';

        }else if(computerMove === 'paper'){
            result='You win.'

        }else{
            result='Tie.'
        }
    }
    if(result === 'You win.'){
        score.wins +=1;
    }else if(result === 'You lose.'){
        score.losses +=1;
    }else {
        score.ties +=1;
    }


    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector('.js-result').innerHTML=result;
    document.querySelector('.js-move').innerHTML=
    `You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer
    `;
    updateScoreElement();
}


function updateScoreElement(){
    document.querySelector('.js-score').innerHTML=`Wins:${score.wins} ,Losses:${score.losses} ,Ties:${score.ties}`;
}

/*
function autoPlay(){
    setInterval(function play(){
      const playerMove=pickComputerMove();
      playGame(playerMove);
    },2000);
}
*/
//shortcut:

function autoPlay1(){
    setInterval(function(){
      const playerMove=pickComputerMove();
      playGame(playerMove);
    },1000);
}
/*
setInterval():
- returns a number
- we can use it to stop the interval

And this number is like an ID and we can use this ID to stop the interval.
every time we run the function we are going to get a different id.so in oreder
to save the id from last time we need the put interval id variable outside the function.
*/

let isAutoPlaying=false;
let intervalid;
function autoPlay2(){
    if(!isAutoPlaying){
         intervalid=setInterval(function (){
          const playerMove=pickComputerMove();
          playGame(playerMove);
          isAutoPlaying=true;
        },1000)
    }else{
        clearInterval(intervalid);
        isAutoPlaying=false;
    }

}

//Auto play with  Arrow Function

function autoPlay3(){
    if(!isAutoPlaying){
         intervalid=setInterval(() =>{
          const playerMove=pickComputerMove();
          playGame(playerMove);
          isAutoPlaying=true;
        },1000)
    }else{
        clearInterval(intervalid);
        isAutoPlaying=false;
    }

}


document.body.addEventListener('keydown',(event)=>{
    if(event.key === 'r'){
        playGame('rock');
    }else if(event.key === 'p'){
        playGame('paper');
    }else if(event.key === 's'){
        playGame('scissors');
    }
});