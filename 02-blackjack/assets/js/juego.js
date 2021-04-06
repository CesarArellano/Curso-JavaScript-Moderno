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
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

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
deck = _.shuffle(deck); // Función llamada de la librería de underscore
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

// Turno de la computadora
const turnoComputadora = (puntMinimos) => {
  do {
    const carta = pedirCarta();
    puntosComputadora = puntosComputadora + valorCarta(carta);
    smalls[1].innerText = puntosComputadora;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasComputadora.append(imgCarta);
    if( puntMinimos > 21 ) {
      break;
    }
  } while( (puntosComputadora < puntMinimos) && (puntMinimos <= 21));
};

// Eventos

btnPedir.addEventListener('click', () => {
  const carta = pedirCarta();
  puntosJugador = puntosJugador + valorCarta(carta);
  smalls[0].innerText = puntosJugador;

  const imgCarta = document.createElement('img');
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add('carta');
  divCartasJugador.append(imgCarta);

  if(puntosJugador > 21) {
    console.warn('Lo siento mucho, perdiste');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  } else if ( puntosJugador === 21) {
    console.warn('21, genial!');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador)
  }
});

btnDetener.addEventListener('click', () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;
  turnoComputadora(puntosJugador);
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