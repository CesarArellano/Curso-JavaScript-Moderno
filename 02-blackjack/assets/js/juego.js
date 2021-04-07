
// Función anónimas, autoinvocadas => Patrón Módulo.
(() => {
  'use strict'

  let deck          = [];
  const tipos       = ['C', 'D', 'H', 'S'],
        especiales  = ['A', 'J', 'Q', 'K'];

  let puntosJugadores = [];
  
  // Referencias al DOM.
  const btnPedir = document.querySelector('#btnPedir'),
        btnNuevo = document.querySelector('#btnNuevo'),
        btnDetener = document.querySelector('#btnDetener');
  
  const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHTML = document.querySelectorAll('small');


  btnPedir.disabled = true;
  btnDetener.disabled = true;

  const inicializarJuego = ( numJugadores = 2 ) => {
    deck = createDeck();
    puntosJugadores = [];
    
    for(let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
      puntosHTML[i].innerText = 0;
      divCartasJugadores[i].innerHTML = '';
    }

    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };

  const createDeck = () => {
    deck = [];
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
    return _.shuffle(deck); // Función llamada de la librería de underscore
  };
  
  const pedirCarta = () => {
    if(deck.length === 0)
      throw 'No hay cartas en el deck';  
    return deck.pop();
  }

  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1)
    return (isNaN(valor)) // isNaN - No es un número
      ? (valor === 'A') ? 11 : 10
      : valor * 1;
  };

  const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  };

  const crearCarta = (carta, turno) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);
  };
  // Turno de la computadora
  const turnoComputadora = (puntMinimos) => {
    
    let carta,
          puntosComputadora,
          lastPosition = puntosJugadores.length -1;
    do {
      carta = pedirCarta();
      puntosComputadora = acumularPuntos(carta, lastPosition);
      crearCarta(carta, lastPosition)
      if( puntMinimos > 21 ) {
        break;
      }
    } while( (puntosComputadora < puntMinimos) && (puntMinimos <= 21));
    
    // Ejecutar esto después del while.
    determinarGanador();
  };

  const determinarGanador = () => {
    const [ puntMinimos, puntosComputadora ] = puntosJugadores;

    setTimeout(() => {
      if(puntosComputadora === puntMinimos) {
        alert('Nadie gana :(');
      } else if (puntMinimos > 21) {
        alert('Computadora gana');
      } else if (puntosComputadora > 21) {
        alert('Jugador gana');
      } else {
        alert('Computadora gana');
      }
    }, 20);
  };
  // Eventos

  btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    const puntosJugador = acumularPuntos(carta, 0);
    crearCarta(carta, 0)
    if (puntosJugador > 21) {
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
    turnoComputadora(puntosJugadores[0]);
  });

  btnNuevo.addEventListener('click', () => {
    inicializarJuego();
  });

  //Haremos pública la función.
  return {
    nuevoJuego: inicializarJuego
  };
})();