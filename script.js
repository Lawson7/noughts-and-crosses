//gameboard module
const gameBoard = (() => {

    let boardScore = ['','','','','','','','','']

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
                } else {alert('spot taken')}
                
                gameBoard.updateBoard();
            });
        });
    };


    const detectWin = function (){

    }

    return {boardScore, updateBoard, boxSensor, detectWin}
})();



//player factory function
const playerFactory = ((name, symbol, roundCount) => {
    return {name, symbol, roundCount};
});


//gameplay module
const game = (() => {
    gameBoard.updateBoard();

    const playerOne = playerFactory('Human','X', 0);
    const playerTwo = playerFactory('PC', 'O', 0);

    gameBoard.boxSensor();


    gameBoard.detectWin();

return {playerOne, playerTwo}

})();