//Operadores relacionales

var a = 5;       //esto es un int
var b = "5";     //esto es un string
var c = 3;
var result1 = a==b;    //esto te da un true, porque no distingue entre int y String
var result2 = a===b;   //esto te da un false ya que exige que el tipo sea igual o sean Strings o sean enteros
var result3 = a!=c;    //esto te un true ya que dice si el valor es distinto el uno del otro
var result4 = a!=b;    //esto te da un false ya que no reconoce entre Strings y int
var result5 = a!==b;   //esto da un true ya que distingue entre los tipados
var result6 = a<b;
var result7 = a>b;
var result8 = a<=b;
var result9 = a>=b;
console.log(result1);  //true
console.log(result2);  //false
console.log(result3);  //true
console.log(result4);  //false
console.log(result5);  //true
console.log(result6);  //false
console.log(result7);  //false
console.log(result8);  //true
console.log(result9);  //true

