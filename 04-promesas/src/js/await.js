import { buscarHeroeAsync , buscarHeroe } from './promesas';

const heroesIds = [ 'capi', 'iron', 'spider' ];
const heroesPromesas = heroesIds.map( buscarHeroe );

// Protip: Mejorar uso de await.
export const obtenerHeroesArr = async () => {
  
  return await Promise.all(heroesPromesas);
  
  // Alternativa.
  // const heroesArr = [];
  // for(const id of heroesIds) {
  //   heroesArr.push(buscarHeroe(id));
  // }
  // return await Promise.all(heroesArr);
}

export const obtenerHeroesAwait = async ( id ) => {
  try {
    const heroe = await buscarHeroeAsync(id);
    return heroe;

  } catch(err) {
    // throw err;
    return {
      nombre: 'Sin nombre',
      poder: 'Sin poder'
    };
  }
  
};

export const heroesCiclo = async () => {
  console.time('HeroesCiclo');
  // const heroes = await Promise.all(heroesPromesas);
  // heroes.forEach( console.log );
  
  for await (const heroe of heroesPromesas) {
    console.log(heroe);
  }
  console.timeEnd('HeroesCiclo');
}

export const heroeIfAwait = async ( id ) => {
  if ( ( await buscarHeroeAsync(id) ).nombre === 'IronMan' ) {
    console.log('Es el mejor de todos');
  } else {
    console.log('Nada');
  }

}