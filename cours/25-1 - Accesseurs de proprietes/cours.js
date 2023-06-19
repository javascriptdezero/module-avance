/* Les accesseurs de propriétés (🇬🇧 Getters et Setters) */

/* Getter (accès en lecture seule) */
let personne = {
  valeur: 42,
  get age() { return this.valeur; },
};

console.log(personne.age);
personne.age = 14; // Instruction ignorée !
console.log(personne.age);

/* 🚨 Attention à la boucle infinie ! */
// let personne = {
//   age: 42,
//   get age() { return this.age; },
// };

// console.log(personne.age);

/* Exemple d'utilité */
// let monnaie = {
//   valeur: 100,
//   get valeurEnDollars() {
//     return `$${this.valeur}`;
//   },
//   get valeurEnEuros() {
//     return `${this.valeur} €`;
//   },
// }

// console.log(monnaie.valeurEnDollars, monnaie.valeurEnEuros);

/* Setter (accès en écriture seule) */
// let personne = {
//   set age(nombre) { this.valeurAge = nombre; },
// };

// personne.age = 10;
// console.log(personne.age); // undefined
// console.log(personne.valeurAge);

/* Exemple d'utilité */
// let personne = {
//   set age(nombre) {
//     if (nombre <= 0) {
//       console.log(`Veuillez entrez un âge correct positif (${nombre} <= 0 !)`);
//     } else {
//       this.valeurAge = nombre;
//     }
//   }
// }

// personne.age = 0;
// personne.age = -20;
// personne.age = 12;
// console.log(personne.age); // undefined

/* Getter et Setter (accès en lecture et écriture) */
// let personne = {
//   set age(nombre) {
//     if (nombre <= 0) {
//       console.log(`Veuillez entrez un âge correct positif (${nombre} <= 0 !)`);
//     } else {
//       this.valeurAge = nombre;
//     }
//   },
//   get age() {
//     return this.valeurAge;
//   },
//   get ageComplet() {
//     return `Cette personne a ${this.valeurAge} ans`;
//   },
// }

// personne.age = -10;
// personne.age = 42;
// console.log(personne.age); // 42
// console.log(personne.ageComplet);