/* Nouveautés ES6 sur les objets */

/* Valeur de propriété abrégée (Shorthand properties) */

let age = 42;
let personne = {
  age: age, // On peut abréger ici
  prenom: "Jean",
};

console.log(personne);

/* Nom de propriété calculé | Propriété dynamique (Computed properties) */

// Comment créer une propriété dans un objet dont le nom n'est pas connu à l'avance ?
// cf file:///./index.html

// Ça fonctionne avec n'importe quelle expression JavaScript bien sûr !
function idProduit(id) {
  return "id_" + id;
}

const numero = 24352;

let contenu = {
  ["id_" + numero]: 5,
  [idProduit("ca4f5")]: 12,
};

// console.log(contenu);