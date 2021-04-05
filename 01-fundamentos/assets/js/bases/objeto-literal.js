// Los objetos literales son como los diccionarios en Python o incluso JSON.

const character = {
  name: 'Iron Man',
  alive: true,
  age: 40,
  coords: {
    lat: 34.034,
    lng: -118.70
  },
  suits: ['Mark I', 'Mark V', 'Hulkbuster'],
};

console.log(character.name);
console.log(character['age']);

// No importa que sea const la variable el resto del código es permitido.
delete character.age; // Borrar propiedades de objetos.
console.log(character);

character.married = true; 
// Pares de valores
const entriesPares = Object.entries(character);
console.log(entriesPares);

Object.freeze(character) // Convertir a objeto inmutable (pero solo lo que apunten directamente las propiedades);

character.money = 1212;
console.log(character);

Object.freeze(character.coords) // Bloqueamos la reasignación específica de variables.

const properties = Object.getOwnPropertyNames(character);
const values = Object.values(character);
console.log(properties,values);