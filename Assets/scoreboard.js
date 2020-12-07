var highScoreList = document.querySelector("#highScores");
var backButton = document.querySelector("#go-back");
var clearScores = document.querySelector("#clear-highscores");

initScores();

function initScores() {
    storedScores = JSON.parse(localStorage.getItem("scores"));

    if (storedScores !== null) {
        scoreList = storedScores;
    }
    renderScores();
}
function clearScoreboard() {
    window.localStorage.clear();
}
function renderScores() {
    if (storedScores !== null) {
        for (i = 0; i < scoreList.length; i++) {
            var scoreListItem = scoreList[i];
            var  table = document.createElement("table");
            var nameCell = document.createElement("scoreLine");
            var nameCellText = document.createTextNode(scoreListItem.name);
            var scoreCell = document.createElement("scoreLine");
            var scoreCellNum = document.createTextNode(scoreListItem.newScore);

            table.setAttribute("index", i);
            document.getElementById("highScores").appendChild(table);
            table.appendChild(nameCell);
            nameCell.appendChild(nameCellText);
            table.appendChild(scoreCell);
            scoreCell.appendChild(scoreCellNum);

        }
    }
}

clearScores.addEventListener("click", function () {
    clearScoreboard();
    window.location.href = "highScore.html";
})
backButton.addEventListener("click", function () {
    window.location.href = "index.html";
})