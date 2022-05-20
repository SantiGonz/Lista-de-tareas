const botoncito = document.getElementById("botoncito");
const input = document.getElementById("input");
const otra = document.getElementById("otra");
const cuadrito = document.getElementById("cuadrito");
const materia = document.getElementById("materia");
const despliegue = document.getElementById("despliegue");
const select = document.getElementById("select");

var tareasTot = 0;
var tareasCom = 0;

materia.addEventListener("click", (evento) =>{
    console.log("si funciona");
    if(materia.value==2){
    select.innerHTML += '<input type="text" name="otra" id="otra">';
    console.log(materia.id);
    }
});

botoncito.addEventListener("click", (evento) =>{
    // if(input.value!=null){
        despliegue.style.display = "block";
        console.log(otra.value);
        materia.innerHTML += "<option value='1'>" + otra.value + "</option>";
        tareasTot++;

    //}

})