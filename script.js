//gameboard module
const gameBoard = (() => {

    let boardScore = ['X','0','X','X','X','0','0','0','X']
    

    return {boardScore}
})();

//player factory function
const playerFactory = ((name) => {

    return {name};
});

//gameplay module
const game = (() => {

const turnBox = document.querySelectorAll('.turnBox');

const updateBoard = function () {
    turnBox.forEach((box) => {
        box.textContent = gameBoard.boardScore[box.dataset.index];
    });
}
    
    return {updateBoard}
})();

game.updateBoard();