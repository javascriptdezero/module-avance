/* Les boucles for...of */

// Introduit dans la version ECMAScript 2015 (ES6)
// Caniuse : https://www.caniuse.com

let tableau = ["zero", "un", "deux"];

/* Rappel : les boucles for classiques */
for (let i = 0; i < tableau.length; i++) {
  console.log(tableau[i]);
}

// Avec une boucle for...of
// for (let valeur of tableau) {
//   console.log(valeur);
// }

/* ✅ Possibilité de faire un break */
// Rappel boucle for classique
// for (let i = 0; i < tableau.length; i++) {
//   if (tableau[i].startsWith('d')) {
//     break;
//   }
//   console.log(tableau[i]);
// }

// Utilisation de break dans un for...of
// for (let valeur of tableau) {
//   if (valeur.startsWith('d')) {
//     break;
//   }
//   console.log(valeur);
// }

/* Sur quel type de données peut-on utiliser une boucle for...of ? */
// Réponse : sur les itérables !

// - Array
// - String
// - Map
// - Set

/* Comment savoir si un type est itérable ? */
// Doc MDN ou testez par vous-même !

// for (let chiffre of 1234) {
//   console.log(chiffre);
// }

/* Exemple d'utilisation de for...of avec NodeList et DOMTokenList */
// file:///./index.html