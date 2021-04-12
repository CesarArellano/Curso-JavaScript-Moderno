const cesar = {
  nombre: 'César',
  edad: 21,
  imprimir() {
    console.log(`Nombre:  ${this.nombre}`);
  }
};

const pedro = {
  nombre: 'Pedro',
  edad: 15,
};

const melissa = {
  nombre: 'Melissa',
  edad: 35,
};

cesar.imprimir();

// Clases solucionan la declaración de múltiples declaraciones de objetos literales.
// Solución obsoleta, simular  una clase
function Persona(nombre, edad) {
  console.log('Se ejecutó esta línea');
  this.nombre = nombre;
  this.edad = edad;
  this.imprimir = () => {
    console.log(`Nombre:  ${this.nombre}`);
  }
}

const maria = new Persona('María', 18);
console.log(maria);