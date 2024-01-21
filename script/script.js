let card = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
let renderVS = document.getElementById('renderVS')
let renderTextContent = (() => renderVS.textContent)

const newGame = document.getElementById('newGame')

const funNewGame = (() => newGame === document.location.reload())

function arrayRandElement(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

function endGames() {
    if (cardSumTotal > 21) {
        renderVS.innerHTML = 'User2-WIN'
    }
    else if (cardSumTotalUser2 > 21) {
        renderVS.innerHTML = 'User1-WIN'
    }
    else if (cardSumTotal > cardSumTotalUser2) {
        renderVS.innerHTML = 'User1-WIN'
    }
    else if (cardSumTotal < cardSumTotalUser2) {
        renderVS.innerHTML = 'User2-WIN'
    }
    else if (cardSumTotal === cardSumTotalUser2) {
        renderVS.innerHTML = 'Draw'
    }
}




let slotWin;
function fullEnd() {
    totalUs2 = cardSumTotalUser2

    const localStor = () => {
        let existingData = localStorage.getItem('winner');
        let slotArr = [];
        if (existingData) {
            slotArr = JSON.parse(existingData);
        }
        slotArr.push(renderTextContent());
        localStorage.setItem('winner', JSON.stringify(slotArr));

        slotWin = slotArr
        console.log(slotWin);

        let win1Filter = slotWin.filter((word) => word === 'User1-WIN').length
        console.log('К-во побед 1го', win1Filter)

        let win2Filter = slotWin.filter((word) => word === 'User2-WIN').length
        console.log('К-во побед 2го', win2Filter)

        localStorage.setItem('win1', JSON.stringify(win1Filter));
        localStorage.setItem('win2', JSON.stringify(win2Filter));

        if (win1Filter >= 10) {
            [alert('USER-1 ПОБЕДИЛ!!!'), (dellLocalStor()), (funNewGame())].map((x) => x)

        } else if (win2Filter >= 10) {
            [alert('USER-2 ПОБЕДИЛ!!!'), (dellLocalStor()), (funNewGame())].map((x) => x)
        } else ('Что-то пошло не так')

        return slotArr;
    };

    const arrFunc = [renderTextContent(), endGames(), localStor(), updateValues()].map((x) => x);
    return arrFunc;
}

function dellLocalStor() {
    localStorage.removeItem('winner');
    localStorage.removeItem('win1');
    localStorage.removeItem('win2');

    return funNewGame()
}

let win1 = document.getElementById('win-1');
let win2 = document.getElementById('win-2');

function updateValues() {
    win1.value = localStorage.getItem('win1');
    win2.value = localStorage.getItem('win2');
}
updateValues()