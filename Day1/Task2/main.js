let text = document.getElementById('text');
let butnText = document.getElementById('butnText');
const changeText = function () {
    text.innerHTML = text.innerHTML === "TEXT" ? "changeText":"TEXT";
}
const changeButnText = function () {
    butnText.innerHTML = buttonText.innerHTML === "change" ? "changeText":"TEXT";
}
// document.getElementById('toggleButton').addEventListener('click', function() {
// var div = document.getElementById('toggleDiv');
//     if (div.style.display === 'none') {
//         div.style.display = 'block';
//         this.textContent = 'hide'; 
//     } else {
//         div.style.display = 'none'; 
//         this.textContent = 'show';
//     }
// });