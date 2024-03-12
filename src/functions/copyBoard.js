export default function copyBoard(board) {
    return board.map(row => [...row]);
}