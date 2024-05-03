export default function isValid(board, row, col, num){
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === num || board[i][col] === num || board[row - row % 3 + Math.floor(i / 3)][col - col % 3 + i % 3] === num) {
            return false;
        }
    }
    return true;
}
