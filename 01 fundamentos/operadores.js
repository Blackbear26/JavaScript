/* 
operadores

son simbolos actuales para realizar operaciones sobre valores y variables

1. aritmeticos
2. asignacion
3. comparacion

*/

/* 
operaciones aritmeticas

se utilizan para hacer matematicas

*/

// suma (+) son dos valores

let suma = 15 + 6; //22

console.log(suma)

//resta (-) resta el segundo

let resta = 25 - 5;

console.log(resta)

//multiplicacion (*) multiplica los valores

let multiplicacion = 10 * 10;

console.log(multiplicacion)

//divicion (/) divide los valores

let divicion = 25 / 3;

console.log(divicion)

//modulo (%) divide el resto de la divicion de 2 valores

let mod = 7 % 2;
let modulo = 9 % 3;

console.log(mod);

// esxponensacion (**) eleva un numero a la potencia de otro 

let expo = 3 ** 2; // 9
let expo2 = 5 ** 12; //

console.log(expo)
console.log(expo2)

//incremento (++) esto incrementa el valor de una unidad em 1

let x = 2;
x++;
console.log(x);

//decremento (--) decrementa el valor de 1

let y = 6;
y--;
console.log(y)


// *operadores de asignacion*

/* estos operadores asignan acciones a las variables */

//asignacion (*); asigna un valor a una variable

let w = 45;

//asignacion con suma (+=) suma el valor a una variable y la reaccina

w += 5; //50
console.log(w)

//asignacion con resta (-=) resta el valor a una variable y la reasigna

w -= 15;
console.log(w)

// asignacion con multiplicacion (*=) multiplica el valor a una variable y la reasigna

w *= 2;
console.log(w)

// asignacion con division (/=) divide el valor a una variable y la reasigna

w /= 10
console.log(w)

/* 

3.Comparacion

este valor comparan dos valores devuelven "true" o "false"

*/

//igualdad (==) compara dos valores para ver si son iguales sin tomar encuenta el tipo de dato

let valor = "5";

let compara = 5 == valor;

console.log(compara)

// igualdad estricta (===) compara 2 valores y su tipo para ver si son exactamente iguales

compara = 5 === valor
console.log(compara)

//desigualdad (!=) si 2 valores no son iguales "NOTA" no toma en ceunta el tipo de dato

let valor1 = "10";
let valor2 = 10;

console.log(valor1 != valor2)

//desigualdad estricta (!==) verifica si 2 valores y sus tipos no son exactamente iguales

valor1 = "10"
valor2 = 10

console.log(valor1 !== valor2)

//mayor que (>) verifica si el primer valor es mayor que el segundo

compara = 5 > 5

console.log(compara)

//mayor o igual que (>=) verifica si el primer valor es mayor o gual que el segundo 

compara = 5 >= 5

console.log(compara)

// menos que (<) verifica que el primer valor es menor que el segundo

console.log(10 < 8)
console.log(7 < 30)
console.log(5 < 5)

// menos o igual que (<=) verifica si nel primer dato es igual o menos que el segundo dato

console.log(4 <= 10)
console.log(20 <= 100)
console.log(45 <= 7)
console.log(9 <= 9)