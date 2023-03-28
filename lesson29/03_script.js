"use strict";

const DOLLAR_EXCHANGE_RATE = "38";
const EURO_EXCHANGE_RATE = "40";

let circleRadius = prompt("Який радіус кола?", 2);
alert(Math.PI * (Math.pow(circleRadius, 2)));

const distanceBeetweenCities = prompt("Яка відстань між двома містами?");
let preferredHours = prompt("За скільки годин ви б хотіли подолати цю відстань?");
alert(distanceBeetweenCities / preferredHours);

let convectorMoney = prompt("Введіть долари", 20);
alert("Отримайте у євро " + convectorMoney * EURO_EXCHANGE_RATE);