let btnStartUser2 = document.getElementById('btnStartUser2');
let cardSlotUser2 = document.getElementById('card-slotUser2');
let cardSumTotalIdUser2 = document.getElementById('cardSumTotalUser2')
let cardRandomSlotUser2 = [];
let cardSumTotalUser2;
let totalUs2;
let user2A = document.getElementById('user2A')

btnStartUser2.onclick = function () {
    let randomCardUser2 = arrayRandElement(card);
    cardRandomSlotUser2.push(randomCardUser2);

    cardSlotUser2.innerHTML = cardRandomSlotUser2.join(', ');
    cardSumTotalUser2 = cardRandomSlotUser2.reduce((a, b) => {
        if (['K', 'Q', 'J'].includes(b)) {
            return a + 10;
        }
        else if (b === 'A') {
            return a + 11;
        }
        else {
            return a + b;
        }
    }, 0);

    cardSumTotalIdUser2.value = cardSumTotalUser2
    if (cardSumTotalUser2 > 21) {
        (renderVS.innerHTML = 'User1-WIN') && (alert('Перебор!!! Для вас конец игры') || user2End())
    }
};

let slotWin;
function user2End() {
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