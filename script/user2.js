let btnStartUser2 = document.getElementById('btnStartUser2');
let cardSlotUser2 = document.getElementById('card-slotUser2');
let cardSumTotalIdUser2 = document.getElementById('cardSumTotalUser2')
let cardRandomSlotUser2 = [];
let cardSumTotalUser2;
let totalUs2;
let user2A = document.getElementById('user2A')
let arrString2;
let arrNumber2;

const forEachArr2 = () => {
    arrString2 = [];
    arrNumber2 = [];

    cardRandomSlotUser2.forEach((el) => {
        if (typeof el === 'string') {
            if (['K', 'Q', 'J'].includes(el)) {
                el = 10;
            } else if (el === 'A') {
                let conf2 = confirm('OK = 11 || Cancel = 1');
                el = conf2 ? 11 : 1;
            }
            arrString2.push(el);
        } else if (typeof el === 'number') {
            arrNumber2.push(el);
        }
    });
    console.log('string', arrString2);
    console.log('number', arrNumber2);
};

btnStartUser2.addEventListener('click', () => {
    let randomCardUs2 = arrayRandElement(card);
    cardRandomSlotUser2.push(randomCardUs2);

    forEachArr2();

    let concatArrUs2 = arrString2.concat(arrNumber2);

    cardSumTotalUser2 = concatArrUs2.reduce((a, b) => a + b);
    cardSumTotalIdUser2.value = cardSumTotalUser2;

    cardSlotUser2.innerHTML = cardRandomSlotUser2.join(', ');
    if (cardSumTotalUser2 > 21) {
        renderVS.innerHTML = 'User1-WIN';
        alert('Перебор!!! Для вас конец игры');
        fullEnd();
        funNewGame();
    }
});




