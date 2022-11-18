// variables
var minutes = 0;
var seconds = 0;
var isPaused = true;
var isNotified = false;

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
    isNotified = false;
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
    const titleTimer = document.getElementById("titleTimerDisplay");
    if (seconds < 10) {
        timer.innerHTML = `${minutes}:0${seconds}`;
        titleTimer.innerHTML = `${minutes}:0${seconds}`;
    }
    else {
        timer.innerHTML = `${minutes}:${seconds}`;
        titleTimer.innerHTML = `${minutes}:${seconds}`;
    }
}

function countDown() {
    showTimer(minutes, seconds);
    if (minutes == 0 && seconds == 0) {
        if (!isNotified) {
            notification();
            isNotified = true;
        }
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

function notification() {
    let audio = new Audio("notification.mp3");
    audio.play();
    setTimeout(
        () => alert("Time left!"), 1000);
}

// window.onload = function () {
//     setInterval(countDown, 1000);
// }