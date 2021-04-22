const heroes = {
  capi: {
    nombre: 'Capitan América',
    poder: 'Aguantar inyecciones sin morir'
  },
  iron: {
    nombre: 'Iron Man',
    poder: 'Absurda cantidad de dinero'
  },
  spider: {
    nombre: 'Spiderman',
    poder: 'La mejor reacción alérgica a las picaduras'
  }
};

export const buscarHeroe = ( id ) => {
  const heroe = heroes[id];
  return new Promise( (resolve, reject) => {
    if(heroe) {
      resolve( heroe );
    } else {
      reject(`No existe un héroe con el id ${id}`);
    }
  });
}