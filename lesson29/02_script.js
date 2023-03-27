"use strict";

const CURRENT_YEAR = "2023"; 

const userName = prompt("Як вас звати?", "");
alert("Привіт," + " " + userName)

const userYear = prompt("Якого ви року народження?", 2000);
alert("Вам " + (CURRENT_YEAR - userYear) + " років?")

let sideOfSquare = prompt("Яка довжина сторони квадрата?", 4);
alert(sideOfSquare * 4);


