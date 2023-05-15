/* La décomposition dans les paramètres d'une fonction */

let personne = {
  prenom: "Tom",
  nom: "Redocemia",
  age: 42,
  adresse: {
    ville: "Grenoble",
    rue: "1337 Rue du code",
    codePostal: 38000,
  },
};

/* Objectif: créer une fonction qui affiche l'identité d'une personne avec la structure suivante :
<prenom> <nom> (<age> ans)
Domicile : <rue>, <codePostal> <ville>

Exemple :
Tom Redocemia (42 ans)
Domicile : 1337 Rue du code, 38000 Grenoble
*/

/* Liste de paramètres */
function afficherPersonneParams(prenom, nom, age, ville, rue, codePostal) {
  console.log(`${prenom} ${nom} (${age} ans)`);
  console.log(`Domicile : ${rue}, ${codePostal} ${ville}`);
}

// afficherPersonneParams(personne.prenom, personne.nom, personne.age, personne.adresse.ville, personne.adresse.rue, personne.adresse.codePostal);

/* Avantages et inconvénients :
✅ Écriture concise et lisible dans le corps de la fonction
✅ Possibilité d'utiliser des valeurs par défaut pour chaque paramètre
❌ Appel de fonction très long, très répétitif
❌ Il ne faut pas se tromper dans l'ordre des paramètres
*/

/* Utilisation de l'objet directement en paramètre */
function afficherPersonneObjet(personne) {
  console.log(`${personne.prenom} ${personne.nom} (${personne.age} ans)`);
  console.log(`Domicile : ${personne.adresse.rue}, ${personne.adresse.codePostal} ${personne.adresse.ville}`);
}

// afficherPersonneObjet(personne);

/* Avantages et inconvénients :
✅ Appel de fonction très concis
✅ Impossible de se tromper dans l'ordre des paramètres
❌ Écriture moins lisible avec beaucoup de répétitions dans le corps de la fonction
❌ Impossible d'utiliser des valeurs par défaut pour chaque paramètre
*/

/* Utilisation de la décomposition dans les paramètres */
function afficherPersonne({ prenom, nom, age, adresse: { rue, ville, codePostal } }) {
  console.log(`${prenom} ${nom} (${age} ans)`);
  console.log(`Domicile : ${rue}, ${codePostal} ${ville}`);
}

// afficherPersonne(personne);

/* Avantages et inconvénients :
✅ Appel de fonction très concis
✅ Impossible de se tromper dans l'ordre des paramètres
✅ Écriture concise et lisible dans le corps de la fonction
✅ Possibilité d'utiliser des valeurs par défaut pour chaque paramètre
✅ Possibilité de renommer n'importe quelle propriété facilement
*/

/* Ça marche de la même façon avec tous les itérateurs (tableaux, dictionnaires, etc.) ! */
let nombres = [1,2,3];
function afficher123([un, deux, trois]) {
  console.log(un, deux, trois);
}
// afficher123(nombres);

// Et avec notre itérateur personnalisé semaine aussi bien sûr
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

function afficherJoursSemaine([ lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche ]) {
  console.log(lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche);
}
// afficherJoursSemaine(semaine);