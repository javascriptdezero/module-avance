/* Fonctions fléchées et this */

/* Challenges : à quoi correspond this ? 
1. Comment est appelée la fonction ?
2. Regardez ce qu'il y a à gauche du point
3. Si pas de point, this = contexte d'exécution global */

// Challenge 1
let personne = {
  prenom: "Tom",
  nom: "Redocemia",
  age: 42,
}

function ajouterSaluer(objet) {
  objet.saluer = function () {
    console.log(`Bonjour, je suis ${this.prenom} ${this.nom}, j'ai ${this.age} ans`);
  }
}

ajouterSaluer(personne);
personne.saluer();

// Challenge 2 : même chose mais avec une fonction fléchée
// let personne = {
//   prenom: "Tom",
//   nom: "Redocemia",
//   age: 42,
// }

// function ajouterSaluer(objet) {
//   objet.saluer = () => {
//     console.log(`Bonjour, je suis ${this.prenom} ${this.nom}, j'ai ${this.age} ans`);
//   }
// }

// ajouterSaluer(personne);
// personne.saluer();

// Challenge 3
// function creerPersonne(prenom, nom, age) {
//   return {
//     prenom, // Pareil que prenom: prenom
//     nom,
//     age,
//     saluer() { // Pareil que saluer: function () { ... }
//       console.log(`Bonjour, je suis ${this.prenom} ${this.nom}, j'ai ${this.age} ans`);
//     }
//   }
// }

// let tom = creerPersonne("Tom", "Redocemia", 42);
// tom.saluer();

// Challenge 4 : même chose avec une fonction fléchée
// function creerPersonne(prenom, nom, age) {
//   return {
//     prenom,
//     nom,
//     age,
//     saluer: () => { // Fonction fléchée
//       console.log(`Bonjour, je suis ${this.prenom} ${this.nom}, j'ai ${this.age} ans`);
//     }
//   }
// }

// let tom = creerPersonne("Tom", "Redocemia", 42);
// tom.saluer();

// Challenge 5
// function creerCouple(prenomH, prenomF) {
//   return {
//     mari: {
//       prenom: prenomH,
//       saluer() {
//         console.log(`Bonjour, je suis ${this.prenom}`);
//       }
//     },
//     femme: {
//       prenom: prenomF,
//       saluer() {
//         console.log(`Bonjour, je suis ${this.prenom}`);
//       }
//     }
//   }
// }

// let couple = creerCouple("Tom", "Sophie");
// couple.mari.saluer();
// couple.femme.saluer();

// Challenge 5 : même chose avec une fonction fléchée
// function creerCouple(prenomH, prenomF) {
//   return {
//     mari: {
//       prenom: prenomH,
//       saluer: () => {
//         console.log(`Bonjour, je suis ${this.prenom}`);
//       }
//     },
//     femme: {
//       prenom: prenomF,
//       saluer: () => {
//         console.log(`Bonjour, je suis ${this.prenom}`);
//       }
//     }
//   }
// }

// let couple = creerCouple("Tom", "Sophie");
// couple.mari.saluer();
// couple.femme.saluer();