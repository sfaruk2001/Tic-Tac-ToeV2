
//Turned factory into IIFE b/c need only 1 board object
let gameBoard = (function GameBoard() {
    let board = ['', '', '', '', '', '', '', '', ''];

    const getBoard = () => {
        return board;
    }

    //input based on the tiles being ordered 1-9. Subtract 1 to account for index
    const inputMark = (mark, position) => {
        if (board[position - 1] === '') {
            board[position - 1] = mark;
        } else {
            return;
        }
    }

    //isFilled method to be used by UI side
    const isFilled = (position) => {
        if (board[position - 1] === '') {
            return false;
        } else {
            return true;
        }
    }

    const printBoard = () => {
        let board2d = [
            [board[0], board[1], board[2]],
            [board[3], board[4], board[5]],
            [board[6], board[7], board[8]],
        ];

        console.log(board2d);
    }

    return { getBoard, inputMark, printBoard, isFilled };
})();


