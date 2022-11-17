// variables
var minutes = 0;
var seconds = 0;
var isPaused = true;

var timer = setInterval(function () {
    if (!isPaused) {
        countDown();
    }
    else {
        showTimer();
    }
}, 1000)

function startTimer() {
    isPaused = false;
}

function stoptimer() {
    isPaused = true;
}

function setPomodoro() {
    minutes = 25;
    seconds = 0;
    showTimer();
}

function setBreak() {
    minutes = 5;
    seconds = 0;
    showTimer();
}

function setLongBreak() {
    minutes = 10;
    seconds = 0;
    showTimer();
}

function showTimer() {
    const timer = document.getElementById("timerDisplay");
    if (seconds < 10) {
        timer.innerHTML = `${minutes}:0${seconds}`;
    }
    else {
        timer.innerHTML = `${minutes}:${seconds}`;
    }
}

function countDown() {
    showTimer(minutes, seconds);
    if (minutes == 0 && seconds == 0) {
        clearInterval();
    }
    else {
        if (seconds <= 0) {
            minutes--;
            seconds = 59;
        }
        else {
            seconds--;
        }
    }
}

// window.onload = function () {
//     setInterval(countDown, 1000);
// }