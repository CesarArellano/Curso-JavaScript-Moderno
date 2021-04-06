/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
**/

let deck          = [];
const tipos       = ['C', 'D', 'H', 'S'];
const especiales  = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
    puntosComputadora = 0;

// Referencias al DOM.
const btnPedir = document.querySelector('#btnPedir');
const btnNuevo = document.querySelector('#btnNuevo');
const btnDetener = document.querySelector('#btnDetener');
const smalls = document.querySelectorAll('small');

const createDeck = () => {
  for(let i = 2; i <= 10; i++) {
    for(let tipo of tipos) {
      deck.push(i + tipo);
    }
  }
  for(let tipo of tipos) {
    for(let esp of especiales) {
      deck.push(esp + tipo);
    }
  }
  
};

createDeck();
console.log(deck);
deck = _.shuffle(deck);
console.log(deck);

const pedirCarta = () => {
  if(deck.length === 0)
    throw 'No hay cartas en el deck';  
  return deck.pop();
}

console.log(pedirCarta());

const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1)
  return (isNaN(valor)) // isNaN - No es un número
    ? (valor === 'A') ? 11 : 10
    : valor * 1;
};

const valor = valorCarta('10D');
console.log(valor);

// Eventos

btnPedir.addEventListener('click', () => {
  const carta = pedirCarta();
  puntosJugador = puntosJugador + valorCarta(carta);
  smalls[0].innerText = puntosJugador;
  
});


// Manipulación del DOM
// const divBotones = document.querySelector('#divBotones');
// const botonNuevo = document.createElement('button');
// botonNuevo.innerText = "Destruir el mundo";
// botonNuevo.classList.add('btn');
// botonNuevo.classList.add('btn-success');
// const input = document.createElement('input');
// document.body.append(input);
// input.classList.add('form-control');
// input.placeholder = 'Hola mundo';
// divBotones.append(botonNuevo);