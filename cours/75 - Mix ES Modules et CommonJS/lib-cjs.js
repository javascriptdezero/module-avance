
function sommeCJS(tableau) {
  return tableau.reduce((resultat, valeur) => resultat + valeur, 0);
}

// Export CommonJS
module.exports.sommeCJS = sommeCJS;