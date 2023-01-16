/* Chaîner les méthodes filter(), map() et reduce() */

let tableau = ["zero", "un", "deux", "trois"];

/* Objectif : on veut compter le nombre de lettres des mots contenant la lettre 'e'
On peut découper l'algorithme en 3 partie :
1. Filtrer les mots contenant la lettre 'e' (filter)
2. Transformer ces mots en leur longueur, ex. : "deux" => 4 (map)
3. Faire la somme de toutes les longueurs (reduce)
*/

// 1. Filtrer les mots contenant la lettre 'e' (filter)
let motsAvecUnE = (tableau.filter(function(valeur) {
  return valeur.includes('e');
}));
console.log(motsAvecUnE);

// 2. Transformer ces mots en leur longueur, ex. : "deux" => 4 (map)
let longueursMotsAvecUnE = motsAvecUnE.map(function(valeur) {
  return valeur.length;
});
console.log(longueursMotsAvecUnE);

// 3. Faire la somme de toutes les longueurs (reduce)
let somme = longueursMotsAvecUnE.reduce(function(resultat, valeur) {
  return resultat + valeur;
}, 0);
console.log(somme);

/* Rappel : qu'est-ce que le chaînage de méthodes ? */
console.log("bonjour".split('').reverse().join(''));

// Même chose avec le chaînage
console.log(tableau.filter(function(valeur) {
  return valeur.includes('e');
}).map(function(valeur) {
  return valeur.length;
}).reduce(function(resultat, valeur) {
  return resultat + valeur;
}, 0));

/* Attention à l'ordre ! */

/* On peut effectuer autant de chaînages que l'on veut */
console.log(tableau.filter(function(valeur) {
  return valeur.length >= 3;
}).filter(function(valeur) {
  return valeur.includes('o');
}).map(function(valeur) {
  return valeur.length;
}).filter(function(valeur) {
  return valeur > 4;
}));

/* Bonnes pratiques :
1. On filtre pour réduire le nombre d'éléments (filter)
2. On transforme (map)
3. On combine (reduce)
*/