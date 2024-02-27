let inp = document.getElementById("inp")
let p = document.getElementById("p")

const change = function(){
    p.innerHTML = inp.value
    inp.value = ""
}