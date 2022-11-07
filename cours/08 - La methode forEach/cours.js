/* La méthode forEach() pour boucler */

// Introduit dans la version ECMAScript 2009 (ES5)
// Caniuse : https://www.caniuse.com

let tableau = ["zero", "un", "deux"];

/* Rappel : les boucles for classiques */
// for (let i = 0; i < tableau.length; i++) {
//   console.log(i, tableau[i]);
// }

/* Rappel : les fonctions de première classe */
// Voir le module intermédiaire, leçon "Les fonctions de première classe"
// function action() {
//   console.log("Exécution de la fonction action()");
// }

// function executer(fonction) {
//   console.log("J'exécute la fonction passée en argument");
//   fonction();
//   console.log("Fin de l'exécution");
// }

// executer(action);

/* La méthode forEach() sur les tableaux */
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// function afficherElement(valeur, index, tab) {
//   console.log(`${valeur} est l'élément d'index ${index} de`, tab);
// }

// tableau.forEach(afficherElement);

// Via une fonction anonyme...
// tableau.forEach(function (element) {
//   console.log(element);
// });

// À quoi sert la référence sur le tableau ?
// [0, 1, 2].forEach(function (valeur, index, tab) {
//   console.log(`${valeur} est l'élément d'index ${index} de`, tab);
// });

/* 🚨 Pas possible de faire un break ! */
// Rappel du break avec une boucle for classique
// for (let i = 0; i < tableau.length; i++) {
//   if (tableau[i].startsWith('d')) {
//     break;
//   }
//   console.log(tableau[i]);
// }

/* Essai de break avec forEach() */
// tableau.forEach(function (element) {
//   if (element.startsWith('d')) {
//     break;
//   }
//   console.log(element);
// });

/* Sur quel type de données peut-on appeler la méthode forEach() ?
Direction le MDN : recherche de "forEach"
- Array
- Map
- Set
- NodeList
- DOMTokenList
*/

/* Exemple d'utilisation de forEach() avec NodeList et DOMTokenList */
// file:///./index.html