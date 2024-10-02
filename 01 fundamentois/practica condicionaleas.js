// practica condiconales

let edad = prompt("Por favor, introduce tu edad:");

alert("Tu edad es: " + edad);

if (edad >= 18) {
  alert("¡Eres mayor de edad!");
} 
else if (edad < 18) {
  alert("Eres menor de edad. 😊");
} 
else {
  let alien = "¿Eres un alien?";
  if (!alien) { // Si no se cumple la condición de alien
    console.log("¡Eres un alien! 👽");
  }
}
