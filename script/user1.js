let btnStart = document.getElementById('btnStart');
let cardSlot = document.getElementById('card-slot');
let cardSumTotalId = document.getElementById('cardSumTotal');
let cardRandomSlot = [];
let cardSumTotal;
let totalUs1;
let user1A = document.getElementById('user1A');
let arrString;
let arrNumber;



btnStart.addEventListener('click', () => {
    let randomCard = arrayRandElement(card);
    cardRandomSlot.push(randomCard);

    forEachArr();
    let concatArr = arrNumber.concat(arrString);

    cardSumTotal = concatArr.reduce((a, b) => a + b);
    cardSumTotalId.value = cardSumTotal;

    cardSlot.innerHTML = cardRandomSlot.join(', ');
    if (cardSumTotal > 21) {
        renderVS.innerHTML = 'User1-WIN';
        alert('Перебор!!! Для вас конец игры');
        fullEnd();
        funNewGame();
    }
    console.log('concatArr', concatArr);

});

const forEachArr = () => {
    arrString = [];
    arrNumber = [];

    cardRandomSlot.forEach((el, index) => {
        if (typeof el === 'string') {
            if (['K', 'Q', 'J'].includes(el)) {
                el = 10;
            } else if (el === 'A') {
                el = 11
                // const func = () => {
                //     let conf = confirm('OK = 11');
                //     if (conf === true) {
                //         el = 11
                //         console.log(el)

                //         setTimeout(() => {
                //             el = ''
                //             console.log(el)
                //         }, 1000);

                //     } else {
                //         el = 1
                //         console.log(el)
                //         setTimeout(() => {
                //             el = ''
                //             console.log('el', el)
                //             conf === true
                //             console.log('conf', conf)
                //         }, 1000);


                //     }


                // };

                // func();
            }
            arrString.push(el);
        } else if (typeof el === 'number') {
            arrNumber.push(el);
        }
    });

    console.log('string', arrString);
    console.log('number', arrNumber);
};


function user1End() {
    totalUs1 = cardSumTotal;
    console.log(totalUs1);
}


