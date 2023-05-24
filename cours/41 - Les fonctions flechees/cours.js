/* Les fonctions fléchées */

// Introduites dans ES6, elles permettent d'écrire et de lire plus vite des fonctions (mais pas que !)

/* Syntaxe simplifiée */

// Fonction classique
function calculTTC(prixHT, TVA) {
  let taxe = prixHT * TVA / 100;
  let prixTTC = prixHT + taxe;
  return prixTTC;
}
console.log(calculTTC(100, 20));

// Fonction fléchée
let ffCalculTTC = (prixHT, TVA) => {
  let taxe = prixHT * TVA / 100;
  let prixTTC = prixHT + taxe;
  return prixTTC;
}
console.log(ffCalculTTC(100, 20));

/* Simplification de la syntaxe : return implicite */

// Fonction classique
// function calculTTC2(prixHT, TVA) {
//   return prixHT * (1 + TVA / 100);
// }
// console.log(calculTTC2(100, 20));

// // Fonction fléchée
// let ffCalculTTC2 = (prixHT, TVA) => prixHT * (1 + TVA / 100);
// console.log(ffCalculTTC2(100, 20));

/* Parenthèses facultatives si un seul paramètre */

// Fonction classique
// function saluer(prenom) {
//   return `Bonjour ${prenom}`;
// }
// console.log(saluer("Tom"));

// // Fonction fléchée
// let ffSaluer = prenom => `Bonjour ${prenom}`;
// console.log(ffSaluer("Tom"));

/* Parenthèses nécessaires si aucun paramètre */

// Fonction classique
// function reponse() {
//   return 42;
// }
// console.log(reponse());

// // Fonction fléchée
// let ffReponse = () => 42;
// console.log(ffReponse());

/* Comment retourner un objet ? (Erreur fréquente) */

// Fonction classique
// function creerObjet() {
//   return {
//     prenom: "Tom",
//     nom: "Redocemia",
//   };
// }
// console.log(creerObjet());

// // 🚨 Fonction fléchée
// let ffCreerObjet = () => {
//   prenom: "Tom",
//   nom: "Redocemia",
// };
// console.log(ffCreerObjet());

/* Une fonction fléchée n'a pas de mot-clé this !
On ne peut donc pas l'utiliser en tant que méthode ! */

// let personne = {
//   prenom: "Tom",
//   nom: "Redocemia",
//   age: 42,
//   saluer: function() {
//     console.log(`Bonjour, je suis ${this.prenom} ${this.nom}, j'ai ${this.age} ans`);
//   }
// }

// personne.saluer();

/* Challenge : fonction imbriquée */

// let personne = {
//   prenom: "Tom",
//   nom: "Redocemia",
//   age: 42,
// }

// function identite() {
//   console.log(`Voici mon identité : ${this.prenom} ${this.nom}`);

//   function calculerAgeEnJours() {
//     return this.age * 365;
//   }

//   console.log(`J'ai ${this.age} ans soit ${calculerAgeEnJours()} jours !`);
// }

// personne.identite = identite;
// personne.identite();

/* Challenge : fonction imbriquée (écriture différente mais identique) */

// let personne = {
//   prenom: "Tom",
//   nom: "Redocemia",
//   age: 42,
//   identite() {
//     console.log(`Voici mon identité : ${this.prenom} ${this.nom}`);

//     function calculerAgeEnJours() {
//       return this.age * 365;
//     }

//     console.log(`J'ai ${this.age} ans soit ${calculerAgeEnJours()} jours !`);
//   }
// }

// personne.identite();

// ℹ️ On verra des exemples supplémentaires dans la prochaine leçon !

/* Les fonctions fléchées n'ont pas accès à l'objet spécial arguments */

// function variadique() {
//   console.log(arguments);
// }
// variadique("bonjour", 1, true);

// let ffVariadique = () => {
//   console.log(arguments);
// }
// ffVariadique("bonjour", 1, true);

/* Alternative : utiliser la syntaxe du reste des paramètres "..." */

// let ffVariadique = (...args) => {
//   console.log(args);
// }
// ffVariadique("bonjour", 1, true);

/* Ce qu'il faut retenir
- une fonction fléchée s'utilise en lieu et place de n'importe quelle autre fonction classique (souvent on les utilise en tant que callbacks, on le verra bientôt). Cela veut dire qu'on peut faire du destructuring, qu'on peut utiliser la syntaxe du reste "..." des paramètres etc.
- une fonction fléchée n'a pas de this, elle hérite de celui de la portée englobante
- une fonction fléchée ne peut pas accéder à l'objet spécial arguments (mais on peut contourner le problème grâce à "...")
*/