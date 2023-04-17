//Funciones con var (tipado que está quedando en desuso)
var resultado = "Capuchino";
function cafetera(ingrediente){
    if(ingrediente == "leche"){
        var resultado = "Leche frita";   //var se declara tanto global como local
        var resultado = "Azucar moreno"; //var puede rescribirse dentro de un bloque{},tantas veces como se quiera
        var resultado = "Vaya jaleo";    //El problema de sobrescribir tantas veces, puede a lo largo del código, dar error y no encontrar el motivo
        return resultado;
    }
}
var taza = cafetera("leche"); //Le pasamos el argumento a la función y la guardamos en la variable taza
console.log(taza);

//Funciones con let (tipado que está sustituyendo paulatinamente a var)

let resultado2 = "Capuchino";  //let se puede declarar tanto como variable global como local
function cafetera(ingrediente){
    if(ingrediente == "leche"){
        let resultado2 = "Leche frita";   //let se puede sobrescribir dentro de un bloque{}una sola vez
        //let resultado2 = "Azucar moreno"; //Si volvemos a declarar let por segunda vez, da error
       // let resultado2 = "Vaya jaleo";    //let actualmente está sustituyendo a var por motivos de depuración del código
        return resultado2;
    }
}
var taza2 = cafetera("leche"); //Le pasamos el argumento a la función y la guardamos en la variable taza
console.log(taza2);
