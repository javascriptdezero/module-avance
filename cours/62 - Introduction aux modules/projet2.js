/* Projet pour calculer le périmètre d'un rectangle */

function perimetre(cotes) {
  let sommeDesCotes = cotes.reduce((resultat, valeur) => resultat + valeur, 0);
  return sommeDesCotes * 2;
}

console.log(perimetre([2,4]));