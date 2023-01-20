/* La méthode some() */

let tableau = ["zero", "un", "deux", "trois"];

/* Méthode introduite depuis ES5 !
Est-ce qu'au moins un élément passe le test de la fonction ? */

// Est-ce qu'il existe un mot avec la lettre 'd' ?
let resultat = tableau.some(function(valeur) {
  return valeur.includes('d');
});
console.log(resultat);

// Est-ce qu'il existe un mot avec la lettre 'h' ?
resultat = tableau.some(function(valeur) {
  return valeur.includes('h');
});
console.log(resultat);

// Fonction de callback : function (valeur, index, tableau)

// Est-ce qu'il existe un mot avec la lettre 's' à un index impair ?
resultat = tableau.some(function(valeur, index) {
  return index % 2 === 1 && valeur.includes('s');
});
console.log(resultat);

// Est-ce qu'il existe une façon de concaténer le dernier mot et tout autre
// mot pour obtenir une longueur strictement supérieure à 9 ?
resultat = tableau.some(function(valeur, index, tab) {
  let grandMot = valeur + tab[tab.length - 1];
  return grandMot.length > 9;
});
console.log(resultat);

// Par convention mathématique, some() retourne false sur un tableau vide
let tableauVide = [];
resultat = tableauVide.some(function(valeur) {
  return true;
});
console.log(resultat);