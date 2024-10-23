/* 
funciones 

son bvloques de codigo reutilizables ya que realizan una tarea espesifica ya que realizan el codigo una y otra vez podemos asiganar una funcion para solo una vez y utilizar cuando querramos

conceptos de las funciones

* definir la funcion: creamos la funcion con un nombre y los datos que llamamos parameros (opcionales)

* invocamos: llamamos la funcion cuando ocupamos que se ejecute su codigo, es decir que haga su tarea 

* retorna: puede devolcer un resultado la funcion. (opciona) "returm"

sintasix

  function nombreFuncion( parametro1, parametro2, parametro3... ) {//codigo que se ejecute
  returm resultado;}

  function -> es la palabra clave para declarar una funcion
  nombraFuncion -> el nombre que le asignamos a la funcion. este nombre lo utilzamos para invocar

  parm1, parm2... -> son los datos que le pasamos a la funcion para quetrabaje con ellos en su bloque de codigo

  cuerpo de la funcion -> el codigo qeu ejecuta y realiza la tarea de la funcion

  returm -> devuelve o retornaun resultado (opcional)

  */

function saludo() {
  console.log("hola nariz de bola! 🎃")
}

/* saludo(); */

function saludoPersonalizado(nombre) {
console.log(`saludo ${nombre}`)
}

/* saludoPersonalizado("Diego");
saludoPersonalizado("perter");
saludoPersonalizado("no se"); */

function suma(a,b) {
  return a + b
}

let resultado = suma(45,22);
console.log(resultado)