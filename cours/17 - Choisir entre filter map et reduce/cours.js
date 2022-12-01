/* Choisir entre filter(), map() et reduce() */

let tableau = ["zero", "un", "deux", "trois"];

/* filter() : on veut FILTRER
- On ne modifie PAS les éléments du tableau
- On veut seulement sélectionner une partie de ces éléments selon certains critères
SORTIE
- Un tableau de taille égale ou inférieure au tableau initial
*/

// Filtrer tous les éléments qui commencent par 'd'
console.log(tableau.filter(function(valeur) {
  return valeur.startsWith('d');
}));

// Filtrer tous les éléments qui contiennent la lettre 'e'
console.log(tableau.filter(function(valeur) {
  return valeur.includes('e');
}));

/* map() : on veut TRANSFORMER
- On souhaite transformer TOUS les éléments du tableau
SORTIE :
- Un tableau de taille égale au tableau initial
*/

/*
// On transforme chaque élément en la chaîne "<index>:<valeur>"
console.log(tableau.map(function(valeur, index) {
  return index + ":" + valeur;
}));

// On transforme chaque élément en objet { index: <index>, valeur: <valeur> }
console.log(tableau.map(function(valeur, index) {
  return {
    index: index,
    valeur: valeur,
  }
}));
*/

/* reduce() : on veut COMBINER
- On souhaite combiner les éléments en une valeur unique
SORTIE :
- Toute valeur de tout type (tableau y compris !)
*/

/*
// On calcule la somme des longueurs des chaînes du tableau
console.log(tableau.reduce(function(resultatIntermediaire, valeur) {
  return resultatIntermediaire + valeur.length;
}, 0)); // <-- Valeur initiale à 0

// On crée un ensemble (Set) ne contenant que les prénoms sans doublons
let doublons = ["jean", "jacques", "jean", "john", "jacques"];
console.log(doublons.reduce(function(resultatIntermediaire, valeur) {
  return resultatIntermediaire.add(valeur);
}, new Set()));

// On crée un tableau contenant le nombre de lettres et la
// concaténation des 1ères lettres de chaque mot du tableau
console.log(tableau.reduce(function(resultatIntermediaire, valeur) {
  resultatIntermediaire[0] += valeur.length;
  resultatIntermediaire[1] += valeur[0];
  return resultatIntermediaire;
}, [0, ''])); // <-- Valeur initiale

// On crée un objet contenant le nombre de lettres et la
// concaténation des 1ères lettres de chaque mot du tableau
console.log(tableau.reduce(function(resultatIntermediaire, valeur) {
  resultatIntermediaire.nombreLettres += valeur.length;
  resultatIntermediaire.initiales += valeur[0];
  return resultatIntermediaire;
}, { nombreLettres: 0, initiales: ''})); // <-- Valeur initiale
*/

/* 🤯 BONUS : reduce() peut être utilisé pour faire un filter() ou map() ! */

/* Utilisation de reduce à la place de filter() */
// Filtrer tous les éléments qui commencent par 'd'
/*
console.log(tableau.reduce(function(resultatIntermediaire, valeur) {
  if (valeur.startsWith('d')) {
    resultatIntermediaire.push(valeur);
  }
  return resultatIntermediaire;
}, [])); // <-- Valeur initiale
*/

/* Utilisation de reduce à la place de map() */
// On transforme chaque élément en la chaîne "<index>:<valeur>"
/*
console.log(tableau.reduce(function(resultatIntermediaire, valeur, index) {
  resultatIntermediaire.push(index + ":" + valeur);
  return resultatIntermediaire;
}, [])); // <-- Valeur initiale
*/

