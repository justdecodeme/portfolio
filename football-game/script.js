let score = 0;
let timeLeft = 60;
const ballEl = document.getElementById('ball');
const headerEl = document.getElementById('header')
const timerEl = document.getElementById('timer');
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const headerElHeight = headerEl.offsetHeight;

function moveBallRandomly() {
    // Make random width & height for the ball
    // const randomSize = Math.floor(Math.random() * 100);
    const randomSize = Math.floor(Math.random() * (160 - 10 + 1)) + 10
    // Calculate random positions, keeping the ball inside the window

    // Set the new size
    ballEl.style.width = randomSize + 'px';
    ballEl.style.height = randomSize + 'px';


    const maxX = windowWidth - ballEl.offsetWidth;
    console.log(maxX)
    const maxY = windowHeight - ballEl.offsetHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    // const randomY = Math.floor(Math.random() * maxY);
    const randomY = Math.floor(Math.random() * (maxY - headerElHeight + 1)) + 57


    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // Set the new color
    ballEl.style.backgroundColor = randomColor;

    // Set the new position
    ballEl.style.left = randomX + 'px';
    ballEl.style.top = randomY + 'px';
}

function incrementScore() {
    score++;
    document.getElementById('score').textContent = score;
}

ballEl.addEventListener('click', incrementScore);

// Move the ball every second
const ballInterval = setInterval(moveBallRandomly, 1000);

// Timer logic
const timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft; // Update the timer display

    if (timeLeft <= 0) {
        clearInterval(ballInterval); // Stop moving the ball
        clearInterval(timerInterval); // Stop the timer
        alert('Time\'s up! Your score is: ' + score); // Display the final score
    }
}, 1000);