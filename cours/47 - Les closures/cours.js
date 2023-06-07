/* Les closures */

function afficherPrix(prix, taux) {
  let devise = "€";

  return function (prixHT, TVA) {
    return prixHT * (1 + TVA / 100) + " " + devise;
  }
}

let calculTTC = afficherPrix(100, 20);
console.log(calculTTC(100, 20));

/* Exemple supplémentaire sur les closures */

function creerCompteur() {
  let compteur = 0;

  return function() {
    compteur++;
    return compteur;
  };
}

let compteur1 = creerCompteur();
let compteur2 = creerCompteur();
console.log(compteur1());
console.log(compteur1());
console.log(compteur2());
