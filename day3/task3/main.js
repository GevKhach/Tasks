let name = document.getElementById("name")
let email = document.getElementById("email")

const check = function() {
   let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
   if (regex.test(email.value) && email.value !== "" &&  name.value !== "") {
    alert ( "true")
   } else {
    alert("false")
   }
}