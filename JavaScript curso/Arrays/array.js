const repuesta = document.getElementById("resp");
const btnejecutar = document.getElementById("ejecuta");
const repuesta2 = document.getElementById("resp2");
const btnobjeto = document.getElementById("objeto")
let frutas = ["Manzana", " Pera", " Mango", " Sandía"];

btnobjeto.addEventListener('click', iniciar2);
btnejecutar.addEventListener('click', iniciar);
function iniciar(){
    repuesta.innerText = frutas.length;
    repuesta.style=("color:blue");
}
function iniciar2(){
    frutas.forEach(function(item, index, array){
        repuesta2.innerText = array;
        repuesta2.style=("color:blue");
    });
    
}
body.style=("background-color:aquamarine");
ejecuta.style=("color:red");
objeto.style=("color:red");