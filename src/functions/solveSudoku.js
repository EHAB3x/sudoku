import isValid from "./isValid"

export let solvedArray = []
// Function to solve the Sudoku puzzle using backtracking
export default function solveSudoku(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            // Check if the current cell is empty
            if (board[row][col] === 0) {
                // Try placing numbers from 1 to 9
                for (let num = 1; num <= 9; num++) {
                    // Check if the number can be placed in the current cell
                    if (isValid(board, row, col, num)) {
                        // Place the number in the current cell
                        board[row][col] = num;
                        // Recursively try to solve the puzzle with the current number placed
                        if (solveSudoku(board)) {
                            solvedArray = board.map(row => [...row]);
                            return true; // If the puzzle is solved, return true
                        }
                        // If the current number doesn't lead to a solution, backtrack and try the next number
                        board[row][col] = 0;
                    }
                }
                return false; // If no number can be placed in the current cell, backtrack
            }
        }
    }
    return true; // If all cells are filled, the puzzle is solved
}
