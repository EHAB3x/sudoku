export default function removeNumbers(board, difficulty) {

    let cellsToRemove = difficulty * 25;
    while (cellsToRemove > 0) {
        let row = Math.floor(Math.random() * 9);
        let col = Math.floor(Math.random() * 9);
        if (board[row][col] !== 0) {
            board[row][col] = 0;
            cellsToRemove--;
        }
    }
}