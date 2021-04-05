const crearPersona = (nombre, apellido) => ({ nombre, apellido }); // () para indicar que se devolverán más de dos argumentos.
const newPerson = crearPersona('César', 'Arellano');
console.log(newPerson);

// Destructurando propiedades de objetos y renombrándolos
const {apellido: nuevoApellido} = crearPersona('César', 'Arellano');
console.log(nuevoApellido);

function imprimeArgumentos() {
  console.log(arguments);
}

// En funciones flechas no crea el objeto arguments, por eso ponemos ...args
const imprimeArgumentos2 = ( ...args ) => {
  // console.log(args);
  return args;
}

// Destructurando argumentos.
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'César', 'Hello');
console.log(casado, vivo, nombre, saludo);


const tony = {
  name: 'Iron Man',
  alive: true,
  suits: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// Destructrando propiedades de objetos, poniendo valor por default al parámetro age.
const imprimePropiedades = ({ name, alive, age = 0 }) => {
  // console.log(character.name);
  console.log(name);
  console.log(alive);
  console.log(age);
}

imprimePropiedades(tony);