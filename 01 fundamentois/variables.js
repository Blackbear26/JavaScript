/* 
Variables

las variables son contenedores almacenan datos

las variables de declaran usando las palabras reservadas

var -> es la forma tradicional pero no se recomienda
let -> es la frma moderna es la recomendada
const -> el dato almacenado no puede cambiar

para declararuna variable:

var [nombrevariable] = [valor];

*/

var nombre ="Diego";
var edad = 22;
const vivo =true;

console.log(nombre);
console.log(edad);
console.log(vivo)

/* 
las variables declaradas con var y let pueden cambiar a lo largo del codigo simpre y cuando su alncance lo permita

y las variables con const no pueden cambiar. si lo hacemos marcara un error

para cambiarel valor de una varible 

[nombrevariable] = [nuevovalor]
*/

nombre = "dimitri";
edad = 99;

//mostrar los nuevos valores
console.log(nombre)
console.log(edad)
