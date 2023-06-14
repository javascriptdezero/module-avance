/* Les prototypes */

/* Définition */

/* Exemple de visiteurs et clients sur un site web */
let visiteur = {
  id: 42,
};

let client = {
  iban: "FR12 1234 1234 1234 1234",
};

/* Objectif : avoir accès à l'id du visiteur depuis l'objet client */
console.log(client.id);

/* Comment définir un prototype ? */
// client.__proto__ = visiteur; // ❌ Ancienne façon de faire (non standard)
// Object.setPrototypeOf(client, visiteur); // ✅ Façon standard définie dans la spec ECMAScript 👍

/* Résolution de propriétés (comme la résolution de variables !) */
// console.log(client.id);

/* La chaîne de prototypes (nombre de niveaux "infini") */
// let admin = {
//   acces: "admin",
// };

// Object.setPrototypeOf(admin, client);
// console.log(admin.id);

/* "Masquage" des propriétés */
// admin.id = 3600;
// console.log(admin.id);

/* Méthodes : et this dans tout ça ? */
// visiteur.afficherId = function () {
//   console.log(`ID: ${this.id}`)
// };

// admin.afficherId();

/* "Masquage" des méthodes (puisque ce sont des propriétés) */
// admin.afficherId = function() { console.log("Méthode de l'admin !"); };
// admin.afficherId();

/* Intérêt : exploiter des propriétés et comportements en "cascade" : héritage ! */
// client.afficherIban = function () {
//   console.log(`IBAN: ${this.iban}`)
// };

// admin.afficherIban();

/* Notion de "propriétés propres" (🇬🇧 own properties) */
// console.log(Object.keys(admin));

/* 🚨 for...in boucle sur les propriétés héritées */
// for (let propriete in admin) {
//   console.log(propriete);
// }

/* Si on ne veut que les propriétés propres */
// for (let propriete in admin) {
//   if(admin.hasOwnProperty(propriete)) {
//     console.log("Propriété propre:", propriete);
//   } else {
//     console.log("Propriété héritée:", propriete);
//   }
// }

/* Object.prototype est le prototype par défaut */

/* Affichage dans VSCode peut être trompeur : il n'existe toujours qu'un SEUL prototype */
// let tableau = [];
// console.log(tableau);

// console.log(Array.prototype);
