let btnStartUser2 = document.getElementById('btnStartUser2');
let cardSlotUser2 = document.getElementById('card-slotUser2');
let cardSumTotalIdUser2 = document.getElementById('cardSumTotalUser2')
let cardRandomSlotUser2 = [];
let cardSumTotalUser2;
let totalUs2;


btnStartUser2.onclick = function () {
    let randomCardUser2 = arrayRandElement(card);
    cardRandomSlotUser2.push(randomCardUser2);

    cardSlotUser2.innerHTML = cardRandomSlotUser2.join(', ');
    cardSumTotalUser2 = cardRandomSlotUser2.reduce((a, b) => a + b);
    cardSumTotalIdUser2.value = cardSumTotalUser2

    if (cardSumTotalUser2 > 21) {
        (renderVS.innerHTML = 'User1-WIN') && (alert('Перебор!!! Для вас конец игры'))
    }

};

