
/* 
instrucciones condicionales if / else if / else 

1. crea una variable dia y asigna un valor numerico 
2. con la secuencia if, else if y else evaluar el valor de la variable dia con las siguientes condiviones 

- dia == 1 // lunes 
- dia == 2 // martes 
- dia == 3 // miercoles 
- dia == 4 // jueves 
- dia == 5 // viernes 
- dia == 6 // dia no valido

*/

/* let dia = 8;

if (dia === 1) {
  console.log("lunes")
}
else if (dia === 2) {
  console.log("martes")
}
else if (dia === 3) {
  console.log("miercoles")
}
else if (dia === 4) {
  console.log("jueves")
}
else if (dia === 5) {
  console.log("viernes")
}
else {
  console.log("dia no valido")
} */

/* 
awitch

es una estructura de control de flujo condicional, pero se utiliza cuando tenemos multiples casos posibles para evaluar una exprecion.

es mas eficientes y legibles en situaciones donde se quiere comparar una sola variable con varios valores posibles.

sintaxis:

switch(expresion) {
  case valor1:
    //codigo que se ejecuta
    brak;
  case valor2:
    // codigo que se ejecuta
    break;
  case valor3:
    // codigo que se ejecuta
    break;
  default:
    // codigo que se ejecuta por default
}

*/

/* let dia = 9;

switch (dia) {
  case 1:
    console.log("lunes");
    break;
  case 2:
    console.log("martes")
    break;
  case 3:
    console.log("miercoles")
    break;
  case 4:
    console.log("jueves")
    break;
  case 5:
    console.log("viernes")
    break;
  default:+
    console.log("dia no valido")
} */

//ejercicio

let pokemon;
pokemon = prompt("escoje a un pokemon entre pikachu, charmander y squirtle");

switch (pokemon) {
  case "pikachu":
    console.log("tu pokemon es pikachu y tiene poderes de electricidad");
    break;
  case "charmarder":
    console.log("tu pokemon es charmander y tiene poderes de fuego");
    break;
  case "squirtle":
    console.log("tu pokemon es squirtle y tiene poderes de agua");
    break;
    default:
      console.log("revisa las indicaciones nuevamente");
} 



