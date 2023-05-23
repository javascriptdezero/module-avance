/* Le mot-clé this */

/* this = contexte d'exécution 
Sa valeur dépend de la façon dont on invoque la fonction */

/* Dans une fonction simple */
function saluer() {
  console.log(this);
  console.log(this === global);
}

/* Appel classique : this === contexte global d'exécution */

// NodeJS => global
saluer();

// Dans le navigateur => window
// Démo dans le navigateur

/* Nouveauté ES2020 : globalThis */
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/globalThis

/* Appel via un objet (méthode) => this === l'objet ! */
// let personne = {
//   prenom: "Tom",
//   nom: "Redocemia",
//   age: 42,
//   saluer() {
//     console.log(`Bonjour, je suis ${this.prenom} ${this.nom}, j'ai ${this.age} ans`);
//   }
// }
// personne.saluer();
// personne["saluer"]();

/* Appel direct de la fonction => this === contexte global d'exécution */
// let fonctionSaluer = personne.saluer;
// fonctionSaluer();

/* Quel intérêt d'utiliser this ? */
// let autrePersonne = {
//   prenom: "Tom",
//   nom: "Sawyer",
//   age: 16,
// };

// autrePersonne.saluer = fonctionSaluer;
// autrePersonne.saluer();

/* On peut même déclarer la fonction en dehors de l'objet */
// function saluer() {
//   console.log(`Bonjour, je suis ${this.prenom} ${this.nom}, j'ai ${this.age} ans`);
// }
// autrePersonne.saluer = saluer;
// autrePersonne.saluer();

/* La valeur de this n'est pas modifiable */
// function test() {
//   this = { test: "test" };
// }
// test();

/* Challenge : fonction imbriquée */
// let personne = {
//   prenom: "Tom",
//   nom: "Redocemia",
//   age: 42,
// }

// function identite() {
//   console.log(`Voici mon identité : ${this.prenom} ${this.nom}`);

//   function calculerAgeEnJours() {
//     return this.age * 365;
//   }

//   console.log(`J'ai ${this.age} ans soit ${calculerAgeEnJours()} jours !`);
// }

// personne.identite = identite;
// personne.identite();

/* Ce qu'il faut retenir
- la valeur de this est assignée lors de l'exécution
- on ne peut pas changer la valeur de this
- le this n'est pas hérité de la portée parente (puisqu'assigné lors de l'exécution !)
*/