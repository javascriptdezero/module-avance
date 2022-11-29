/* La méthode reduce() réécrite de zéro */

/* Objet initial qui jouera le rôle du tableau (Array) */
let objetTableau = {
  
};

/* Fonction de callback */
function concatenation(resultat, chaine) {
  let chaineFinale = resultat + chaine;
  return chaineFinale;
}

// On combine notre "tableau"
let resultat = objetTableau.reduce(concatenation, "");
console.log(resultat);