export default function removeNumbers(board, difficulty) {
    // Calculate the number of cells to remove based on difficulty
    let cellsToRemove = difficulty * 5;
    while (cellsToRemove > 0) {
        let row = Math.floor(Math.random() * 9);
        let col = Math.floor(Math.random() * 9);
        if (board[row][col] !== 0) {
            board[row][col] = 0;
            cellsToRemove--;
        }
    }
}