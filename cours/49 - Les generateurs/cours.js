/* Les générateurs */
// 💡 Revoir la leçon sur les itérateurs (lien sous la vidéo)

/* Syntaxe de la fonction générateur */

function* generateur() {      // function *generateur également correct
  yield "première phrase";
  yield "deuxième phrase";
  return "dernière phrase";
}

let iterateur = generateur();
let premierePhrase = iterateur.next();
console.log(premierePhrase.value);
let deuxiemePhrase = iterateur.next();
console.log(deuxiemePhrase.value);
let dernierePhrase = iterateur.next();
console.log(dernierePhrase.value);

/* Les générateurs sont des itérables */
// for (let phrase of generateur()) {
//   console.log(phrase);
// }

/* Utilisation de l'opérateur spread */
// let phrases = [...generateur()];
// console.log(phrases);

/* Exemple avec notre itérateur semaine */
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

/* Remaniement en générateur */
function* joursSemaine() {
  let position = 0;
  let noms = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
  while (position < noms.length) {
    yield noms[position++];
  }
}

// for (let jour of joursSemaine()) {
//   console.log(jour);
// }

/* Générer des valeurs à l'infini */
// Nombres pairs
function* nombresPairs() {
  let nombre = 0;
  while(true) {
    yield nombre;
    nombre += 2;
  }
}

// for (let nombrePair of nombresPairs()) {
//   console.log(nombrePair);
//   if (nombrePair > 30) break;
// }

// Séquence de Fibonacci
function* fibonacci() {
  let precedent = 0;
  let actuel = 1;
  while(true) {
    yield actuel;
    [precedent, actuel] = [actuel, precedent + actuel];
  }
}

// for (let nombre of fibonacci()) {
//   console.log(nombre);
//   if (nombre > 30) break;
// }

/* Avantages d'utiliser les générateurs:
- Économie de mémoire : pas besoin de générer les valeurs avant leur utilisation, on les génère à la demande uniquement
- Exploitation de grandes quantités de données par petits morceaux
- Écriture d'itérables facilitée
*/