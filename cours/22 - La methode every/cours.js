/* La méthode every() */

let tableau = ["zero", "un", "deux", "trois"];

/* Méthode introduite depuis ES5 !
Est-ce que TOUS les éléments passent le test de la fonction ? */

// Est-ce que tous les mots ont la lettre 'u' ?
let resultat = tableau.every(function(valeur) {
  return valeur.includes('u');
});
console.log(resultat);

// Est-ce que tous les mots ont au moins 2 lettres ?
resultat = tableau.every(function(valeur) {
  return valeur.length >= 2;
});
console.log(resultat);

// Fonction de callback : function (valeur, index, tableau)

// Est-ce que tous les mots ont au moins 2 lettres et une position >= 2 ?
resultat = tableau.every(function(valeur, index) {
  return index >= 2 && valeur.length >= 2;
});
console.log(resultat);

// Est-ce que tous les mots (sauf le dernier) ont moins de lettres que le dernier mot ?
resultat = tableau.every(function(valeur, index, tab) {
  // Si on regarde le dernier mot, on renvoie true
  if (index === tab.length - 1) return true;
  // On compare les longueurs des mots
  let dernierMot = tab[tab.length - 1];
  return valeur.length < dernierMot.length;
});
console.log(resultat);

// Par convention mathématique, every() retourne true sur un tableau vide
let tableauVide = [];
resultat = tableauVide.every(function(valeur) {
  return false;
});
console.log(resultat);