/* 
bucles o siclos 

nos permiten ejecutar un bloque de codigo varias vecez 

*esto facilita tareas repetitivas y ahorra codigo

*/

/* 
for

este bucle tiene 3 partes claves 

1. inisialisazion de un variable 
2. condicion que evalua el valor de la variable
3. la actualizacion del valor de la variable

sintasix

for(inisializasion; condicion; actualizacion) {codigo que se ejecuta}

*/

for (let i = 1 ; i <= 10 ; i++)
{console.log("mensaje " + i)}

for (let i = 10; i >= 0; i--) {console.log(i)}

/* 
while

ejecuta su codigo mientras la condision espesificada sea correcta 

sintasix

se define la variable fuera del siclo

let nombre variable = valor;

while(condicion se verdadera){codigo a ejecutar}

nombreVariable++ actualizacion
*/

let contador = 0;

while(contador < 3){//condicion
  console.log("gato " + contador)
  contador++; // actualizacion
}

let veces = 5;

while (veces > 2) {
  console.log("veces"+ veces);
  veces--;
}

/* 
do...while

es similar a wuile pero garantisa que el bloque de codigo se ejecute almenos una vez

primero se ejecuta el codigo y luego se verifica la condicion

sintasix

//la variable se define fuera del siclo

let nombreVariable = variable //definicion

do {
//codigo que se ejecuta
} while (condicion)
*/

let numero = 6;
do {
  console.log("el numero es: " + numero);
  numero++
} while (numero < 6)

  let menos = 0
  do {
    console.log("mi numero es " + menos);
    numero--;
  } while (numero > 20);