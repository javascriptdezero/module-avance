/* Les boucles for...in */

// Introduit dans les toutes premières versions d'ECMAScript
// Caniuse : https://www.caniuse.com

let personnage = {
  prenom: "Tom",
  nom: "Redocemia",
  age: 35,
};

/* Quelle est sa syntaxe et son utilité ? */
for (let propriete in personnage) {
  console.log(`${propriete} => ${personnage[propriete]}`);
}

/* Et sur un tableau ? */
// let tableau = ["zero", "un", "deux"];
// for (let index in tableau) {
//   console.log(`${index} => ${tableau[index]}`);
// }

/* Rappel : un tableau est un objet */
// console.log(tableau);

/* Dans quel ordre sont énumérées les propriétés ? */
// Dans l'ordre de création pour les propriétés NON numériques
// Dans l'ordre ascendant pour les propriétés numériques
// let exemple = {
//   bac: "baccalaureat",
//   0: "zero",
//   "42": "quarante-deux",
//   zic: "musique",
//   12: "douze",
//   "5": "cinq",
//   abs: "absolu",
// };

// for (let propriete in exemple) {
//   console.log(`${propriete} => ${exemple[propriete]}`);
// }

/* BONUS : Équivalent d'un for...in avec un for...of */
// for (let propriete of Object.keys(personnage)) {
//   console.log(`${propriete} => ${personnage[propriete]}`);
// }