/* La portée lexicale (🇬🇧 lexical scoping) */

/* Rappel : résolution des variables */

function afficherPrix(prix, taux) {

  function calculTTC(prixHT, TVA) {
    return prixHT * (1 + TVA / 100);
  }

  console.log(`Prix HT : ${prix} €\nTVA : ${taux}%\nPrix TTC : ${calculTTC(prix, taux)} €`);
}

afficherPrix(100, 20);

/* Et si on ajoute la devise... */
/* Et si la fonction est définie ailleurs... ? */
/* Et si la fonction est exécutée ailleurs... ? */

// function afficherPrix(prix, taux) {
//   let devise = "€";

//   function calculTTC(prixHT, TVA) {
//     return prixHT * (1 + TVA / 100) + " " + devise;
//   }

//   console.log(`Prix HT : ${prix} ${devise}\nTVA : ${taux}%\nPrix TTC : ${calculTTC(prix, taux)}`);
// }

// afficherPrix(100, 20);
