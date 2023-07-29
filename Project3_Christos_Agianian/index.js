let  randomNum=Math.trunc(Math.random()*101);
console.log(randomNum);

const msg=document.querySelector('.par1');
const userInput=document.querySelector('input');
const scoreinfo=document.querySelector('#score');
const hist=document.querySelector('#histrec');
const hscore=document.querySelector('#highscore');
const img=document.querySelector('#pic1');
const gamemsg1=document.querySelector('#gamemsg1');
const gamemsg2=document.querySelector('#gamemsg2');
const gamemsg3=document.querySelector('#gamemsg3');
const scoresreset=document.querySelector('.score-reset');
const inputbox=document.querySelector('.inputbox');
const box2=document.querySelector('.box2');
const resetbtn=document.querySelector('#resetbtn');
const btn2=document.querySelector('#checkbtn');
const btn3=document.querySelector('#playagainbtn');
const btn4=document.querySelector('#tryagainbtn');

let guesshist = []; // Initialize an empty array to store the guesses
let score=10;
let highscore=0;

resetbtn.addEventListener('click', function(){     
    window.location.reload();
});

function reloadWindow(){
    window.location.reload();
}

function updateHS(){
    highscore+=1;
    hscore.textContent=String(highscore);
}

function recordHighScore(num) {
    if (highscore < num) {
      highscore = num;
    }
    return highscore;
  }

  function resetGame() {
    // Reset the randomNum, score, and other game-related variables
    randomNum = Math.trunc(Math.random() * 101);
    console.log(randomNum);
    score = 10;
    guesshist = [];
    // Reset the relevant HTML elements to their initial values
    userInput.value = "";
    msg.textContent = "Guess a Number";
    scoreinfo.textContent = "10";
    hist.textContent = "";
    img.src = "images/guess.jpg";
    btn2.style.display = "block";
    btn3.style.display = "none";
    btn2.style.visibility = "visible";
    btn3.style.visibility = "hidden";
    inputbox.style.visibility = "visible";
    box2.style.visibility = "visible";
    scoresreset.style.visibility = "visible"; 
    resetbtn.style.display = "block";
  }  

btn2.addEventListener('click', function(){
    
    const guessedNumber = Number(userInput.value);

    if (!Number(userInput.value) || Number(userInput.value) < 1 
    || Number(userInput.value) > 100) {
        msg.textContent = 'You can only enter numbers between 1 and 100';
    }

    if(guesshist.includes(guessedNumber)){
         msg.textContent='Repeated guess, try another number';
    }
    else{
        guesshist.push(guessedNumber);
        hist.textContent=guesshist;

        if(guessedNumber>randomNum){
            score--;
            scoreinfo.textContent=String(score);
            msg.textContent='Your number is high';
        }

        if(guessedNumber<randomNum){
            score--;
            scoreinfo.textContent=String(score);
            msg.textContent='Your number is low';
        }

        if(Number(userInput.value)==randomNum){
            highscore=recordHighScore(highscore+1);
            hscore.textContent=String(highscore);
            //updateHS();
            //highscore+=1;      
            //hscore.textContent=String(highscore); 
            msg.textContent=(`Your guess was correct. ${randomNum} is my secret number`);
            img.src="images/gamewon.jpg";
            gamemsg1.textContent=(`Your Score: ${score}`);
            gamemsg2.textContent=(`Best: ${highscore}`);
            btn2.style.display="none";
            btn3.style.display="block";
            inputbox.style.display="block";
            inputbox.style.marginLeft="auto";
            inputbox.style.marginRight="auto";
            scoresreset.style.display="none";
            resetbtn.style.display="none";
            
        }
    
        if(score===0){
            highscore=0;
            msg.style.display='none';
            img.src="images/gameover.jpg";
            userInput.style.display="none";
            btn2.style.display="none";
            btn3.style.display="none";
            gamemsg1.textContent='Unfortunately You Lost the Game';
            gamemsg2.textContent='Don`t give up and Try Again. You can win next time';
            gamemsg3.textContent=(`My number was: ${randomNum}`);
            btn4.style.display="block";
            resetbtn.style.display="none";
        }
    }
});
    

btn3.addEventListener('click', function(){
    // Preserve the highscore before resetting the game
    const prevHighscore = highscore;
    resetGame();
    // Restore the highscore back to the previous value
    highscore = prevHighscore;
    hscore.textContent = String(highscore);
    score = 10;
    scoreinfo.textContent = score.toString();
    msg.textContent = 'Guess a Number';
    guesshist = [];
    hist.textContent = '';
    btn2.style.display = "block";
    btn2.style.marginLeft="auto";
    btn2.style.marginRight="auto";
    /*
    scoresreset.style.display="block";
    userInput.style.display = "block";
    btn2.style.display = "block";
    btn2.style.marginLeft="auto";
    btn2.style.marginRight="auto";
    resetbtn.style.display = "block";
    gamemsg1.textContent = '';
    gamemsg2.textContent = '';
    gamemsg3.textContent = '';
    img.src = "images/guess.jpg";
    */
});


btn4.addEventListener('click', function(){
    reloadWindow();
    score = 10;
    scoreinfo.textContent = score.toString();
    msg.textContent = 'Guess a Number';
    guesshist = [];
    hist.textContent = '';

});






