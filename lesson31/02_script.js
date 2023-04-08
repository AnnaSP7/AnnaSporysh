"use strict";

              // 1


const numberFiveDigit = prompt("Введіть п'ятирозрядне число");
numberLength:
if (numberFiveDigit.length === 5) {
  for (let i = 0; i < numberFiveDigit.length / 2; i++) {
    if (numberFiveDigit[i] !== numberFiveDigit[numberFiveDigit.length - 1 - i]) {
      alert(`Число ${numberFiveDigit} не є паліндромом`);
      break numberLength;
    };
  };
  alert(`Число ${numberFiveDigit} є паліндромом`);

}
//           //  2

let suma = prompt("Яка сума вашої покупки?");
if (suma >= 200 && suma <= 300) {
    alert("Сума до оплати " + (suma - suma * 0.3) + " зі знижєко у 3% ");
} else if (suma >= 300 && suma <= 500) {
    alert("Сума до оплати " + (suma - suma * 0.5) + " зі знижєко у 5% ");
} else {
    alert("Сума до оплати " + (suma - suma * 0.7) + " зі знижєко у 7% ");
}



//                 //  3
                

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;

for (let i = 1; i <= 10; i++) {
  let number = +prompt(`Введіть число №${i}:`);
  
  if (number > 0) {
    positiveCount++;
  } else if (number < 0) {
    negativeCount++;
  } else {
    zeroCount++;
  }
  
  if (number % 2 === 0) {
    evenCount++;
  } else if (number !== 0) {
    oddCount++;
  }
}

console.log(`Кількість додатніх чисел: ${positiveCount}`);
console.log(`Кількість від'ємних чисел: ${negativeCount}`);
console.log(`Кількість нулів: ${zeroCount}`);
console.log(`Кількість парних чисел: ${evenCount}`);
console.log(`Кількість непарних чисел: ${oddCount}`);



//           //  4

let weak = ["Понеділок", "Вівторок", "Середа", "Четверг", "П'ятниця", "Субота", "Неділя"];       

for (let i = 0; i <= weak.length - 1; i++) {

    let question = confirm(weak[i] + ", Хочеш побачити наступний день?");
    if (question === false) {
        break;
    }
   
}


