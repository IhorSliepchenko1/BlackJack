let btnStart = document.getElementById('btnStart');
let cardSlot = document.getElementById('card-slot');
let cardSumTotalId = document.getElementById('cardSumTotal')
let cardRandomSlot = [];
let cardSumTotal;
let totalUs1;

btnStart.onclick = function () {
    let randomCard = arrayRandElement(card);
    cardRandomSlot.push(randomCard);

    cardSlot.innerHTML = cardRandomSlot.join(', ');
    cardSumTotal = cardRandomSlot.reduce((a, b) => a + b);
    cardSumTotalId.value = cardSumTotal

    if (cardSumTotal > 21) {
        (renderVS.innerHTML = 'User2-WIN') && (alert('Перебор!!! Для вас конец игры'))
    }
};

