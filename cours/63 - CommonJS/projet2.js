/* Projet pour calculer le périmètre d'un rectangle */

// On importe le module
let { somme } = require('./lib-math');
let fs = require('fs');

function perimetre(cotes) {
  let sommeDesCotes = somme(cotes);
  return sommeDesCotes * 2;
}

console.log(perimetre([2,4]));