"use strict";

const min = 0;
const max = 100;


alert("Загадайте якесь число від 0 до 100, а я спробую його вгадати!");

while (true) {
    let riddledNumber = Math.floor((max + min) / 2);
    let answer = prompt(`Ваше число >, <, = за це число? ${riddledNumber} `);

    if (answer === ">") {
        riddledNumber + 1;
    } else if (answer === "<") {
        riddledNumber - 1;
    } else if (answer === "=") {
        alert(`Я вгадала! Ваше число це ${riddledNumber} `);
        break;
    } else {
        alert("Введіть правельне значення!");
    }
    
}
