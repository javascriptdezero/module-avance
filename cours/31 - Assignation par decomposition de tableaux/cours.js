/* Assignation par décomposition de tableaux (Array destructuring assignment) */

/* Introduit dans ES6 */
// Sucre syntaxique = pour nous faciliter la vie !

/* Exemple 1 : stocker des éléments dans des variables */
let personne = ["Tom", "Redocemia", "35"];

// Sans décomposition
// let prenom = personne[0];
// let nom = personne[1];
// let age = personne[2];
// console.log(prenom, nom, age);

// Avec décomposition
// let [prenom, nom, age] = personne;
// console.log(prenom, nom, age);

/* Avant de continuer */
// Les variables peuvent être déclarées en amont
// let prenom = "Jean";
// let nom;
// let age;
// [prenom, nom, age] = personne;
// console.log(prenom, nom, age);

// La valeur peut être toute expression JavaScript retournant un tableau
// function tableauPersonne(prenom) {
//   return [prenom, "Redocemia", "35"];
// }
// let [prenom, nom, age] = tableauPersonne("Tom");
// console.log(prenom, nom, age);

// let [prenom, nom, age] = "Jean Dupont 42".split(' ');
// console.log(prenom, nom, age);

// 💡 Pour la suite, je n'utiliserai que des tableaux et de nouvelles variables pour rendre les exemples compacts

/* Exemple 2 : on peut ignorer les derniers éléments */
// let [prenom] = ["Tom", "Redocemia", "35"]; // Pas d'erreur
// console.log(prenom);

/* Exemple 3 : on peut ignorer un ou plusieurs éléments */
// let [prenom, , age] = ["Tom", "Redocemia", "35"]; // Pas d'erreur
// console.log(prenom, age);

/* Exemple 4 : et si on a plus de valeurs que de variables ? */
// Syntaxe de récupération du "reste" grâce aux "..."
// let [prenom, nom, age, ...autresInfos] = ["Tom", "Redocemia", "35", "Développeur", "Habite à Grenoble"];
// console.log(autresInfos);

/* Exemple 5 : et si on a moins de valeurs que de variables ? */
// let [prenom, nom, age] = ["Tom", "Redocemia"];
// console.log(prenom, nom, age);

/* Exemple 6 : on peut stocker dans tout ce qu'on veut ! */
// let tom = {};
// [tom.prenom, tom.nom, tom.age] = ["Tom", "Redocemia", "35"];
// console.log(tom);

/* Exemple 7 : on peut même décomposer dans une décomposition
=> Décomposition imbriquée (nested destructuring) */
// let [prenom, nom, age, [codePostal, ville]] = ["Tom", "Redocemia", "35", [38000, "Grenoble"]];
// console.log(prenom, nom, age, codePostal, ville);

/* 🏆 Challenge : intervertir 2 variables */
let prenomTom = "Jean";
let prenomJean = "Tom";
// Objectif : obtenir prenomJean = "Jean" et prenomTom = "Tom"
// en n'utilisant que les noms de variables / leur contenu
// Interdiction de faire prenomTom = "Tom"


// Solution plus bas ⬇️







// Sans la décomposition
// let temporaire = prenomTom;
// prenomTom = prenomJean;
// prenomJean = temporaire;
// console.log(prenomTom, prenomJean);

// Avec la décomposition
// [prenomJean, prenomTom] = [prenomTom, prenomJean];
// console.log(prenomTom, prenomJean);

/* Exemple 8 : valeurs par défaut */
// let [prenom, nom, age = "inconnu"] = ["Tom", "Redocemia"];
// console.log(prenom, nom, age);

// let [prenom = "Jean", nom, age = "inconnu"] = ["Tom", "Redocemia"];
// console.log(prenom, nom, age);

// Une valeur par défaut peut être n'importe quelle expression JavaScript
// function valeurDefaut(id) {
//   console.log("Calcul de la valeur par défaut");
//   return "id_" + id;
// }
// let [prenom, nom, age, id = valeurDefaut("4eaEr")] = ["Tom", "Redocemia", "35"];
// console.log(prenom, nom, age, id);

/* Prochaine leçon : décomposition et itérateurs ! */