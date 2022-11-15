/* Quelle façon de boucler choisir ? */

/* Les différentes façons de boucler qu'on a vues */
// - for (;;) (boucles classiques)
// - forEach()
// - for...of
// - for...in

/* Choisir sa boucle en fonction de ses besoins */
let tableau = ["zero", "un", "deux"];
let personnage = {
  prenom: "Tom",
  nom: "Redocemia",
  age: 35,
};

/* Si on travaille sur un tableau */
// Itération sur les valeurs dans l'ordre ascendant : for...of
for (let valeur of tableau) {
  console.log(valeur);
}

// Itération sur les valeurs & indices dans l'ordre ascendant : forEach()
tableau.forEach(function(valeur, indice) {
  console.log(indice, valeur);
});

// Itération avancée (à l'envers, un item sur 2, etc.) : for (;;)
for (let i = 0; i < tableau.length; i += 2) {
  console.log(tableau[i]);
}

/* Si on travaille sur un objet */
// On veut itérer sur toutes les propriétés (y compris celles héritées) : for...in
for (let propriete in personnage) {
  console.log(propriete);
}

// On veut itérer sur les propriétés (sans les propriétés héritées) : for...of sur Object.keys(objet)
for (let propriete of Object.keys(personnage)) {
  console.log(propriete);
}

/* Pas de panique ! */
// Pas de différences de performances
// On peut toujours réécrire une boucle sous une autre forme si le besoin change
