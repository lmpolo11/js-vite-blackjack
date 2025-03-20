
/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement}
 */
export const crearCartaHTML = (carta) => {
    if(! carta) throw new Error('La carta es un argumento obligatorio');

    //<img class="carta" src="assets/cartas/10H.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');

    return imgCarta;
}