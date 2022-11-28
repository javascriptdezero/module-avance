/* La méthode reduce() */

let tableau = ["zero", "un", "deux", "trois"];
let nombres = [1, 2, 3, 4];

/* Une fonction de combinaison introduite depuis ES5 ! */
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// ℹ️ Terme "accumulateur" => résultat intermédiaire
// Fonction de callback : function (resultatIntermediaire, valeur, index, tableau)

/* combinaison via reduce()
[ 
  "zero", ===> callback(valeurInitiale, "zero", 0, tableau)  ===>  res0,
  "un",   ===> callback(res0, "un", 1, tableau)              ===>  res1,
  "deux", ===> callback(res1, "deux", 2, tableau)            ===>  res2,
  "trois" ===> callback(res2, "trois", 3, tableau)           ===>  resultat,
]
*/

/* reduce() avec valeur initiale */
// Concaténation de chaînes de caractères
function concatenation(resultat, chaine) {
  let chaineFinale = resultat + chaine;
  return chaineFinale;
}

let resultat = tableau.reduce(concatenation, "");
console.log(resultat);

/* Somme des éléments d'un tableau */
// function somme(resultat, nombre) {
//   let somme = resultat + nombre;
//   return somme;
// }

// resultat = nombres.reduce(somme, 0);
// console.log(resultat);

/* Création d'un objet */
// function ajouterPropriete(resultatIntermediaire, valeur) {
//   resultatIntermediaire[valeur] = valeur;
//   return resultatIntermediaire;
// }

// resultat = tableau.reduce(ajouterPropriete, {});
// console.log(resultat);

/* Avec une fonction anonyme */
// resultat = tableau.reduce(function(resultatIntermediaire, valeur, index) {
//   let chaineFinale = resultatIntermediaire + valeur + index;
//   return chaineFinale;
// }, ""); // <-- valeur initiale

// console.log(resultat);

/* reduce() SANS valeur initiale (conseil : utilisez toujours une valeur initiale) */
/* Somme des éléments d'un tableau */
// function somme(resultat, nombre) {
//   let somme = resultat + nombre;
//   return somme;
// }

// resultat = nombres.reduce(somme);
// console.log(resultat);

/* Multiplication des éléments d'un tableau */
// function multiplication(resultat, nombre) {
//   let multiplication = resultat * nombre;
//   return multiplication;
// }

// resultat = nombres.reduce(multiplication);
// console.log(resultat);

/* reduceRight() */
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight

// resultat = nombres.reduceRight(function(resultat, valeur) {
//   let puissance = valeur ** resultat;
//   return puissance;
// });
// console.log(resultat);

/* reduceRight() === Array.reverse().reduce() ! */
// resultat = nombres.reverse().reduce(function(resultat, valeur) {
//   let puissance = valeur ** resultat;
//   return puissance;
// });
// console.log(resultat);