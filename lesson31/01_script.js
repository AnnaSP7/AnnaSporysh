"use strict";

const userAge = prompt("Скільки вам років?");

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

let userNum = +prompt("Вибріть число від 0-9");

switch (userNum) {
    case "1":
        alert("!");
        break;
    
    case "2":
        alert("@");
        break;
    
    case "3":
        alert("#");
        break;
    
    case "4":
        alert("$");
        break;
    
    case "5":
        alert("%");
        break;
    
    case "6":
        alert("^");
        break;
    
    case "7":
        alert("&");
        break;
    
    case "8":
        alert("*");
        break;
    
    case "9":
        alert("(");
        break;
    
    case "0":
        alert(")");
            break;
    
    default:
        alert("Невідоме значення!");
}

console.log(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 0);

let number = prompt("Ведіть число");



// if (1) {
//     alert("!");
// } else if (2) {
//     alert("@");
// } else if (3) {
//     alert("#");
// } else if (4) {
//     alert("$");
// } else if (5) {
//     alert("%");
// } else if (6) {
//     alert("^");
// } else if (7) {
//     alert("&");
// } else if (8) {
//     alert("*");
// } else if (9) {
//     alert("(");
// } else if (0) {
//     alert(")");
// } else {
//     alert("Невідоме значення!");
// }

