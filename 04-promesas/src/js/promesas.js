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

// Promesas
const buscarHeroe = ( id ) => {
  const heroe = heroes[id];
  return new Promise( (resolve, reject) => {
    if(heroe) {
      resolve( heroe );
    } else {
      reject(`No existe un héroe con el id ${id}`);
    }
  });
}

// Async
const buscarHeroeAsync = async ( id ) => {
  const heroe = heroes[id];

  if(heroe) {
    return heroe;
  } else {
    throw Error(`No existe un héroe con el id ${id}`); // Si no se ocupa Error()
  }
}


const promesaLenta = new Promise( ( res, rej ) => {
  setTimeout(() => res('Promesa Lenta'), 2000);
});

const promesaMedia = new Promise( ( res, rej ) => {
  setTimeout(() => res('Promesa Media'), 1500); // No importa si da reject porque la promesa rápida es más rápida xd.
});

const promesaRapida = new Promise( ( res, rej ) => {
  setTimeout(() => res('Promesa Rápida'), 1000);
});

export {
  promesaLenta,
  promesaMedia,
  promesaRapida,
  buscarHeroe,
  buscarHeroeAsync
}