"use strict";


function checkPerfectNumber(number) {
    let divisorsSum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            divisorsSum += i;
        }
    }
    return divisorsSum === number;
}


function getTwoNum(min, max) {
    for (let i = min; i < max; i++) {
        if (checkPerfectNumber(i)) {
            console.log(i)
        }
    }
}
getTwoNum(0, 100);


