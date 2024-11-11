/* 
//clases

es una plantilla paracrear objetos 

es una forma modernay narural de trabajar con la programacion horientada a objetos

los nombres de las clases se recomiendan escribirlas con la primera letra mayuscula

//metodo construcctor

es un metodo que se ejecuta automaticamnete cuando se crea una nueva instacia de la clase

dentro del metodo constyructor pasamos los datos y valores de la clase 

las propiedades pasan como parametros y luego se asignan con "this"

//sintaxis basica

clase NombreDeLaClase {
  //metodod construcctor

  constructor(parametro1,parametro2,parametrto3,...) {
  this.par1 = par1;
  this.par2 = par2;
  this.par3 = par3:
  }
}
*/

class Mascota {
  constructor(nombre, edad){
    this.nombre = nombre; //propiedad nombre
    this.edad = edad; //propiedad edad
  }

  saludo() {
  console.log(`hola me llamo ${this.nombre} y tengo ${this.edad} años`)
  }
}

//instanciar de clase Mascota.

/* 
paracrear un objeto usamos la clase , se utiliza la palabra "new" este invoca al instructor de la clase

sintaxis
new NombreClase(par1, par2)

//metodos de clase

se definen dentro de una clase y se asignan automaticamente en el prototipo del objeto y esto permite que todas las instacias copartan el mismo metodo

sintaxis

nombreMetodo(parm...) {
//codigo que se ejecuta
}
*/

let Mascota1 = new Mascota("chucho", 3);
let Mascota2 = new Mascota("pedro", 4);

//accedemos a los datos de la instancia

console.log(Mascota1.nombre);
console.log(Mascota1.edad);
console.log(Mascota2.nombre);
console.log(Mascota2.edad);

//lanzar los metodos de los objetos

Mascota1.saludo()
Mascota2.saludo()

