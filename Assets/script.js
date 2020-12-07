var startTime = 75;
var penalty = 10;
var answers = document.querySelectorAll('#quizSection button');
var scoreList = [];
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerFour = document.getElementById("answerFour");
var answerFive = document.getElementById("answerFive");
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
            questionEnder();
        }
        else if (i === questions.length) {
            clearInterval(timerInterval);
        }
    }, 1000);
    return (score)
}

function questionEnder() {

    var scoreTag = document.createElement("initials");
    var inputTag = document.createElement("input");
    var submitButton = document.createElement("button");
    score += startTime ;
    score = score.toFixed(0);
    document.getElementById("askingQuestion").textContent = "Quiz Over";
    answerOne.remove();
    answerTwo.remove();
    answerThree.remove();
    answerFour.remove();
    answerFive.remove();
    messageDiv.remove()
    document.body.children[1].appendChild(scoreTag);
    document.getElementsByTagName("initials")[0].setAttribute("id", "score");
    document.getElementById("score").textContent = "Final Score: " + score;
    document.body.children[1].appendChild(inputTag);
    document.getElementsByTagName("input")[0].setAttribute("id", "input-field");
    submitButton.textContent = "Submit";
    document.body.children[1].appendChild(submitButton);
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        var highScoreText = new Object();
        highScoreText.name = inputTag.value.trim();
        highScoreText.newScore = score;
        storeScores(highScoreText);
        window.location.href = "highScores.html";
    });
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

function storeScores(highScoreText) {
    tempArray = JSON.parse(localStorage.getItem("scores"));
    if (tempArray === null) {
        scoreList.push(highScoreText);
        localStorage.setItem("scores", JSON.stringify(scoreList));
    }
    else {
        tempArray.push(highScoreText);
        localStorage.setItem("scores", JSON.stringify(tempArray));
    }
}


document.getElementById("startButton").addEventListener("click", setTime);
document.getElementById("startButton").addEventListener("click", questionSetter);
document.getElementById("startButton").addEventListener("click", function () {
    messageDiv.textContent = "";
});
answerOne.hidden = true;
answerTwo.hidden = true;
answerThree.hidden = true;
answerFour.hidden = true;
answerFive.hidden = true;


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



