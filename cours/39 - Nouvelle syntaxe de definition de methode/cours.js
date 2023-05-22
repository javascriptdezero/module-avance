/* Nouvelle syntaxe de définition d'une méthode */

// Mot-clé this : on en avait parlé dans la leçon "Les méthodes : des fonctions dans des objets" du module intermédiaire

/* Rappel : une méthode est une fonction définie dans la propriété d'un objet */
let personne = {
  prenom: "Tom",
  nom: "Redocemia",
  age: 42,
  modifierNom: function(nouveauNom) {
    this.nom = nouveauNom;
  },
  saluer: function() {
    console.log(`Bonjour, je m'appelle ${this.prenom} ${this.nom} et j'ai ${this.age} ans`);
  },
};

personne.modifierNom("Sawyer");
personne.saluer();

/* Nouvelle syntaxe ES6 pour déclarer une méthode dans un objet */
// let personne = {
//   prenom: "Tom",
//   nom: "Redocemia",
//   age: 42,
//   modifierNom(nouveauNom) {
//     this.nom = nouveauNom;
//   },
//   saluer() {
//     console.log(`Bonjour, je m'appelle ${this.prenom} ${this.nom} et j'ai ${this.age} ans`);
//   },
// };

// personne.modifierNom("Sawyer");
// personne.saluer();