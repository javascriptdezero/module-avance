/* La méthode map() réécrite de zéro */

/* Objet initial qui jouera le rôle du tableau (Array) */
let objetTableau = {
  
};

/* Fonction de callback */
function longueurChaine(chaine) {
  return chaine.length;
}

// On transforme notre "tableau"
let resultat = objetTableau.map(longueurChaine);
console.log(resultat);