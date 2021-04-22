import './styles.css';
import { buscarHeroe } from './js/callbacks';

const heroeId = 'capi';

buscarHeroe( heroeId, (err, heroe) => {
  (err) ? console.error(err) : console.log(heroe);
});