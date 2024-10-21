/* 
practica arreglos

1. desidir un arreglo llamado heroes que contenga 5 nombres de superheroes y muestralo en la consola

*/

let heroes = ["iro-man", "pantera-negra" , "capitan america", "ms marvel", "spiderman"];

heroes.splice(5,0,"hulk");

heroes.shift();

heroes[2] = "doctor strange";

heroes.sort();

let enemigos = heroes.slice(2,5)

console.log(enemigos)

console.log(heroes)