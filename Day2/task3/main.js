let p = document.getElementById("p")
let btn = document.getElementById("btn")

const showHide = function(){
    btn.innerHTML = btn.innerHTML === "Show" ? "Hide": "Show";
    p.innerHTML = p.innerHTML === "hi" ? "" : "hi"
 }
