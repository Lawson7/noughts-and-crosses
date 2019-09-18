const gameBoard = (() => {

    let turnDisplay = ['X','O','X','O','O','X','X','O','X']

    return {turnDisplay}

})();


const playerFactory = ((name) => {

    return {name};
});

const render = () => {
    const boardContainer = document.getElementById('boardContainer');
    for (i = 0; i < 9; i++){
        const turnBox = document.createElement('div');
        turnBox.classList.add('turnBox');
        boardContainer.appendChild(turnBox);
    }
}

render()