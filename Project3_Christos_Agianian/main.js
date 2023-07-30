
let  randomNum=Math.trunc(Math.random()*101);
console.log(randomNum);
const par1=document.querySelector('.par1');
const userInput=document.querySelector('input');
const scoreinfo=document.querySelector('#score');
const hist=document.querySelector('#histrec');
const hscore=document.querySelector('#highscore');
const img=document.querySelector('#pic1');
//const gamemsg1=document.querySelector('#gamemsg1');
//const gamemsg2=document.querySelector('#gamemsg2');
//const gamemsg3=document.querySelector('#gamemsg3');
const p1=document.querySelector('.p1');
const p2=document.querySelector('.p2');
const p3=document.querySelector('.p3');
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


  function applyStyle1() {
    const link = document.createElement("link");
    link.href = "style.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
}

  function applyStyle2() {
    const link = document.createElement("link");
    link.href = "style2.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
}

function gamewon(){

    highscore = recordHighScore(highscore + 1);
    hscore.textContent = String(highscore);
    img.src = "images/gamewon.jpg";
    p1.textContent = `Your guess was correct. ${randomNum} is my secret number.`;
    p2.textContent = `Your Score: ${score}`;
    p3.textContent = `Best: ${highscore}`;
    p1.style.display="block";
    p2.style.display="block";
    p3.style.display="block";
    //par1.style.visibility = "hidden";
    par1.style.display="none";
    inputbox.style.display = "none";
   //scoresreset.style.visibility = "hidden";
   // btn2.style.visibility = "hidden";
    btn2.style.display="none";
    btn3.style.display = "block";
    box2.style.justifyContent = "center";
    applyStyle2();
  // Apply the style2.css when the game is won

}

function gamelost(){
    highscore=0;
    par1.style.display='none';
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

  function resetGame() {
    
    applyStyle1();
    // Reset the randomNum, score, and other game-related variables
    randomNum = Math.trunc(Math.random() * 101);
    console.log(randomNum);
    score = 10;
    guesshist = [];
    // Reset the relevant HTML elements to their initial values
    userInput.value = "";
    //par1.style.visibility="visible";
    par1.style.display="block";
    par1.style.marginTop="30px";
    par1.textContent = "Guess a Number";
    scoreinfo.textContent = "10";
    hist.textContent = "";
    img.src = "images/guess.jpg";
    //btn2.style.visibility = "visible";
    btn2.style.display="block";
    btn2.style.marginLeft="auto";
    btn2.style.marginRight="auto";
    btn2.style.marginTop="30px";
    btn3.style.display = "none";
    inputbox.style.display = "block";
    scoresreset.style.visibility = "visible";
    box2.style.justifyContent = "center";
    p1.style.display="none";
    p2.style.display="none";
    p3.style.display="none";
    
  }  

btn2.addEventListener('click', function(){
    
    const guessedNumber = Number(userInput.value);

    if (!Number(guessedNumber) || Number(guessedNumber) < 1 
    || Number(guessedNumber) > 100) {
        par1.textContent = 'You can only enter numbers between 1 and 100';
    }


    if(guesshist.includes(guessedNumber)){
         par1.textContent='Repeated guess, try another number';
    }
    else{
        guesshist.push(guessedNumber);
        hist.textContent=guesshist;

        if(guessedNumber>randomNum){
            score--;
            scoreinfo.textContent=String(score);
            par1.textContent='Your number is high';
        }

        if(guessedNumber<randomNum){
            score--;
            scoreinfo.textContent=String(score);
            par1.textContent='Your number is low';
        }

        if(Number(userInput.value)==randomNum){
            //applyStyle2();
            gamewon();
        }
    
        if(score===0){

            gamelost();
            /*
            highscore=0;
            par1.style.display='none';
            img.src="images/gameover.jpg";
            userInput.style.display="none";
            btn2.style.display="none";
            btn3.style.display="none";
            gamemsg1.textContent='Unfortunately You Lost the Game';
            gamemsg2.textContent='Don`t give up and Try Again. You can win next time';
            gamemsg3.textContent=(`My number was: ${randomNum}`);
            btn4.style.display="block";
            resetbtn.style.display="none";
            */
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
    //score = 10;
    //scoreinfo.textContent = score.toString();
 
});


btn4.addEventListener('click', function(){
    reloadWindow();
    score = 10;
    scoreinfo.textContent = score.toString();
    par1.textContent = 'Guess a Number';
    guesshist = [];
    hist.textContent = '';

});
