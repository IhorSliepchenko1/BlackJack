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
        (renderVS.innerHTML = 'User1-WIN') && (alert('Перебор!!! Для вас конец игры') || fullEnd())
    }
};


