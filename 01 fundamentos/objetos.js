/* 
objetos

Es una coleccion de propiedades y metodos 

Las propiedades describen las caracteristicas del objeto 

Los metodos describen los comportamientos del objeto

los objetos pueden contener distintos tipos de datos e incluso funciones

sintaxis:

let nombreArray = []
let nombreObjeto = {
//propiedades y metodos
}

propiedades dentro de un objeto se escriben en pares "clave" : "valor"

let nombre = "diego" //variable

nombre : "diego" //propiedad

las propiedades de un objeto se separan por comas `,` despues del valor

las claves de las propiedades oueden tener mas de una palabrapero se deberan escribir entre comillas dobles o normlaes

"nombre real" = "Diego",

tambien se puede escribir en formato camel case y sin comillas

nombreReal = "Diego",

definir un objeto

//metodos

un metodo es una funcion que se define como propiedad de una objeto

sintaxis

nombreClave : function(parametros) {
//codigo que se ejecuta

//this

es una palabra reservadaque se refiere al objeto actual y sirve parara acceder a sus propiedades del mismo
}
*/

let personaje = {
  nombre : `frodo bolson`,
  edad : 22,
  residencia : `La Comarca`,
  poderes : false,
  sushabilidadesHumanas : ["valor", "determinacion", "valentia"]
}

/* 
accedemos al valor de la propiedades
*/

console.log(personaje.nombre);
/* console.log(personaje["sus habilidades humanas"][2]) */

console.log(personaje.sushabilidadesHumanas[2])

/* 
podemos agregar y borrar propiedades de objetos
*/

personaje.enemigos = ["sauron", "golum"]

delete personaje.poderes

//actividad

let mascota = {
  nombre : "Chucho",
  tipo : "Canino",
  edad : 5,
  fisico : {
    estatura : 3,
    peso : 5,
    color : "cafe con blanco",
  },
  //declramos un metodo
saludo : function(amo) {
  //codigo que se ejecuta al invocar la funcion
  alert(`guau guau guauuu me llamo ${this.nombre} y mi amo es ${amo}`)
}
}



console.log(mascota.fisico.colorOjos = "verde");
delete mascota.fisico.color;

/* 
anidamos objetos

nombramos al objeto anidado y lo definimos con las llaves, dentro de las llaves se declaran las propiedades en pares iguales (clave y valor)
*/

mascota.saludo("Diego");


