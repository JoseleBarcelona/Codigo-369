var numero1 = 5;
var numero2 = 5;
var respuesta1 = numero1>6;
var respuesta2 = (numero1>=numero2) || numero1>6;   //para dar un true solo hace falta que se cumpla una condición
var respuesta3 = (numero1>=numero2) && numero1>6;   //para dar un true, se tienen que cumplir ambas condiciones
var respuesta4 = (numero1>=numero2) && ! numero1>6; // con ! negamos el resultado y si la condición da un true, la convierte en false
console.log(respuesta1);  //false
console.log(respuesta2);  //true
console.log(respuesta3);  //false
console.log(respuesta4);  //false