/* L'opérateur spread "..." */

// Introduit dans ES6

/* La syntaxe de l'opérateur spread "..." */
let identite = ["Tom", "Redocemia", 35];
let personne = [...identite, "Développeur", "Grenoble", 38000];
console.log(personne);

/* Exemples d'utilité */

// Copie d'un tableau
let original = [1, 2, 3, 4];
let copie = [...original];
copie[0] = 42;
// console.log(original, copie);

// Math.max() sur un tableau
let nombres = [1, 62, 18, 31, 4];
let maximum = Math.max(...nombres);
// console.log(maximum);

// Math.max() sur plusieurs tableaux
let serie1 = [12, 25, 736, 89];
let serie2 = [6, 27, 789, 476];
// console.log(Math.max(...serie1, ...serie2));

// Combinaison avec d'autres nombres
// console.log(Math.max(...serie1, 13, 56, 652, 5273, ...serie2));

// Combinaison de tableaux entre eux
let serieComplete = [...serie1, ...serie2];
// console.log(serieComplete);

/* Concept sous-jacent : les itérables (encore eux) ! */
let chaine = "bonjour";
// console.log(...chaine);
// console.log([...chaine]);
// console.log(Array.from(chaine));

// Exemple avec un dictionnaire
let dictionnaire = new Map();
dictionnaire.set("un", 1);
dictionnaire.set("deux", 2);
// console.log(...dictionnaire);

// Exemple avec notre itérable semaine !
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
// console.log(...semaine);

/* On peut aussi le faire avec des objets depuis ES2018 ! */
let objetIdentite = {
  prenom: "Tom",
  nom: "Redocemia",
  age: 35,
};
let objetPersonne = { ...objetIdentite, metier: "Développeur", ville: "Grenoble" };
// console.log(objetPersonne);

/* 🚨 Deep copy VS Shallow copy (Copie profonde VS copie superficielle) */
let objetComplexe = {
  prenom: "Tom",
  adresse: {
    ville: "Grenoble",
    codePostal: 38000,
  },
};
let copieSuperficielle = { ... objetComplexe };
// objetComplexe.adresse.ville = "Paris";
// console.log(JSON.stringify(copieSuperficielle));

/* La dernière valeur à l'ascendant sur les autres */
let tom = { prenom: "Tom", nom: "Redocemia" };
let jean = { prenom: "Jean" };
let dupont = { ...tom, ...jean };
// console.log(dupont);

// On reverra l'opérateur spread et la syntaxe du reste "..." dans la prochaine section sur les fonctions !