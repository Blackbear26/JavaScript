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

/* 
unshift

agrega un elemento al inicio del array

nimbreArray.unshif(elemento)
*/

console.log(frutasFavoritas);
frutasFavoritas.unshift("mandarina");
console.log(frutasFavoritas);

/* 
shif

elimina el primer elemento del array y lo devuelve

nombreArray.shift();

*/

console.log(numerosLoteria);
numerosLoteria.shift();
console.log(numerosLoteria);

/* 
indexO encuentra el indice de un elemento del array

nombreArray.indexO();

*/

let indice = frutasFavoritas.indexOf("maraculla")
console.log(indice)

/* 
splice

elimina

puede eliminar o agregar elementos al array desde una posicion espesifica

nombreArray.splie(indiceDeInicio, indiceFinal)

agregar

nombreArray.splice(indiceInicia, pasos, valor1, valor2, valor3...)

*/

console.log(frutasFavoritas);

frutasFavoritas.splice(1,2)

console.log(frutasFavoritas)

frutasFavoritas.splice(1,0,"fresa","banana")

console.log(frutasFavoritas)


/* 
SLICE

creauna copia de una posicion de array, no modifica el original, se crea un nuevo array

nombreArray.slice(indiceInicio, indiceFinal)

*/

let futascopia = frutasFavoritas.slice(2,5);

console.log(futascopia);

/* 
sort

ordena los elementos del arrayde mejor manera 

nombreArray.sort() - de primera no pasar datos entre los parentecis 

*/

console.log(frutasFavoritas);

frutasFavoritas.sort();

console.log(frutasFavoritas);

console.log(numerosLoteria);

numerosLoteria.sort();

console.log(numerosLoteria);
