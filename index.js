// Code your solutions in this file
const cardsFor = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cardsFor, event) {
    let finishedCards = [];
    for (let i = 0; i < cardsFor.length; i++) {
        finishedCards.push(`Thank you, ${cardsFor[i]}, for the wonderful ${event} gift!`);
        console.log(finishedCards);
    }
    return finishedCards;
}

writeCards(cardsFor, "surprise");

function countDown(x) {
    while (x >= 0) {
        console.log(x--);
    }
}

countDown(10);