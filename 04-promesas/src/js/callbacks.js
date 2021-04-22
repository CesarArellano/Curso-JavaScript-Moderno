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

export const buscarHeroe = (id, callback) => {
  const heroe = heroes[id];
  (heroe) ? callback(null, heroe) : callback(`No existe un héroe con el id ${id}`);
};