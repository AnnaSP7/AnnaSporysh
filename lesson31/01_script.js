"use strict";
        //        1

const userAge = prompt("Скільки вам років?", "20");

if (userAge >= 0 && userAge <= 11) {
    alert("Ви  ще дитина");
} else if (userAge >= 12 && userAge <= 17) {
    alert("Ви підліток");
} else if (userAge >= 18 && userAge <= 59) {
    alert("Ви дорослий");
} else if (userAge >= 60 && userAge <= 85) {
    alert("Ви пенсіонер");
} else {
    alert("Ви маєте надзвичайний вік!");
}


        //   2  

let chooseNum = prompt("Вибріть число від 0-9", "");

if (chooseNum == 1) {
    alert("!");
} else if (chooseNum == 2) {
    alert("@");
} else if (chooseNum == 3) {
    alert("#");
} else if (chooseNum == 4) {
    alert("$");
} else if (chooseNum == 5) {
    alert("%");
} else if (chooseNum == 6) {
    alert("^");
} else if (chooseNum == 7) {
    alert("&");
} else if (chooseNum == 8) {
    alert("*");
} else if (chooseNum == 9) {
    alert("(");
} else if (chooseNum == 0) {
    alert(")");
} else {
    alert("Невідоме значення!");
}


        //    3


alert("Вкажіть два числа");
let number1 = prompt("Введіть перше число");
let number2 = prompt("Введіть друге число");
while (number1 != 0 & number2 != 0){
    if(number1 > number2){//если а больше б, то а присваиваем а/б
        number1 = number1%number2;
    }else{
        number2 = number2%number1;//наоборот
    }
}

alert(number1+number2);



        //    4
        
alert("Задайте діапазон чисел для обчислення!");
const startOfRange = prompt("Початок діапазону", "");
const endOfRange = prompt("Кінець діапазону", "");
if (startOfRange < endOfRange) {
    alert((startOfRange + endOfRange) * (endOfRange - startOfRange + 1) / 2);
} else {
    alert("Дані указано не вірно!");
}



//        5
          
const divisorsOfANamber = prompt("Вкажіть якесь число");
let divisors = `i, `;

for (let i = 2; i <= divisorsOfANamber; i++) {
    if (divisorsOfANamber % i == 0) {
        divisors = divisors + `${i}, `;
    }
}
alert(`Дільники числа  ${divisorsOfANamber} -- ${divisors}`);



