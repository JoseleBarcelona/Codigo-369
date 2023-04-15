console.log("Hola mundo");
var variable = true;  //declaramos la variable una vez y la podemos cambiar a lo largo del código
console.log(variable); //console.log() sirve para mostrar en consola
const constante = 5;  //las constantes una vez declaradas, no se puede cambiar el valor
console.log(constante);
variable = false      //aquí cambiamos el valor de la variable  
console.log(variable);

//Operadores aritméticos

var numero1 = 5;
var numero2 = 6;
var respuesta = numero1*numero2;
console.log("La respuesta es: " + respuesta); //Resultado de la operación aritmética

var base = 4;
var exponente = 2;
var resulPotencia = Math.pow(base, exponente); //función para un potencia
console.log("4 elevado al cuadrado es : " + resulPotencia);

var num3 = 5;
var num4 = 10;
var resulPotencia2 = Math.pow(num3, 4)-(num3/(num4+45));
console.log("El resultado de la operación es : " + resulPotencia2);

var resulPotencia3 = num3**2; //otra manera de expresar una potencia el número (**elevado a) 2
console.log(resulPotencia3);

var respmod = 9%3;  //módulo % te da el resto de una división.
console.log("El resto de la división es: " + respmod);

//Operadores relacionales

var resprelacionales = numero1==numero2;
console.log(resprelacionales); //retorna un valor booleano false, ya que no son iguales

var a = 5;       //esto es un int
var b = "5";     //esto es un string
var c = a==b;    //esto te da un true, porque no distingue entre int y String
var d = a===b;   //esto te exige que el tipo sea igual o sean Strings o sean enteros. (Muestra un false)
console.log(c);
console.log(d);
