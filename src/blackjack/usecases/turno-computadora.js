import { crearCartaHTML, pedirCarta, valorCarta} from "./";


/**
 * Turno de la computadora
 * @param {Number} puntosMinimos //puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas
 * @param {Array<String>} deck 
 */

  export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {
  
      if( !puntosMinimos ) throw new Error('Puntos minimos son necesarios');
      if( !puntosHTML ) throw new Error('Argumento puntosHTML es necesario');

      let puntosComputadora = 0;

      do{
          const carta = pedirCarta(deck);

          puntosComputadora = puntosComputadora + valorCarta(carta);
          puntosHTML.innerText = puntosComputadora;
  
          const imgCarta = crearCartaHTML(carta);
          divCartasComputadora.append(imgCarta); 
  
          if(puntosMinimos > 21){
              break;
          }
  
      }while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
  
      setTimeout(() => {
          if( puntosComputadora === puntosMinimos){
              alert('nadie gana');
          }else if (puntosMinimos > 21){
              alert('computadora gana');
          }else if(puntosComputadora > 21){
              alert('jugador gana');
          }else{
              alert('computadora gana');
          }
      }, 10);
  } 