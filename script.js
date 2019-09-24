//gameboard module
const gameBoard = (() => {

    const boardScore = ['','','','','','','','','']

    const turnBox = document.querySelectorAll('.turnBox');

    const updateBoard = function () {
        turnBox.forEach((box) => {
            box.textContent = boardScore[box.dataset.index];
        });
    };
    
    const boxSensor = function () {
        turnBox.forEach((box) =>{
            box.addEventListener('click', function() {
                if (gameBoard.boardScore[box.dataset.index] == ''){
                    if (game.playerOne.roundCount == game.playerTwo.roundCount) {
                        game.playerOne.roundCount = game.playerOne.roundCount + 1;
                        gameBoard.boardScore[box.dataset.index] = game.playerOne.symbol
                    } else {
                        game.playerTwo.roundCount = game.playerTwo.roundCount + 1;
                        gameBoard.boardScore[box.dataset.index] = game.playerTwo.symbol
                    }
                } else {console.log('Try another spot!')}
            updateBoard()
            game.detectWin();
            });
        });
    };

    const resetBox = document.querySelector('.resetBox')

    const showReset = function () {
        resetBox.classList.add("showReset")
        resetBox.addEventListener("click", function () {
            location.reload()
        });
    }

    return {boardScore, updateBoard, boxSensor, showReset}
})();



//player factory function
const playerFactory = ((name, symbol, roundCount) => {
    return {name, symbol, roundCount};
});


//gameplay module
const game = (() => {
    gameBoard.updateBoard();

    const playerOne = playerFactory('Human','X', 0);
    const playerTwo = playerFactory('PC', '0', 0);

    gameBoard.boxSensor();

    const detectWin = function (){

        if (gameBoard.boardScore[0] == 'X' && gameBoard.boardScore[3] == 'X' && gameBoard.boardScore[6] == 'X' ||
            gameBoard.boardScore[1] == 'X' && gameBoard.boardScore[4] == 'X' && gameBoard.boardScore[7] == 'X' ||
            gameBoard.boardScore[2] == 'X' && gameBoard.boardScore[5] == 'X' && gameBoard.boardScore[8] == 'X' ||
            gameBoard.boardScore[0] == 'X' && gameBoard.boardScore[1] == 'X' && gameBoard.boardScore[2] == 'X' ||
            gameBoard.boardScore[3] == 'X' && gameBoard.boardScore[4] == 'X' && gameBoard.boardScore[5] == 'X' ||
            gameBoard.boardScore[6] == 'X' && gameBoard.boardScore[7] == 'X' && gameBoard.boardScore[8] == 'X' ||
            gameBoard.boardScore[0] == 'X' && gameBoard.boardScore[4] == 'X' && gameBoard.boardScore[8] == 'X' ||
            gameBoard.boardScore[2] == 'X' && gameBoard.boardScore[4] == 'X' && gameBoard.boardScore[6] == 'X'
            ){
            console.log('PlayerOne wins!')
            gameBoard.showReset()

        } 

        else if(gameBoard.boardScore[0] == '0' && gameBoard.boardScore[3] == '0' && gameBoard.boardScore[6] == '0' ||
        gameBoard.boardScore[1] == '0' && gameBoard.boardScore[4] == '0' && gameBoard.boardScore[7] == '0' ||
        gameBoard.boardScore[2] == '0' && gameBoard.boardScore[5] == '0' && gameBoard.boardScore[8] == '0' ||
        gameBoard.boardScore[0] == '0' && gameBoard.boardScore[1] == '0' && gameBoard.boardScore[2] == '0' ||
        gameBoard.boardScore[3] == '0' && gameBoard.boardScore[4] == '0' && gameBoard.boardScore[5] == '0' ||
        gameBoard.boardScore[6] == '0' && gameBoard.boardScore[7] == '0' && gameBoard.boardScore[8] == '0' ||
        gameBoard.boardScore[0] == '0' && gameBoard.boardScore[4] == '0' && gameBoard.boardScore[8] == '0' ||
        gameBoard.boardScore[2] == '0' && gameBoard.boardScore[4] == '0' && gameBoard.boardScore[6] == '0'
        ){
            console.log('PlayerTwo wins!')
            gameBoard.showReset();


        }

        else if(gameBoard.boardScore[0] !== "" &&
                gameBoard.boardScore[1] !== "" &&
                gameBoard.boardScore[2] !== "" &&
                gameBoard.boardScore[3] !== "" &&
                gameBoard.boardScore[4] !== "" &&
                gameBoard.boardScore[5] !== "" &&
                gameBoard.boardScore[6] !== "" &&
                gameBoard.boardScore[7] !== "" &&
                gameBoard.boardScore[8] !== ""
                ){
                    console.log('its a tie!')
                    gameBoard.showReset()
                }
    }

return {playerOne, playerTwo, detectWin}

})();