"use strict";

let sum = 0.1 + 0.2;
console.log(sum.toFixed(1));

let str = "1";
let num = 2;
console.log(+str + num);

let theVolumeOfTheFlesh = prompt("Вкажіть обсяг вашої флешки в Гб");
const mgb = 0.82;
alert(Math.floor(theVolumeOfTheFlesh / 0.82) + " файлів розміром в 820 Мб поміститься на вашу флешку!");