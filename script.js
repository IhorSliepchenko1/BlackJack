let card = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
let renderVS = document.getElementById('renderVS')
let renderTextContent = ((a) => renderVS.textContent)

const newGame = document.getElementById('newGame')

const funNewGame = (() => newGame === document.location.reload())

function arrayRandElement(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

function endGames() {
    if (cardSumTotal > cardSumTotalUser2) {
        renderVS.innerHTML = 'User1-WIN'
    } else if (cardSumTotal < cardSumTotalUser2) {
        renderVS.innerHTML = 'User2-WIN'
    } else if (cardSumTotal === cardSumTotalUser2) {
        renderVS.innerHTML = 'Draw'
    }
}



