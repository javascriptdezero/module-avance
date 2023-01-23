/* La méthode at() */

let tableau = ["zero", "un", "deux", "trois"];
let chaine = "JavaScript";

/* Méthode introduite en Juin 2022 depuis ES2022
https://caniuse.com/?search=Array.prototype.at

Permet l'indexation négative sur les tableaux et chaînes de caractères */

// AVANT : Obtenir le dernier élément d'un tableau
console.log(tableau[tableau.length - 1]);
// APRES : Obtenir le dernier élément d'un tableau
console.log(tableau.at(-1));

// AVANT: Obtenir la dernière lettre d'une chaîne
console.log(chaine[chaine.length - 1]);
// APRES: Obtenir la dernière lettre d'une chaîne
console.log(chaine.at(-1));

/* L'index peut être n'importe quelle valeur */
console.log(tableau.at(-3));
console.log(chaine.at(-3));

/* Et si on dépasse ? => undefined (comme pour les indices > 0 !)*/
console.log(tableau.at(-10));
console.log(chaine.at(-20));

/* L'indexation positive fonctionne comme d'habitude */
console.log(tableau[2]);
console.log(tableau.at(2));
console.log(chaine[2]);
console.log(chaine.at(2));

/* -0 === 0 */
console.log(tableau[0]);
console.log(tableau.at(-0));
console.log(chaine[0]);
console.log(chaine.at(-0));