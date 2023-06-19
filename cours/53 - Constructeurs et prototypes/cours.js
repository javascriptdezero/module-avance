/* Constructeurs et prototypes */

/* Prototype par défaut d'un type standard */
let objet = {}; // Equivalent à objet = new Object();
console.log(Object.getPrototypeOf(objet) === Object.prototype);

let tableau = [1,2,3]; // Equivalent à tableau = new Array();
console.log(Object.getPrototypeOf(tableau) === Array.prototype);

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
/* Exemple de résolution de propriété native : */
// console.log(tableau.includes(1));

/* L'opérateur new s'occupe de lier <Constructeur>.prototype à [[Prototype]] */
// console.log(Object.getPrototypeOf(tableau) === Array.prototype);

/* Ajout de nouvelles propriétés au prototype natif du constructeur Array */
// Array.prototype.coucou = function() {
//   console.log("coucou");
// }
// tableau.coucou();

/* 🚨 La modification de propriétés est dangereuse, on risque d'écraser des valeurs existantes ! */
// 🏆 Bonne pratique : ne jamais modifier les prototypes des types natifs
// Array.prototype.includes = function(valeur) {
//   return `Je n'ai pas envie de chercher ${valeur} dans ce tableau`;
// }
// console.log(tableau.includes(1));

/* Prototype par défaut d'un constructeur personnalisé */
// function Test() {
//   // ...
// }

// let test = new Test();
// console.log(Test.prototype);
// => { constructor: Test };

/* Revenons à notre type Tweet */
// function Tweet(auteur, message) {
//   this.auteur = auteur;
//   this.message = message;
//   this.dateCreation = new Date();
//   this.afficher = function() {
//     console.log(`Tweet écrit le ${this.dateCreation.toLocaleDateString('fr-FR')} par ${this.auteur} : ${this.message}`);
//   }
// }

// let tweet1 = new Tweet("Jérémy", "Voici mon premier tweet");
// let tweet2 = new Tweet("Tom", "J'apprends le JavaScript");
// tweet1.afficher();
// tweet2.afficher();

/* 1️⃣ Première amélioration : réduction de l'empreinte mémoire */
// let methodesTweet = {
//   afficher: function() {
//     console.log(`Tweet écrit le ${this.dateCreation.toLocaleDateString('fr-FR')} par ${this.auteur} : ${this.message}`);
//   }
// }

// function Tweet(auteur, message) {
//   this.auteur = auteur;
//   this.message = message;
//   this.dateCreation = new Date();
//   this.afficher = methodesTweet.afficher;
// }

// let tweet1 = new Tweet("Jérémy", "Voici mon premier tweet");
// let tweet2 = new Tweet("Tom", "J'apprends le JavaScript");
// tweet1.afficher();
// tweet2.afficher();

/* 2️⃣ Deuxième amélioration : utilisation du prototype */
// let methodesTweet = {
//   afficher: function() {
//     console.log(`Tweet écrit le ${this.dateCreation.toLocaleDateString('fr-FR')} par ${this.auteur} : ${this.message}`);
//   },
//   pseudo: function() {
//     console.log(`Nom d'utilisateur sur Twitter: @${this.auteur}`);
//   }
// }

// function Tweet(auteur, message) {
//   this.auteur = auteur;
//   this.message = message;
//   this.dateCreation = new Date();
// }

// let tweet1 = new Tweet("Jérémy", "Voici mon premier tweet");
// Object.setPrototypeOf(tweet1, methodesTweet);
// let tweet2 = new Tweet("Tom", "J'apprends le JavaScript");
// Object.setPrototypeOf(tweet2, methodesTweet);
// tweet1.pseudo();
// tweet2.pseudo();

/* 3️⃣ Troisième amélioration : plus besoin de setPrototypeOf ! */
// function Tweet(auteur, message) {
//   this.auteur = auteur;
//   this.message = message;
//   this.dateCreation = new Date();
// }
// Tweet.prototype.afficher = function() {
//   console.log(`Tweet écrit le ${this.dateCreation.toLocaleDateString('fr-FR')} par ${this.auteur} : ${this.message}`);
// };
// Tweet.prototype.pseudo = function() {
//   console.log(`Nom d'utilisateur sur Twitter: @${this.auteur}`);
// };

// let tweet1 = new Tweet("Jérémy", "Voici mon premier tweet");
// let tweet2 = new Tweet("Tom", "J'apprends le JavaScript");
// tweet1.pseudo();
// tweet2.pseudo();

/* BONUS : Accéder au constructeur d'un objet à partir de son instance */
// let chaine = new String("bonjour");
// console.log(chaine);

// On peut créer une nouvelle instance de même type :
// let nouvelleChaine = new chaine.constructor("coucou");
// console.log(nouvelleChaine);