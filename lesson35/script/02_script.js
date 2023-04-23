"use strict";

document.getElementById("button-open").addEventListener("click", function () {
    document.getElementById("my-modal").classList.add("open")
});

document.getElementById("button-close").addEventListener("click", function () {
    document.getElementById("my-modal").classList.remove("open")
});

