"use strict";

let userMoney = prompt("Введіть суму грошей яку маєте в гаманці");
let thePriceOfChocolate = prompt("Введіть ціну однієї шоколадки");
alert("Ви можете купити " + Math.floor(userMoney / thePriceOfChocolate) + " шоколадок");
alert(userMoney - (thePriceOfChocolate * Math.floor(userMoney / thePriceOfChocolate)) + " Ваша решта!");


// let userNum = prompt("Введіть будь-яке трьохзначне число");
// const char1 = userNum % 10;
// const char2 = ((userNum % 100) - char1) / 10;
// const char3 = (userNum - (userNum % 100)) / 100;

// console.log(char1);
// console.log(char2);
// console.log(char3);
// console.log(`${char1}${char2}${char3}`);

// console.log(userNum.split('').reverse().join(''));