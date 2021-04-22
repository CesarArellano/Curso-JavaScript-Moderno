import { buscarHeroeAsync , buscarHeroe} from './promesas';

const heroesIds = [ 'capi', 'iron', 'spider' ];

// Protip: Mejorar uso de await.
export const obtenerHeroesArr = async () => {
  
  return await Promise.all(heroesIds.map( buscarHeroe ));
  
  // Alternativa.
  // const heroesArr = [];
  // for(const id of heroesIds) {
  //   heroesArr.push(buscarHeroe(id));
  // }
  // return await Promise.all(heroesArr);
}