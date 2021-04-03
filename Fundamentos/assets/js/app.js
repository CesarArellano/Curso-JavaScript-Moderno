
alert('Hola desde app.js');

console.log('Hola Mundo');

let a = 10;
let b = 10;
const c = 10;

let d = 'IronMan',
    x = a + b;

console.log('a', a);
console.log('b', b);
console.log('c', c);

let numero = 12, 
    contador = 0;

for (let i = 1; i <= numero; i++) {
  if (numero % i == 0 ) {
    contador++;
  }
}

console.log('%c Resultado', 'color: green'); // Colores en console.log
if(contador == 2) {
  console.log('Número primo');
} else {
  console.log('No es número primo');
}

console.table({a, b, c, d, x});

// Problemas con var, modifica variables en window (Objeto global).

// var outerWidth = 600; window.outerWidth lo sobresribe
// var outerHeight = 1000;

let outerWidth = 450; // No lo va a sobrescribir
