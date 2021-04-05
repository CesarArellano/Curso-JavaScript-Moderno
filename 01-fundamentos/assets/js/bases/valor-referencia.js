// Todos los primitivos son pasados por valor, mientras que los objetos se pasan por referencia.
let a = 10;
let b = a;

console.log({a, b});

let juan = { nombre: 'Juan'};
// let ana = juan; // Se pasa por referencia.
let ana = { ... juan }; // Usamos el operador spread para solucionar el problema de la referencia.
ana.nombre = 'Ana'; // Tanto a juan como a ana se le cambia el nombre a Ana.

console.log({ juan, ana });

const cambiaNombre = ({ ... persona }) => {
  persona.nombre = 'Tony';
  return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);

console.log({peter, tony});

// Arrays

const nameFruits = ['Apple', 'PineApple', 'Pear'];

console.time('slice');
const otherFruits = nameFruits.slice();
console.timeEnd('slice');

// Es mejor spread, en cuestión de performance
console.time('spread');
const otherFruits2 = [...nameFruits];
console.timeEnd('spread');


otherFruits.push('Mango');

console.table({nameFruits, otherFruits});