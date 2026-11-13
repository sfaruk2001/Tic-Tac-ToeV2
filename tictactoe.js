
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

//player_num denotes if 1st or 2nd player
function Player(mark, name, player_num) {

    const getMark = () => {
        return mark;
    }

    const getName = () => {
        return name;
    }

   const setName = (newName) => {
        if (newName === '') {
            if (player_num === 1) {
                newName = 'Player 1';
            } else {
                newName = 'Player 2';
            }
        } else {
            name = newName;
        }
    }

    return {getMark, getName, setName};
}

function gameController() {
    let player1 = Player('X', 'Player 1', 1);
    let player2 = Player('O', 'Player 2', 2);
    let gameOver = false;
    let isTied = false;
    let activePlayer = player1;

    let winCombos = [[0, 1, 2], []];

    return {};

}





