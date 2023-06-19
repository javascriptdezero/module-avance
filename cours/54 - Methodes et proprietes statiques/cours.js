/* Les méthodes et propriétés statiques */

/* Dans l'interpréteur JS on a donc :
function Array() {
  ...
}
Array.prototype = {
  includes: function(...) { ... },
  map: function(...) { ... },
  filter: function(...) { ... }, 
  ...
}
*/

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
let tableau = [1,2,3];
console.log(tableau.includes(1));

/* Méthodes statiques */
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#m%C3%A9thodes_statiques
let nombres = Array.from([4,5,6]);
console.log(nombres);

/* Dans l'interpréteur JS on a donc :
function Array() {
  ...
}
Array.prototype = {
  includes: function(...) { ... },
  map: function(...) { ... },
  filter: function(...) { ... }, 
  ...
}
Array.from = function(...) {
  // ...
}
*/

/* Pourquoi des méthodes statiques ?
- Pas besoin d'accéder aux informations de l'instance (on n'utilise jamais this)
- On les range toutes ensemble dans un endroit approprié
- Méthodes outils utiles sur le type de données avec lequel on travaille

Voir : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#m%C3%A9thodes_statiques
*/

/* Exemples avec notre type Tweet */
// function Tweet(auteur, message) {
//   this.auteur = auteur;
//   this.message = message;
// }

// Tweet.from = function(objet) {
//   return new Tweet(objet.auteur, objet.message);
// }

// let tweet = Tweet.from({
//   auteur: "Jérémy",
//   message: "Ceci est un tweet",
// });

// console.log(tweet);
