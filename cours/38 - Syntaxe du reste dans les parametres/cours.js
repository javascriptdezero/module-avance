/* La syntaxe du reste dans les paramètres */

// Fonction variadique : nombre de paramètres variable
let resultat = Math.max(42, 12, 10, 34);
console.log(resultat);

// Comment est créée la méthode max() de Math ?

/* Objectif : créer une fonction maximum qui prend un nombre de paramètres variable et renvoie la valeur maximale de ceux-ci */

/* Ancienne façon de faire : l'objet spécial "arguments" */
// function maximum() {
//   console.log(arguments); // Itérable & "array-like" (length + index)
  
//   let resultat = Number.NEGATIVE_INFINITY;

//   for (let arg of arguments) {
//     if (arg > resultat) {
//       resultat = arg;
//     }
//   }

//   return resultat;
// }
// console.log(maximum(42, 12, 10, 34));

/* Façon moderne : le paramètre du reste "..." */
// function maximum(...parametres) {
//   let resultat = Number.NEGATIVE_INFINITY;
//   for (let arg of parametres) {
//     if (arg > resultat) {
//       resultat = arg;
//     }
//   }
//   return resultat;
// }
// console.log(maximum(42, 12, 10, 34));

/* 🚨 Le reste doit toujours être à la fin */
// function maximum(debut, ...milieu, fin) {
//   // Code
// }
// console.log(maximum(1, 2, 3, 4));

/* Avantages syntaxe du reste dans les paramètres "..." VS arguments
✅ On manipule un tableau (dont on a accès à toutes les méthodes modernes dessus)
✅ On peut ne capturer qu'une partie des paramètres si on le souhaite
*/