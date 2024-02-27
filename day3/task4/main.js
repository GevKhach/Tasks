
let walp1 = document.getElementById("wp1")
let walp2 = document.getElementById("wp2")
let walp3 = document.getElementById("wp3")
let images = [walp1, walp2, walp3]
let index = 0
images.forEach((img, i) => {
    img.style.display = i === 0 ? "block" : "none";
});
const next = function() {
    images[index].style.display = "none"; 
    index = (index + 1) % images.length; 
    images[index].style.display = "block"; 
}

const previous = function(){
    images[index].style.display = "none"; 
    index = (index - 1 + images.length) % images.length;
    images[index].style.display = "block";
}