const txtn1 = document.getElementById("n1");  //capturamos el elementgo a través de su id
const txtn2 = document.getElementById("n2");
const respuesta = document.getElementById("resp");
const botoncalcular = document.getElementById("calcular");
botoncalcular.addEventListener('click', calcular);
function calcular(){
    const op1 = parseFloat(txtn1.value); //pedimos el valor del tecto y lo convertimos a un float
    const op2 = parseFloat(txtn2.value);
    let resultado = op1+op2;
    respuesta.innerText = resultado; //muestra un texto en pantalla
    respuesta.style="Color:red";
}
color.style="Background-color:aquamarine";
txtn1.style="color:blue";
txtn2.style="color:blue";
