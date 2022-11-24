/* La méthode map() */

let tableau = ["zero", "un", "deux", "trois"];

/* Une fonction de transformation introduite depuis ES5 ! */
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// Fonction de callback : function (valeur, index, tableau)

/* Transformer des chaînes en leur longueur */
function longueurChaine(chaine) {
  return chaine.length;
}

/*
  tableau ===> transformation via map() ===>    resultat
[                                                [   
  "zero", ===> callback("zero", 0, tableau)  ===>  4,
  "un",   ===> callback("un", 1, tableau)    ===>  2,
  "deux", ===> callback("deux", 2, tableau)  ===>  4,
  "trois" ===> callback("trois", 3, tableau) ===>  5,
]                                                ]
*/

let resultat = tableau.map(longueurChaine);
console.log(resultat);

/* Un NOUVEAU tableau est créé ! */
// console.log(tableau, resultat);

/* Avec une fonction anonyme */
// Extraire les N (= index) premiers caractères d'une chaîne
// resultat = tableau.map(function(chaine, index) {
//   return chaine.slice(0, index);
// });
// console.log(resultat);

/* Extraire les noms de domaines en majuscules d'adresses emails */
// let emails = [
//   "tom.redocemia@gmail.com",
//   "oncle.bob@protonmail.com",
//   "jean.claude@dusse.com",
// ];

// let domaines = emails.map(function(email) {
//   let nomDomaine = email.split('@')[1];
//   return nomDomaine.toUpperCase();
// });
// console.log(domaines);

/* Somme des valeurs adjacentes valeur[i] += valeur[i + 1] */
// let nombres = [1, 2, 3, 4, 5];
// resultat = nombres.map(function(nombre, index, tab) {
//   let somme = nombre;
//   if (index < tab.length - 1) {
//     somme += tab[index + 1];
//   }
//   return somme;
// });
// console.log(resultat);