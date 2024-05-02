import isValid from "./isValid"

// export let solvedArray = []
// Function to solve the Sudoku puzzle using DFS
export default function solveSudokuDFS(board) {
    // Start DFS from the top-left corner (0, 0)
    return dfs(board, 0, 0);
}

function dfs(board, row, col) {
    // If all cells are filled, the puzzle is solved
    if (row === 9) {
        return board;
    }

    // Calculate the next cell coordinates
    const nextRow = col === 8 ? row + 1 : row;
    const nextCol = col === 8 ? 0 : col + 1;

    // If the current cell is not empty, move to the next cell
    if (board[row][col] !== 0) {
        return dfs(board, nextRow, nextCol);
    }

    // Try placing numbers from 1 to 9
    for (let num = 1; num <= 9; num++) {
        // Check if the number can be placed in the current cell
        if (isValid(board, row, col, num)) {
            // Place the number in the current cell
            board[row][col] = num;
            // Recursively try to solve the puzzle with the current number placed
            if (dfs(board, nextRow, nextCol)) {
                return board; // If the puzzle is solved, return true
            }
            // If the current number doesn't lead to a solution, backtrack and try the next number
            board[row][col] = 0;
        }
    }

    return false; // If no number can be placed in the current cell, backtrack
}

