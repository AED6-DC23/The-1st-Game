let numberOfCards;
const emoji = ['🍐', '🍑', '🍒', '🍓', '🍔', '🍕', '🍖', '🍘', '🍗', '🍙', '🍚', '🍛', '🍜', '🍝', '🍞', '🍟']
function startGame() {
    const width = parseInt(document.getElementById("width").value);
    const height = parseInt(document.getElementById("height").value);

    if (isOutRange(width, 4, 11)) {
        alert("Ширина должна быть от 4 до 11");
        return;
    }

    if (isOutRange(height, 3, 6)) {
        alert("Высота должна быть от 3 до 6");
        return;
    }

    setupBoard(width, height);
}

function setupBoard(width, height) {
    const board = document.getElementById('board');
    board.innerHTML = '';
    board.style.gridTemplateColumns = `repeat(${height}, 100px)`;
    board.style.gridTemplateColumns = `repeat(${width}, 100px)`;

    numberOfCards = width * height;
    for (let i = 0; i < numberOfCards; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        board.appendChild(card);
    }
}



function isOutRange(val, minVal, maxVal) {
    return val < minVal || val > maxVal;
}

document.getElementById('start-button').addEventListener('click', startGame);