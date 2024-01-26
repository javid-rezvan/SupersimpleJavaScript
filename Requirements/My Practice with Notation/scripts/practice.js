let score ={
  Wins:0,
  Loses:0,
  Ties:0
};
document.querySelector('.js-result').innerHTML=`Wins:${score.Wins} Losses:${score.Loses} Ties:${score.Ties}`

function pickComputerMove(){
  const randomNumber=Math.random();
  let computerMove='';
  if(randomNumber >=0 && randomNumber <1/3){
    computerMove='rock';
  }else if(randomNumber >=1/3 && randomNumber < 2/3){
    computerMove='paper';
  }else{
    computerMove='scissor';
  }
  return computerMove;
}

function playGame(playerMove){
  const computerMove=pickComputerMove();
  let result='';
   if(playerMove==='rock'){
       if(computerMove==='rock'){
         result='Tie.';
       }else if(computerMove==='paper'){
         result='You lose.';
       }else{
        result='You win.';
       }
   }else if(playerMove==='paper'){
       if(computerMove==='rock'){
          result='You win.';
      }else if(computerMove==='paper'){
          result='Tie.';
    }else{
      result='You lose.';
     }
    }
   else{
       if(computerMove==='rock'){
        result='You lose.';
       }else if(computerMove==='paper'){
         result='You win.';
       }else {
         result='Tie.';
       }
      
   }
   updateScore(result);
   alert(`You picked ${playerMove}.computer picked ${computerMove}.${result}`)

}
 function updateScore(result){
  if (result === 'You win.'){
    score.Wins+=1;
  }else if(result === 'You lose.'){
    score.Loses+=1;
  }else {
    score.Ties+=1;
  }
 }