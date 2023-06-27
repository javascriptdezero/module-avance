
function somme(tableau) {
  // Testons le mode strict !
  undefined = "test";
  return tableau.reduce((resultat, valeur) => resultat + valeur, 0);
}

// CommonJS
module.exports.somme = somme;

// ES Modules
// export { somme };
