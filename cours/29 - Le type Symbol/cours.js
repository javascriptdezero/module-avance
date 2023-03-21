/* Le type Symbol (Symbole) */

/* Avant de commencer */

/* Introduit dans ES6 */
// Nouveau type de données qui représente un identifiant UNIQUE que l'on peut utiliser comme un nom de propriété dans un objet

// RAPPEL : les noms de propriétés d'objets sont toujours des chaînes de caractères
let carton = {
  id: "id de mon carton",
  10: "dix",
  [23 * 2]: "quarante-six",
};
console.log(carton);
carton[10] = "onze";
console.log(carton[10], carton["10"]);
carton["10"] = "douze";
console.log(carton[10], carton["10"]);
carton[46] = "quarante-sept";
console.log(carton[46], carton["46"]);
carton["46"] = "quarante-huit";
console.log(carton[46], carton["46"]);
// Même avec un booléen !
// carton[false] = "booléen ? Non chaîne !";
// console.log(carton[false], carton["false"]);
// carton["false"] = "C'est bien une chaîne";
// console.log(carton[false], carton["false"]);

/* Comment utiliser les symboles ? */

// Création d'un symbole, la description est optionnelle
// let unSymbole = Symbol();
// let monSymbole = Symbol("mon symbole");
// carton[monSymbole] = "valeur de monSymbole";
// console.log(carton[monSymbole], `(typeof monSymbole: ${typeof monSymbole})`);
// console.log(monSymbole.description); // Accès à la description

// Attention TOUS les symboles sont différents, la description c'est pour déboguer, rien de plus
// let symbole1 = Symbol("symbole");
// let symbole2 = Symbol("symbole");
// console.log(symbole1 === symbole2);

/* À quoi servent les symboles ? */
// Les symboles permettent de "cacher" des propriétés et d'éviter les collisions avec d'autres propriétés déjà existantes...

// Risque d'écrasement de propriété (code du framework)
// carton["id"] = "id du framework pour le carton";

// Aucun risque d'écrasement (code du framework)
// let id = Symbol("id framework");
// carton[id] = "id du framework pour le carton";
// console.log(carton);

// Attention c'est différent de la propriété (chaîne) qui s'appelle "id" !
// console.log(carton.id, carton["id"]);
// carton.id = "id de mon côté";
// console.log(carton.id, carton["id"]);
// carton["id"] = "toujours id de mon côté";
// console.log(carton.id, carton["id"]);

// Les symboles restent "invisibles" dans les boucles for...in et avec Object.keys()...
// for (let propriete in carton) {
//   console.log(propriete);
// }
// console.log(Object.keys(carton));
// console.log("--");
// console.log(carton[id]);

// ... mais visibles avec une méthode bien spéficique
// console.log(Object.getOwnPropertySymbols(carton));

/* Par défaut, un symbole est "caché". Il est possible de le partager via le global Symbol registry (registre des symboles global) */

// Création d'un symbole partagé
// let partage = Symbol.for("identifiant"); // Attention ce n'est pas une description ici !
// console.log(Symbol.keyFor(partage));

// Le symbole partage est retourné si on tente de créer un nouveau symbole avec la même clé
// let partage2 = Symbol.for("identifiant");
// console.log(partage === partage2);

/* Pourquoi vouloir partager un symbole ? */
// On va le voir dans les prochaines leçons sur les itérateurs !