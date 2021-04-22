import './styles.css';
import { buscarHeroe as buscarHeroCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';

// const heroeId = 'capi';

// buscarHeroe( heroeId, (err, heroe) => {
//   (err) ? console.error(err) : console.log(heroe);
// });

// Callback Hell, el código se vuelve un desastre.

// const heroeId1 = 'capi';
// const heroeId2 = 'iron';

// buscarHeroe( heroeId1, (err, heroe1) => {
//   (err) ? console.error(err) : console.log(heroe1);
  
//   buscarHeroe(heroeId2, (err, heroe2) =>{
//     (err) ? console.error(err) : console.log(`Enviando a la misión ${ heroe2.nombre }`);
//   });

// });

const heroeId1 = 'capi';
const heroeId2 = 'iron';

// buscarHeroe(heroeId1).then( (heroe) => {
//   console.log(heroe);
//   buscarHeroe(heroeId2).then( (heroe2) => {
//     console.log(hero2);
//   });
// });

Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
  .then( ([heroe1, heroe2]) => {
    //console.log('promise.all', heroes);
    console.log(`Enviando a ${ heroe1.nombre} y ${ heroe2.nombre } a la misión`);
});


console.log('Fin de programa');