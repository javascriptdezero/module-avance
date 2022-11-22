/* La méthode filter() */

let tableau = ["zero", "un", "deux", "trois"];

/* Une fonction de filtrage introduite depuis ES5 ! */
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// Pour mémoriser : filter 🇬🇧 => filtrer 🇫🇷

// Fonction de callback : function (valeur, index, tableau)

/* Prendre les mots d'une longueur supérieure ou égale à 3 */
function longueurSuperieurOuEgaleA3(chaine) {
  if (chaine.length >= 3) {
    return true;
  } else {
    return false;
  }
}

let resultat = tableau.filter(longueurSuperieurOuEgaleA3);
console.log(resultat);

/* Un NOUVEAU tableau est créé ! */
// console.log(tableau, resultat);

/* Avec une fonction anonyme : Filtrer les mots de 4 lettres avant l'index 2 */
// resultat = tableau.filter(function(valeur, index) {
//   if (valeur.length === 4 && index < 2) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(resultat);

/* Prendre 1 élément sur 2 */
// resultat = tableau.filter(function(valeur, index) {
//   if (index % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(resultat);

/* Filtrer les mots dont la longueur est inférieure au dernier mot */
// resultat = tableau.filter(function(valeur, index, tableau) {
//   if (valeur.length < tableau[tableau.length - 1].length) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(resultat);

/* Filtrer les cadeaux trop chers */
// let cadeaux = [
//   { nom: "jouet1", prix: 23 },
//   { nom: "jouet2", prix: 15 },
//   { nom: "jouet3", prix: 50 },
// ];

// let cadeauxTropChers = cadeaux.filter(function(valeur) {
//   return valeur.prix >= 45;
// });
// console.log(cadeauxTropChers);