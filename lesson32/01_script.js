"use strict";

     //1

function nameFunc() {
    alert("Hi!");
}

nameFunc();

// let nameFunc = function () {
//     alert("Hello!");
// }
// nameFunc();


     // 2

function countArg() {
    return arguments.length;
}
console.log(countArg(4, 5));

    //3

function number(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
    
}
console.log(number(2, 3));

    //4

function factorialCalculation(n) {
    let result = 1;
    while (n) {
        result *= n--;
    }
    return result;
}
console.log(factorialCalculation(6));


    //5

function getNumber(a, b, c) {
    return (a.toString() + b.toString() + c.toString());
}
console.log(getNumber(3,4,6));


    //6

function getWidthAndHeight(width, height) {
    if (!height) {
        return width * 4;
    } else { 
        return width * height;
    }
}
console.log(getWidthAndHeight(3));


