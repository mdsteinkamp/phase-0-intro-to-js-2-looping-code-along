const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(object, event) {
    const newArray = [];
    for (let i = 0; i < object.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        newArray.push(message);
    }
    return newArray;
}

/* console.log(writeCards(names, 'surprise'));
 */
function countDown() {
    let count = 10;
    while (count >= 0) {
    console.log(count--);
    }
}

/* console.log(countDown()); */