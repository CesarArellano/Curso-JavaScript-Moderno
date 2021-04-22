import './styles.css';
import { buscarHeroe } from './js/callbacks';

// const heroeId = 'capi';

// buscarHeroe( heroeId, (err, heroe) => {
//   (err) ? console.error(err) : console.log(heroe);
// });

// Callback Hell, el código se vuelve un desastre.
const heroeId1 = 'capi';
const heroeId2 = 'iron';

buscarHeroe( heroeId1, (err, heroe1) => {
  (err) ? console.error(err) : console.log(heroe1);
  
  buscarHeroe(heroeId2, (err, heroe2) =>{
    (err) ? console.error(err) : console.log(`Enviando a la misión ${ heroe2.nombre }`);
  });

});