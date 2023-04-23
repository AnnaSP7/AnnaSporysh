"use strict";
const red = document.querySelector(".traffic-lights__circle--red");
const yellow = document.querySelector(".traffic-lights__circle--yellow");
const green = document.querySelector(".traffic-lights__circle--green");
const button = document.getElementById("button");

let prev = null;
button.addEventListener("click", () => {
    const current = document.querySelector(".active");
    current.classList.remove("active");
    if (current === red || current === green) {
        yellow.classList.add("active");
        prev = current;
    } else {
        prev === red ? green.classList.add("active") : red.classList.add("active");
    }
})





