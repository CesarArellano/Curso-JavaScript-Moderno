// Lo recomendable es poner las funciones arriba del archivo.
function saludar(nombre) {
  console.log(arguments); // Imprime los argumentos envíados a la función.
  console.log(`Hola ${nombre}`);
}

// Función anónima
const saludar2 = function(nombre) {
  console.log('Hola ' + nombre);
}

const saludarFlecha = () => {
  console.log('Hola flecha');
}

const getRandom = () => Math.random();
let nombre = 'César';


saludar(nombre, 67, true, 'México'); // Mala práctica
saludar2(nombre);
saludarFlecha();
console.log(getRandom());