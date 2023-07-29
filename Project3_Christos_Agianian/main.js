let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);

const msg = document.querySelector('.par1');
const userInput = document.querySelector('input');
const resetbtn = document.querySelector('#resetbtn');
const scoreinfo = document.querySelector('#score');
const hist = document.querySelector('#histrec');
const hscore = document.querySelector('#highscore');

let score = 10;
let highscore = 0;
let guesshist = [];

resetbtn.addEventListener('click', function() {
    window.location.reload();
});

const btn2 = document.querySelector('#checkbtn');
btn2.addEventListener('click', function() {
    const guessedNumber = Number(userInput.value);

    if (guessedNumber < 1 || guessedNumber > 100 || isNaN(guessedNumber)) {
        msg.textContent = 'You can only enter numbers between 1 and 100';
    } else {
        if (guesshist.includes(guessedNumber)) {
            msg.textContent = 'You already checked this number before';
        } else {
            guesshist.push(guessedNumber);
            hist.textContent = guesshist.join(', ');

            if (guessedNumber === randomNum) {
                msg.textContent = 'Your guess was correct';
               
            } else if (guessedNumber > randomNum) {
                msg.textContent = 'Your number is high';
            } else {
                msg.textContent = 'Your number is low';
            }

            score--;
            scoreinfo.textContent = score.toString();

            if (score === 0) {
                msg.textContent = 'Sorry, game is over';
            }
        }
    }
});

const btn3 = document.querySelector('#playagainbtn');
btn3.addEventListener('click', function() {
    score = 10;
    scoreinfo.textContent = score.toString();
    msg.textContent = 'Guess a Number';
    guesshist = [];
    hist.textContent = '';
    randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(randomNum);

    // Reset styles and background color
    document.body.style.backgroundColor = '';
    document.querySelector('.div1').style.backgroundColor = '';
    document.querySelector('.img1').style.display = 'none';
});

const btn4 = document.querySelector('#tryagainbtn');
btn4.addEventListener('click', function() {
    score = 10;
    scoreinfo.textContent = score.toString();
    msg.textContent = 'Guess a Number';
    guesshist = [];
    hist.textContent = '';
});