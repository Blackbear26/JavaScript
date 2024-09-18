/* tipo de datos

los tipos de datos se dividen en 2 categorias primitivos y completos

1. tipos de datos primitivos 

son tipos de datos basicos que no se concideran "objetos" y no tienen metodos

number o numero

no es mas que la representacion de datos numericos enteros o con decimales (ounto flotante)

* cadena de caracteres *

se utiliza pararepresentar texto el texto se coloca entre comillas dobles o simples  "texto" o 'texto'

* boolean o boleanos *

estos representan un valor logico 

* underfined o indefinido*

es el valor que se asigna a una variable

2. tipo de datos complejos 

* array o arreglo *

es un conjunto de datos que los almacena en una lista ordenadade elementos los datos dentro de los arreglos se escriben entre corchetes [] y separados por coma ,



*/

//arreglo

let miFrutaFavorita = ["sandia", "uvas", "pera"]
let misNumerosDeLaSuerte = ["10", "25", "30"]
let miColorFavorito = ["azul", "rojo", "amarillo"]

console.log(miColorFavorito)
console.log(miFrutaFavorita)
console.log(misNumerosDeLaSuerte)

// indefinido

let x ; // declara una variable sin inicializarla

x = prompt("cual es tu numero favorito?")

console.log(x);

// Boolean

let miVerdad = true;
let miMentira = false;

console.log(miVerdad);
console.log(miMentira)

// cadena de caracteres

let miNombre = 'Diego';
let miApellido = 'Lopez';

console.log(miNombre);
console.log(miApellido);

// tipo de datos primitivos

let miNumero = 21
let miNumeroDecimal = 1.5

console.log(miNumero);
console.log(miNumeroDecimal);
