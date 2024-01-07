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
        } else if (b === 'A') {
            // let value2;

            // do {
            //     let userInput2 = prompt('Туз = 11, введите "11" / Туз = 1, введите "1"');
            //     if (userInput2 === "11" || userInput2 === "1") {
            //         value2 = parseInt(userInput2, 10);
            //     } else {
            //         alert('Пожалуйста, введите только "11" или "1".');
            //     }
            // } while (value2 === undefined);

            // return a + value2;

            return a + 11;

        } else {
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
    console.log(totalUs2)

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

        let win1Filter = slotWin.filter((word) => word === 'User1-WIN')
        console.log(win1Filter)

        let win2Filter = slotWin.filter((word) => word === 'User2-WIN')
        console.log(win2Filter)

        let win1 = document.getElementById('win-1')
        let win2 = document.getElementById('win-2')

        win1.value = win1Filter.length
        win2.value = win2Filter.length

        if (parseInt(win1.value) >= 10) {
            [alert('USER-1 ПОБЕДИЛ!!!'), (dellLocalStor()), (funNewGame())].map((x) => x)

        } else if (parseInt(win2.value) >= 10) {
            [alert('USER-2 ПОБЕДИЛ!!!'), (dellLocalStor()), (funNewGame())].map((x) => x)
        } else ('Что-то пошло не так')

        return slotArr;
    };


    const arrFunc = [renderTextContent(), endGames(), localStor()].map((x) => x);
    return arrFunc;
}

function dellLocalStor() {
    localStorage.removeItem('winner');
}



