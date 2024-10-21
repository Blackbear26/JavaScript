/* 
ejemplo con if / else

1. declaramos una variable edad y le asignamos un valor numerico

2. comprobamos si edad es mayor o menor que 18, mostramos el mensaje: "¡eres mayor de edad 😄!"

3. si edad no es mayor que 18, mostramos el mesnaje: "¡eres un bebe 🍼!"

*/

/* 
sintaxis

let edad = 22;

if (edad >= 18) {
console.log("¡eres mayor de edad 😄!");
}

else {
console.log ("¡!eres un bebe🍼");
}
*/

/* 
el operador ternario es una forma mas consisa de escriir una condicion if / else 

trabaja con tres operadores:

1. una condicion
2. la expresion si la condicon en verdadera
3. la expresion sila condision es falsa

sintaxis:

condicion ? expresionsiVerdaera : expresionSiFalsa

*/

let edad = 15;

let resultado = edad >= 18 ? "¡eres mayor de edad 😄!" : "¡eres un bebe 🍼!";

console.log(resultado);