/**
 * Esta funcion me permite tomar una carta
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} retorna la carta del deck
 */
export const pedirCarta = (deck) => {
  
    if(!deck || deck.length === 0){
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();  //extraer del deck una carta de maneja aleatoria y removerla
    return carta;
}