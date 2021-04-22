// import {promesaLenta, promesaMedia, promesaRapida } from './js/promesas'
import { obtenerHeroesArr } from './js/await';

// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

// Promise.race([promesaLenta, promesaMedia, promesaRapida])
//   .then(  console.log  )
//   .catch( console.warn );

// buscarHeroe('capi').then( console.log );
// buscarHeroeAsync('capi2')
//   .then( console.log )
//   .catch( console.warn );

console.time('await');
const heroes = obtenerHeroesArr().then(console.table);
console.timeEnd('await');
