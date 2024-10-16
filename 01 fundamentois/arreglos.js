/* Array

son una estructura de datos que permite almacebar multiples valores em uma sola variable

los elementos dentro del array tienen una posicion indice que permite accedera ellos 

los indices de los datos comienzan en 0

arrays pueden contener datos de cualquier tipo: numero, atrings, cooleanos, incluso arrays 

sintaxis

let nombreArray = [ eñemento 1, elemento2, elemento3 ]

*/

let frutasFavoritas = ["kiwi", "sandia", "sandia,"];
let numerosLoteria = [45, 79, 34, 84, 22];
let siMeQuiereNoMeQuiere = [true, false, false, true];
let misDatos = ["Diego", "Lopez", 22, "true"];
anidadosArray = [
[145, 356, 551]
["gato","perro", "jirafa"],
["false", "true", "true", "false"]]

/* 
array -> ["kiwi", "sandia", "sandia"]
indice ->    0        1         2

array -> [45, 79, 34, 84, 22]
indice ->  0   1   2   3   4

*/

/* 
accedera los elementos de un array

paraaccder aun dato usamos la siguiente sintaxis

nombreArray[indice]

*/

console.log(frutasFavoritas[0])
console.log(anidadosArray[1][3])


/* 

modificar los lementos del array

para cambiar el valor de cualquier elemento dentro del array usamos la sigiente sintaxis

nombreArray[indice] = nuevoDato

*/

console.log( frutasFavoritas )

frutasFavoritas[0] = "pera"

console.log( frutasFavoritas )

/* 
lemgth

metodos utiles paralos arrays

son funciones quetrabajan con los datos de los arrays su sintaxis es la siguiente

nombreDeArray.nombreDelMetodo
nombreDelArray.nombreDelMetodo(parametro)

*/

/* 
length mos dice cuantos elementos tiene un array

*/

frutasFavoritas.length;
console.log(frutasFavoritas[0].length);
console.log(siMeQuiereNoMeQuiere.length);
console.log(misDatos);

/* 
metodo push

agrga un elemento al final del array

nombreDelArray.push(dato)

*/

console.log(frutasFavoritas);

frutasFavoritas.push("maraculla");

console.log(frutasFavoritas);

/* 
aqui eleminamos el ultimo elemento del array

nombreAray.pop()
*/

console.log(numerosLoteria);

let numerosLoteriaQuitado = numerosLoteria.pop();


console.log(numerosLoteria);
console.log(numerosLoteriaQuitado);

