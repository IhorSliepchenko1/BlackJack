let btnStart = document.getElementById('btnStart');
let cardSlot = document.getElementById('card-slot');
let cardSumTotalId = document.getElementById('cardSumTotal')
let cardRandomSlot = [];
let cardSumTotal;
let totalUs1;
let user1A = document.getElementById('user1A')

function a11User1Click() {
    return 11;
}

function a1User1Click() {
    return 1;
}


btnStart.onclick = function () {
    let randomCard = arrayRandElement(card);
    cardRandomSlot.push(randomCard);

    cardSlot.innerHTML = cardRandomSlot.join(', ');
    cardSumTotal = cardRandomSlot.reduce((a, b) => {
        if (['K', 'Q', 'J'].includes(b)) {
            return a + 10;
        } else if (b === 'A') {
            return a + 11;
        } else {
            return a + b;
        }
    }, 0);
    cardSumTotalId.value = cardSumTotal

    if (cardSumTotal > 21) {
        (renderVS.innerHTML = 'User1-WIN') && (alert('Перебор!!! Для вас конец игры') || user2End())
    }
};

function user1End() {
    totalUs1 = cardSumTotal
    console.log(totalUs1)
}




