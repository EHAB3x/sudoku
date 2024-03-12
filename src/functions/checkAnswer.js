import solveSudoku from "./solveSudoku";

const checkAnswer = (solvedArray,i, j) => {
    let activeDigit = document.querySelector("#digits .active");
    if (!activeDigit) {
        console.log("No active digit selected.");
        return;
    }
    let answer = activeDigit.innerText;
    if (solvedArray[i][j] === answer) {
        let customValue = i * 9 + j;
        let selector = `[data-order="${customValue}"]`;
        let targetCell = document.querySelector(selector);
        if (targetCell) {
            targetCell.innerText = answer;
        }
    } else {
        let heart = document.querySelector("span img");
        if (heart) {
            heart.parentNode.remove();
        }
    }
}

export default checkAnswer;