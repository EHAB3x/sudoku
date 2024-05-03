import isValid from "./isValid"

// export let solvedArray = []
// Function to solve the Sudoku puzzle using DFS
export default function solveSudokuDFS(board) {
    // Start DFS from the top-left corner (0, 0)
    return dfs(board, 0, 0);
}

function dfs(board, row, col) {
    if (row === 9) {
        return board;
    }

    const nextRow = col === 8 ? row + 1 : row;
    const nextCol = col === 8 ? 0 : col + 1;

    if (board[row][col] !== 0) {
        return dfs(board, nextRow, nextCol);
    }

    for (let num = 1; num <= 9; num++) {
        if (isValid(board, row, col, num)) {
            board[row][col] = num;
            if (dfs(board, nextRow, nextCol)) {
                return board;
            }
            board[row][col] = 0;
        }
    }

    return false;
}

