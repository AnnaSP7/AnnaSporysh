"use strict";
const table = document.querySelector(".table");
const nameList = document.querySelector(".name");
const ageList = document.querySelector(".age");

function sortName() {
    let sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => {
        return rowA.cells[1].innerHTML - rowB.cells[1].innerHTML
        })
    table.tBodies[0].append(...sortedRows)
}

nameList.addEventListener("click", sortName);     