document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("header__hamburger").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open")
    }) 
})