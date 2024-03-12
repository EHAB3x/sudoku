import generateSolvedPuzzle from "./generateSolvedPuzzle"
import copyBoard from "./copyBoard"
import removeNumbers from "./removeNumbers"

export default function generateAndSolveSudoku(difficulty) {
    let solvedPuzzle = generateSolvedPuzzle();
    let puzzle = copyBoard(solvedPuzzle);
    removeNumbers(puzzle, difficulty);
    return puzzle;
}