/* La méthode filter() réécrite de zéro */

/* Objet initial qui jouera le rôle du tableau (Array) */
let objetTableau = {
  
};

/* Fonction de callback */
function longueurSuperieurOuEgaleA3(chaine) {
  if (chaine.length >= 3) {
    return true;
  } else {
    return false;
  }
}

// On filtre notre "tableau"
let resultat = objetTableau.filter(longueurSuperieurOuEgaleA3);
console.log(resultat);