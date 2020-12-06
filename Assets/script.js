var penalty = 10;
var answers = document.querySelectorAll('#quizSection button');
var scorelist = [];
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerFour = document.getElementById("answerFour");
var timer = document.querySelector("#timer");
var messageDiv = document.querySelector("#message");
var startTime = 75;

function setTime() {
    var timerInterval = setInterval(function () {
        startTime--;
        document.getElementById("timer").textContent = "Timer: " + startTime;
    

        if (startTime === 0) {
            clearInterval(timerInterval);
            alert("Out of Time");
        }
    }, 1000);
    //return (score)
}

document.getElementById("startButton").addEventListener("click", setTime);


