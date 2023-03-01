const form = document.querySelector('#form');
const bouton = document.querySelector('#soumettre');
const produit = document.querySelector('#produit');
const quantite = document.querySelector('#quantite');
const panier = document.querySelector('#panier');

bouton.addEventListener('click', function(event) {
  // On ne veut pas recharger la page
  event.preventDefault();
  // Création de l'objet final
  let contenuPanier = {};
  contenuPanier[produit.value] = quantite.value;
  // Affichage du panier dans la page web
  panier.textContent = JSON.stringify(contenuPanier);
  // On réinitialise le formulaire
  form.reset();
});