import generateEmptyBoard from "./generateEmptyBoard";
import solveSudoku from "./solveSudoku";

export default function generateSolvedPuzzle(){
    let board = generateEmptyBoard();
    solveSudoku(board);
    return board;
}