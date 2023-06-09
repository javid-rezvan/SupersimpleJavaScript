
let score=JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0,
  tie:0
};

 updateScoreElement();
 console.log(JSON.parse(localStorage.getItem("score")));

function pickComputerMove(){
  let computerMove='' ;
  const randomNumber=Math.random();
  if(randomNumber >=0 && randomNumber <1/3){
     computerMove='rock';
  }else if(randomNumber >=1/3 && randomNumber <2/3){
    computerMove='paper';
  }else{
    computerMove='scissors';
  }
  return computerMove;
}

function playGame(playerMove){
  const computerMove=pickComputerMove();
  let result='';
  if(computerMove === 'rock'){
       if(playerMove === 'rock'){
          result ='Tie.';
         
       }else if(playerMove === 'paper'){
          result ='You win.';
         
       }else{
          result='You loose.';         
      }
  }else if(computerMove === 'paper'){
       if(playerMove === 'rock'){
          result ='You loose.';
       }else if(playerMove === 'paper'){
        result ='Tie.';
       }else{
        result='You win.';
      }
  }else{
      if(playerMove === 'rock'){
          result ='You win.';
       }else if(playerMove === 'paper'){
        result ='You loose.';
       }else{
        result='Tie.';
      }
  }
  if(result === 'You win.'){
     score.wins+=1;
  }else if(result === 'You loose.'){
     score.losses+=1;
  }else{
     score.tie+=1; 
  }
  localStorage.setItem("score",JSON.stringify(score));
  updateScoreElement();
  document.querySelector('.js-move').innerHTML=`you <img class="move-icon" src="Requirements/${playerMove}-emoji.png"> <img class="move-icon" src="Requirements/${computerMove}-emoji.png">  computer`;

  document.querySelector('.js-result').innerHTML=result;
}
function updateScoreElement(){
 document.querySelector('.js-score').innerHTML=
 `Wins: ${score.wins} , Losses: ${score.losses} , Ties: ${score.tie}`;
}

let isAutoPlaying=false;
let intervalId;
function autoPlay(){
  if(!isAutoPlaying){
     intervalId=setInterval(function(){
      const playerMove=pickComputerMove();
      playGame(playerMove);
      },1000);
      isAutoPlaying=true;
      document.querySelector('.js-auto-play').innerHTML="Stop";
  }else{
      clearInterval(intervalId);
      isAutoPlaying=false;
      document.querySelector('.js-auto-play').innerHTML="Auto Play";
  }
 
}