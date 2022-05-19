const botoncito = document.getElementById("botoncito");
const input = document.getElementById("input");
const otra = document.getElementById("otra")

otra.addEventListener("click", () =>{
    otra.innerHTML += "<input type='text' id='otraa'>";
})