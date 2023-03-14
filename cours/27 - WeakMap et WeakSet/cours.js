/* Les types WeakMap et WeakSet */

/* Avant de commencer */

/* Comment ça marche ? Exemple Map VS WeakMap */

let jean = {
  prenom: "Jean",
};

let map = new Map();
map.set(jean, "DUPONT");

debugger;

jean = null;

for (let i = 0; i < 5000; i++) {
  console.log(i);
}

debugger;

/* Explications détaillées avec le schéma */
// https://excalidraw.com/#json=viIxjidTCdZWWTH2QGvbz,skqCWe4e3LAQI5wNZSmYUw

/* À quoi ça sert ? */
// Permet d'associer des valeurs à des objets sans causer de fuite mémoire
// - WeakMap : système de cache pour les calculs lourds (mémoïsation)
// - WeakMap : données associées à un objet pendant le temps de vie de cet objet
// - WeakSet : marquer des objets faisant partie d'un groupe

// Exemple WeakMap : système de cache
// let entree1 = {
//   valeur: 42
// };

// let cache = new WeakMap();
// function calculsLourds(objet) {
//   if (!cache.has(objet)) {
//     let resultat = objet.valeur * 100;
//     cache.set(objet, resultat);
//     return resultat;
//   }
//   return cache.get(objet);
// }
// debugger;
// calculsLourds(entree1);
// entree1 = null;
// for (let i = 0; i < 5000; i++) {
//   console.log(i);
// }
// debugger;

// Exemple WeakSet : qui est VIP ?
// let invite1 = {
//   prenom: "jean",
//   nom: "dupont",
// };
// let invite2 = {
//   prenom: "tom",
//   nom: "redocemia",
// }

// let vip = new Set();
// debugger;
// vip.add(invite1);
// vip.add(invite2);
// vip.add(invite2);
// vip.add(invite2);

// invite2 = null;

// for (let i = 0; i < 5000; i++) {
//   console.log(i);
// }
// debugger;

/* Différences entre Weak[Map|Set] et Map/Set

- Les clés DOIVENT être des objets JavaScript (objets, tableaux, etc., tout ce qui n'est pas un type primitif donc !)
- Il n'y a QUE les méthodes :
    - get(), set(), has(), delete() sur WeakMap
    - add(), has(), delete() sur WeakSet
- Les types Weak(Map/Set) ne sont PAS itérables (normal, leurs clés pourraient être collectées par le ramasse-miettes à n'importe quel moment !)
- Il n'existe pas de propriété size, ni les méthodes keys(), values(), forEach(), entries(), clear() pour cette même raison
*/
