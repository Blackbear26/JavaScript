/* 
recorrer

podemos acceder a cada rato aun arreglo a travez de su indice ya sea para obtener el dato o hacer algo con el indice

definir un array
*/

/* 
let colores = ["azul","rojo","amarillo","MORADO"]; */
//indice         0       1       2..........4

//imprimir por consola los datos
/* console.log(colores[0]);
onsole.log(colores[4]);
onsole.log(colores[3]); */



//recorrer el array con el bucle for

/* for(let i = 0; i < colores.length; i++) [
  //muestra en consola
  console.log(colores[i])
]  */

/* 
bloque for...of

es una manera simple y moderna de recorrer arrays en JS esto nos permite acceder directamente al valor de cada elemento sin nesecidad de usar indices

sintasix

for (constante elemento of nombreArray) {
//codigo a ejecutar por cada elemento en el array
}
*/

/* for(const color of colores) {
  console.log(`colorcito: ${color}`)
} */

let animales = ["perro", "gato", "jirafa", "elefante"]

for(const miAnimales of animales)
  {console.log(`miAnimal: ${miAnimales}`)
}