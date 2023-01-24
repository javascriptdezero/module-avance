/* Les méthodes some() et every() réécrites de zéro */

/* Objet initial qui jouera le rôle du tableau (Array) */
let objetTableau = {
  donnees: ["zero", "un", "deux", "trois"],
  some: function() {

  },
  every: function() {

  }
};

/* Fonction de callback */
function longueurSuperieurOuEgaleA3(chaine) {
  if (chaine.length >= 3) {
    return true;
  } else {
    return false;
  }
}

// On utilise some() / every() sur notre "tableau"
let resultatSome = objetTableau.some(longueurSuperieurOuEgaleA3);
console.log(resultatSome);
let resultatEvery = objetTableau.every(longueurSuperieurOuEgaleA3);
console.log(resultatEvery);