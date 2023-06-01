/* Les fonctions imbriquées */

/* Exemple */

function afficherPrix(prix, taux) {
  
  function calculTTC(prixHT, TVA) {
    return prixHT * (1 + TVA / 100);
  }
  
  console.log(`Prix HT : ${prix} €\nTVA : ${taux}%\nPrix TTC : ${calculTTC(prix, taux)} €`);
}

afficherPrix(100, 20);

/* Avantages :
- Meilleure lisibilté
- On peut réutiliser le code de la fonction imbriquée
- Isolation de la fonction à la portée de sa fonction englobante
*/