/* call(), apply() et bind() */

/* Comment appliquer une fonction (comportement) à différents objets ? */
let personne = {
  prenom: "Tom",
  nom: "Redocemia",
  age: 42,
  adresse: "32 rue du code source",
  saluer() {
    console.log(`Bonjour, je m'appelle ${this.prenom} et j'ai ${this.age} ans`);
  }
};

let chien = {
  prenom: "Woofy",
  age: 4,
  race: "Labrador",
  saluer() {
    console.log(`Bonjour, je m'appelle ${this.prenom} et j'ai ${this.age} ans`);
  }
};

personne.saluer();
chien.saluer();

/* Inconvénients :
- Duplication de code
- Difficulté de maintenance
*/

/* Solution : utiliser call() */
// let personne = {
//   prenom: "Tom",
//   nom: "Redocemia",
//   age: 42,
//   adresse: "32 rue du code source",
// };

// let chien = {
//   prenom: "Woofy",
//   age: 4,
//   race: "Labrador",
// };

// function saluer() {
//   console.log(`Bonjour, je m'appelle ${this.prenom} et j'ai ${this.age} ans`);
// }

// saluer.call(personne);
// saluer.call(chien);

/* Et avec des paramètres ? */
// let personne = {
//   prenom: "Tom",
//   nom: "Redocemia",
//   age: 42,
//   adresse: "32 rue du code source",
// };

// let chien = {
//   prenom: "Woofy",
//   age: 4,
//   race: "Labrador",
// };

// function saluer(salutation, interlocuteur) {
//   console.log(`${salutation} ${interlocuteur}, je m'appelle ${this.prenom} et j'ai ${this.age} ans`);
// }

// saluer.call(personne, "Bonjour", "Bob");
// saluer.call(chien, "Salut", "Waaf");

/* Même chose mais avec un tableau en argument : apply() */
// let personne = {
//   prenom: "Tom",
//   nom: "Redocemia",
//   age: 42,
//   adresse: "32 rue du code source",
// };

// let chien = {
//   prenom: "Woofy",
//   age: 4,
//   race: "Labrador",
// };

// function saluer(salutation, interlocuteur) {
//   console.log(`${salutation} ${interlocuteur}, je m'appelle ${this.prenom} et j'ai ${this.age} ans`);
// }

// saluer.apply(personne, ["Bonjour", "Bob"]);
// saluer.apply(chien, ["Salut", "Waaf"]);

/* Un lien permanent avec this : bind() */
// let personne = {
//   prenom: "Tom",
//   nom: "Redocemia",
//   age: 42,
//   adresse: "32 rue du code source",
// };

// let chien = {
//   prenom: "Woofy",
//   age: 4,
//   race: "Labrador",
// };

// function saluer(salutation, interlocuteur) {
//   console.log(`${salutation} ${interlocuteur}, je m'appelle ${this.prenom} et j'ai ${this.age} ans`);
// }

// let personneSaluer = saluer.bind(personne, "Bonjour", "Bob");
// let chienSaluer = saluer.bind(chien, "Salut", "Waaf");
// personneSaluer();
// chienSaluer();

/* Lien définitif, peu importe comment on l'appelle ! */
// chien.autreMethode = personneSaluer;
// chien.autreMethode();

/* Et si le nombre de paramètres est différent ? */
// let saluerAvecSalut = saluer.bind(chien, "Salut");
// saluerAvecSalut("Bob");

/* La perte du "this" avec setTimeout */
// let personne = {
//   prenom: "Tom",
//   age: 42,
//   saluer() {
//     console.log(`Bonjour, je m'appelle ${this.prenom} et j'ai ${this.age} ans`);
//   }
// };

// setTimeout(personne.saluer, 1000);

/* Exploiter différemment les fonctions déjà existantes de JavaScript */
// let nombres = [1, 2, 4, 3, 8, 0];
// console.log(Math.max(1, 2, 4, 3, 8, 0));
// console.log(Math.max(...nombres));
// console.log(Math.max.apply(null, nombres));

/* Fonctions partielles (peu utilisé) : fixer les arguments d'appel à une fonction */
// function multiplication(a, b) {
//   return a * b;
// }

// let double = multiplication.bind(null, 2);
// console.log(double(8));

// let triple = multiplication.bind(null, 3);
// console.log(triple(5));

/* Ce qu'il faut retenir 
- call(), apply() et bind() permettent d'utiliser une fonction comme si c'était une méthode d'un objet particulier. On passe la référence vers l'objet en renseignant le "thisArg".
- call() & apply() sont très similaires, call() prend une liste d'arguments et apply() un tableau ou un objet de type array-like
- bind() est particulière dans le sens où elle renvoie une fonction avec un contexte définitif (une liaison définitive du "this" et éventuellement des arguments)
- 💡 Moyen mnémotechnique apply === array, même nombre de lettres, même lettre du début et de fin et même double consonne !
*/

