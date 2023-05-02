/* Assignation par décomposition d'objets */

let personne = {
  prenom: "Tom",
  nom: "Redocemia",
  age: 35
};

// let { age, prenom, nom } = personne;
// console.log(prenom, nom, age);

/* On peut utiliser un objet anonyme bien sûr */
// let { age, prenom, nom } = { prenom: "Jean", nom: "Dupont", age: 42 };
// console.log(prenom, nom, age);

/* Utiliser un autre nom pour les variables */
// { <nom de la propriété (source)>: <nom de la variable à créer (destination)> }
// { valeur ==> variable } { source ==> destination }
// let { age: ageEnAnnees, prenom } = personne;
// console.log(prenom, ageEnAnnees);

/* Valeurs par défaut (fonctionne comme pour les tableaux, donc on peut utiliser
toute expression JavaScript dont les appels de fonctions etc. */
// let { ville, age, prenom, nom } = personne;
// let { ville = "inconnue", age, prenom, nom } = personne;
// console.log(prenom, nom, age, ville);

/* On peut utiliser les valeurs par défaut avec d'autres noms de variables */
// let { age: ageEnAnnees = "inconnu" } = personne;
// console.log(ageEnAnnees);

/* La syntaxe pour obtenir le reste "..." (même principe que pour les tableaux !) */
// let { prenom, ...reste } = personne;
// console.log(prenom, reste);

/* 🚨 Utilisation de variables déjà existantes à gauche */
// let prenom;
// { prenom } = personne; // Erreur !
// console.log(prenom);

/* Décomposition imbriquée */
// let identite = {
//   prenom: "Tom",
//   nom: "Redocemia",
//   adresse: {
//     ville: "Grenoble",
//     codePostal: 38000,
//     rue: "Rue du code source",
//   },
// };

// let { prenom, adresse: { ville } } = identite;
// console.log(prenom, ville); // 🚨 Pas de variable adresse
