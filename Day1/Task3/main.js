let showHide = document.getElementById('showHide');
let btn = document.getElementById('btn');
const showhidefunction = function() {
    showHide.style.display = showHide.style.display === 'block' ? "none" : "block";
    btn.innerHTML = btn.innerHTML === "Hide" ? "Show": "Hide";
    console.log(123);
 }