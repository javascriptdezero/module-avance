/* Les itérables et itérateurs */

/* Avant de commencer */

/* Introduit dans ES6 */

/* Les itérables */
// Un itérable est un objet sur lequel on peut itérer à l'aide de la boucle for ... of
// Exemples : Array, String, Set, Map

let tableau = ["un", "deux", "trois"];
for (let valeur of tableau) {
  console.log(valeur);
}

let chaine = "bonjour";
for (let caractere of chaine) {
  console.log(caractere);
}

let ensemble = new Set([1, 2, 3]);
for (let valeur of ensemble) {
  console.log(valeur);
}

let dictionnaire = new Map();
dictionnaire.set("un", 1);
dictionnaire.set("deux", 2);
for (let valeur of dictionnaire) {
  console.log(valeur);
}

/* Comment créer son propre objet itérable ? */
// Il faut implémenter la méthode Symbol.iterator (notée @@iterator dans le MDN)
// Cf. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/

// Qu'est-ce que c'est que ce "Symbol.iterator" ?
/* Dans l'interpréteur JavaScript :
Symbol = {
  iterator: Symbol()
}
==> Symbol.iterator

L'interpréteur va appeler la méthode comme ceci : objet[Symbol.iterator]()
*/

let semaine = {
  // Implémentation de la méthode Symbol.iterator : on respecte le protocole itérateur
  [Symbol.iterator]: function () {
    // On retourne l'itérateur (objet possédant une méthode next())
    return {
      position: 0,
      noms: ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"],
      next: function () {
        let nom = this.noms[this.position];
        if (nom === undefined) {
          return { done: true }; // C'est fini !
        }
        this.position++;
        return { done: false, value: nom }; // Valeur suivante de l'itération
      }
    }
  }
};

/* Comment ça fonctionne ?
1. L'interpréteur appelle la méthode Symbol.iterator : semaine[Symbol.iterator]()
2. Il récupère de cet appel un itérateur possédant une méthode next(), appelons-le "it"
3. À chaque itération il appelle la méthode it.next() pour récupérer l'objet de résultat { done: ..., value: ... }
4. Si done est à false, c'est qu'on a une valeur disponible, on la stocke dans la variable jour
5. On exécute la boucle for et on repart à l'étape 3
6. Quand done: vaut true, on arrête la boucle */
// for (let jour of semaine) {
//   console.log(jour);
// }

/* Avec un appel explicite */
// let iterateur = semaine[Symbol.iterator]();
// for (let resultat = iterateur.next(); !resultat.done; resultat = iterateur.next()) {
//   console.log(resultat.value);
// }

/* Construire un tableau à partir d'un itérable */
// let tableauSemaine = Array.from(semaine);
// console.log(tableauSemaine);
// debugger;

/* Ce qu'il faut retenir */
// Itérable (Iterable) : objet qui implémente la méthode Symbol.iterator (@@iterator dans la doc MDN) et sur lequel on peut itérer avec une boucle for ... of
// Itérateur (Iterator) : objet retourné par un itérable et possédant la méthode next(), celle-ci renverra à chaque appel un objet { done: true|false, value: X }