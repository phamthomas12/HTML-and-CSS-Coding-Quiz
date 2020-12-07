var startTime = 75;
var penalty = 10;
var answers = document.querySelectorAll('#quizSection button');
var scorelist = [];
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerFour = document.getElementById("answerFour");
var answerFour = document.getElementById("answerFive");
var timer = document.querySelector("#timer");
var messageDiv = document.querySelector("#welcome");
var i = 0;
var score = 0;
var storedScores;

function setTime() {
    var timerInterval = setInterval(function () {
        startTime--;
        document.getElementById("timer").textContent = "Timer: " + startTime;
    

        if (startTime === 0) {
            clearInterval(timerInterval);
            alert("Out of Time");
        }
        else if (i === questions.length) {
            clearInterval(timerInterval);
        }
    }, 1000);
    //return (score)
}

function questionSetter() {

    answerOne.hidden = false;
    answerTwo.hidden = false;
    answerThree.hidden = false;
    answerFour.hidden = false;
    answerFive.hidden = false;


    if (i === questions.length) {
        questionEnder();
    }
    else {
        document.getElementById("askingQuestion").textContent = questions[i]["title"];
        document.getElementById("answerOne").textContent = questions[i]["choices"][0];
        document.getElementById("answerTwo").textContent = questions[i]["choices"][1];
        document.getElementById("answerThree").textContent = questions[i]["choices"][2];
        document.getElementById("answerFour").textContent = questions[i]["choices"][3];
        document.getElementById("answerFive").textContent = questions[i]["choices"][4];
    }
}

document.getElementById("startButton").addEventListener("click", setTime);
document.getElementById("startButton").addEventListener("click", questionSetter);
document.getElementById("startButton").addEventListener("click", function () {
    messageDiv.textContent = "";
});
answerOne.hidden = true;
answerOne.hidden = true;
answerTwo.hidden = true;
answerThree.hidden = true;
answerFour.hidden = true;


document.getElementById("answerOne").addEventListener("click", function () {
    if (questions[i]["choices"][0] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score++;
    }
    else {
        messageDiv.textContent = "Wrong!";
        secondsLeft -= 10;
    }
    i++;
    questionSetter();
})
document.getElementById("answerTwo").addEventListener("click", function () {
    if (questions[i]["choices"][1] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score++;
    }
    else {
        messageDiv.textContent = "Wrong!";
        startTime -= 10; 
    }
    i++;
    questionSetter();
})
document.getElementById("answerThree").addEventListener("click", function () {
    if (questions[i]["choices"][2] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score++;
    }
    else {
        messageDiv.textContent = "Wrong!";
        startTime -= 10; 
    }
    i++;
    questionSetter();
})
document.getElementById("answerFour").addEventListener("click", function () {
    if (questions[i]["choices"][3] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score++;
    }
    else {
        messageDiv.textContent = "Wrong!";
        startTime -= 10; 
    }
    i++;
    questionSetter();
})
document.getElementById("answerFive").addEventListener("click", function () {
    if (questions[i]["choices"][4] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score++;
    }
    else {
        messageDiv.textContent = "Wrong!";
        startTime -= 10; 
    }
    i++;
    questionSetter();
})



