/* Décomposition et itérateurs */

// Que mettre à droite de l'assignation ?
let personne = ["Tom", "Redocemia", "35"];
let [prenom, nom, age] = personne;

/* Concept sous-jacent de la décomposition : les itérables ! */
// let [x, y, z] = <itérable>;

// Itérables : Array, String, Set, Map

/* Assignation par décomposition avec le type String */
// let [premiere, deuxieme, troisieme] = "bonjour";
// console.log(premiere, deuxieme, troisieme);

/* 🏆 Challenge : mettre la 1ère lettre en majuscule */
let [] = "bonjour";
console.log(); // => "Bonjour"
// Objectif : utiliser la décomposition pour extraire la lettre initiale du mot "bonjour" et la syntaxe du reste "..." pour extraire les prochaines lettres "onjour" dans un tableau.


// Solution plus bas ⬇️





// Une solution possible
// let [initiale, ...reste] = "bonjour";
// initiale = initiale.toUpperCase();
// reste = reste.join('');
// console.log(initiale + reste);

/* Autre exemple avec le type Set (ensemble) */
let ensemble = new Set(["un", "deux", "un", "deux"]);
// let [un, deux, trois] = ensemble;
// console.log(un, deux, trois);

/* Autre exemple avec le type Map (dictionnaire) */
let dictionnaire = new Map([["premier", 1], ["deuxieme", 2]]);
// let [un, deux] = dictionnaire;
// console.log(un, deux);

/* Rappel for...of sur un itérable */
// let listeMots = ["bonjour", "monsieur", "redocemia"];
// for (let mot of listeMots) {
//   console.log(mot);
// }

/* Assignation par décomposition dans une boucle for...of */
// for (let [initiale, ...reste] of listeMots) {
//   console.log(initiale.toUpperCase() + reste.join(''));
// }

/* Assignation par décomposition avec un type Map */
// for (let [cle, valeur] of dictionnaire.entries()) {
//   console.log(cle, valeur);
// }

/* Assignation par décomposition avec Object.entries() */
// let objet = {
//   prenom: "Tom",
//   nom: "Redocemia",
// };
// for (let [cle, valeur] of Object.entries(objet)) {
//   console.log(cle, valeur);
// }

/* Avec l'objet semaine créé dans une leçon précédente */
let semaine = {
  // Implémentation de la méthode Symbol.iterator : on respecte le protocole itérateur
  [Symbol.iterator]: function () {
    // On retourne l'itérateur (objet possédant une méthode next())
    return {
      position: 0,
      noms: ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"],
      next: function () {
        let nom = this.noms[this.position];
        if (nom === undefined) {
          return { done: true }; // C'est fini !
        }
        this.position++;
        return { done: false, value: nom }; // Valeur suivante de l'itération
      }
    }
  }
};

/* Assignation par décomposition d'un itérable personnalisé */
// let [lundi, mardi] = semaine;
// console.log(lundi, mardi);

/* Dans une boucle for...of */
// for (let [initiale, ...reste] of semaine) {
//   console.log(initiale.toUpperCase() + reste.join(''));
// }