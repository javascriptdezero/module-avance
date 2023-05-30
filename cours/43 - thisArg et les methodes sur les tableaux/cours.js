/* thisArg et les méthodes sur les tableaux */

/* Exemple avec forEach */
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

let ecole = {
  nom: "Ecole du code",
  adresse: "21 rue du code source",
  listerEleves: function (liste) {
    liste.forEach(function (eleve) {
      console.log(`${this.nom}: ${eleve.prenom}`);
    });
  }
}

ecole.listerEleves([
  { prenom: "Tom" },
  { prenom: "Sophie" },
  { prenom: "Jean" },
  { prenom: "Marc" },
]);

/* Valable sur toutes les méthodes acceptant thisArg !
- map(), filter(), reduce(), find() etc. */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// let ecole = {
//   nom: "Ecole du code",
//   adresse: "21 rue du code source",
//   elevesAvecNomEcole: function (liste) {
//     return liste.map(function (eleve) {
//       return `${eleve.prenom} est inscrit à ${this.nom}`;
//     });
//   }
// }

// let listeElevesAvecNom = ecole.elevesAvecNomEcole([
//   { prenom: "Tom" },
//   { prenom: "Sophie" },
//   { prenom: "Jean" },
//   { prenom: "Marc" },
// ]);
// console.log(listeElevesAvecNom);