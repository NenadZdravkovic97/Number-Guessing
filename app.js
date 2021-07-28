let numInput = document.getElementById('number');
let checkBtn = document.getElementById('check');
let againBtn = document.getElementById('again');
let msgEl = document.querySelector('.message');
let scoreEl = document.querySelector('.score');
let highScoreEl = document.querySelector('.highscore');
let score = 20;

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let message = message => {
    msgEl.textContent = message;
};

checkBtn.addEventListener('click', () => {
    let guess = Number(numInput.value);
    //  No input
    if (!guess) {
        message('No number');
    } else if (guess === secretNumber) {
        document.body.style.backgroundColor = 'green';
        message(`Congraz, the number was ${secretNumber}`);
        if (score > Number(highScoreEl.textContent)) {
            highScoreEl.textContent = score;
        }
    } else if (guess !== secretNumber) {
        if (guess > 1) {
            message(guess > secretNumber ? `📈 Too high!` : '📉 Too low!');
            score--;
            scoreEl.textContent = score;
        } else {
            displayMessage(`💥 You lost the game!`);
            scoreEl.textContent = 0;
        }
    }
});

againBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = '#222';
    score = 20;
    scoreEl.textContent = score;
    message('Guess the number between 1 and 20');
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    numInput.value = '';
});
