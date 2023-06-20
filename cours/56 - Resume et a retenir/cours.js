/* Résumé et ce qu'il faut retenir */

/* Les méthodes sur les types de données standards :

// Fonction constructeur
function Array() { // Convention 1ère lettre en majuscule
  this.length = ...
}

// Prototype de la fonction constructeur (un simple objet JS)
Array.prototype = {
  includes: function (...) { ... },
  map: function (...) { ... },
  filter: function (...) { ... },
  constructor: Array,
};

// Propriétés et méthodes statiques
Array.from = function(...) { ... }
Array.of = function(...) { ... }

// Ce qui explique comment est écrit la documentation du MDN !
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

// Appel du constructeur avec new
let tableau = new Array(1,2,3);
*/

/* L'opérateur new :
- Crée un {} qui est référencé par le mot-clé this
- Relie le [[Prototype]] de l'instance à la propriété prototype du constructeur
- Renvoie automatiquement l'instance créée (sans avoir à utiliser return)
*/

/* Résolution de propriété */
function Tweet(auteur, message) {
  this.auteur = auteur;
  this.message = message;
}

Tweet.prototype.afficher = function() {
  console.log(`Tweet de ${this.auteur} : ${this.message}`);
}

let tweet = new Tweet("Jérémy", "Ceci est un tweet");
tweet.afficher();

/* Prototype par défaut + héritage "en cascade" 
Array.prototype => Object.prototype */
let tableau = [1,2,3];
console.log(tableau);

/* Obtenir le prototype d'un objet */
Object.getPrototypeOf(tableau);

/* Affecter le prototype d'un objet (🚨 mauvaise pratique niveau performances !) */
Object.setPrototypeOf(tableau, Tweet.prototype); // ❌
let obj = Object.create(Tweet.prototype); // ✅

/* Ajout/Suppression/Modification possible des prototypes natifs (🚨 mauvaise pratique car on peut "casser" le fonctionnement des méthodes du langage) :
❌ On n'aura plus accès à la vraie méthode Array.prototype.includes() définie dans la norme ECMAScript et implémentée pour nous par l'interpréteur JavaScript !
*/
Array.prototype.includes = function() {
  console.log("coucou");
}
