/* L'opérateur in */

let tableau = ["zero", "un", "deux"];
let personnage = {
  prenom: "Tom",
  nom: "Redocemia",
  age: 35,
};

/* Utilité : permet de détecter si une propriété existe sur un objet */
console.log("prenom" in personnage);

// if ("prenom" in personnage) {
//   console.log("prenom est une propriété de l'objet personnage");
// }

// let propriete = "prenom";
// if (propriete in personnage) {
//   console.log(`${propriete} est une propriété de l'objet personnage`);
// }

/* Challenge : et sur les tableaux ? */
// if ("0" in tableau) {
//   console.log("0 est une propriété de tableau");
// } else {
//   console.log("0 n'est PAS une propriété de tableau");
// }

/* Quelle différence avec tester si la valeur === undefined ? */
// Rappel : la valeur retournée d'une propriété indéfinie est undefined
// console.log(personnage.test);

// Le problème...
// if (personnage.test !== undefined) {
//   console.log("La propriété test est dans personnage");
// } else {
//   console.log("La propriété test n'est PAS dans personnage");
// }

// if ("test" in personnage) {
//   console.log("La propriété test est dans personnage");
// } else {
//   console.log("La propriété test n'est PAS dans personnage");
// }

/* 🚨 Pour tester si une clé n'est PAS dans un objet ? */
// if (! "test" in personnage) {
//   console.log("La propriété test n'est PAS dans personnage");
// } else {
//   console.log("La propriété test est dans personnage");
// }

/* L'opérateur in va aller chercher dans les propriétés héritées */