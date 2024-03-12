import checkAnswer from "./checkAnswer"
import solveSudoku from "./solveSudoku";
export default function printBoard(board) {
    window.onload=()=>{
        for (let i = 0; i < 9; i++){
            let rows = document.getElementById(`row-${i}`);
            let digits = document.getElementById("digits");
            let answers = document.createElement("span");
            answers.classList.add("number");
            answers.setAttribute("data-active",false);
            answers.innerText = i + 1;
            digits.appendChild(answers);
            answers.addEventListener("click",()=>{
                Array.from(digits.children).forEach(el=>{
                    el.setAttribute("data-active", false);
                    el.classList.remove("active");
                })
                answers.setAttribute("data-active",true);
                answers.classList.add("active");
            })


            for (let j = 0; j < 9; j++) {
                let cell = document.createElement("span");
                cell.setAttribute("data-order",i *9 + j)
                cell.classList.add("number");
                cell.innerText = board[i][j] === 0 ? "" : board[i][j];
                if (Math.floor(i / 3) % 2 === 1 && Math.floor(j / 3) % 2 === 1 || Math.floor(i / 3) % 2 === 0 && Math.floor(j / 3) % 2 === 0) {
                    cell.classList.add("light");
                }
                rows.appendChild(cell)


                cell.addEventListener("click",()=>{
                    if(cell.innerText !== ""){
                        console.log("Already Entered");
                    }else{
                        checkAnswer(i, j);
                    }
                })
            }
        }
    }
}