const card =

    ['J', 'Q', 'K', 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10]

function arrayRandElement(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

console.log(arrayRandElement(card))