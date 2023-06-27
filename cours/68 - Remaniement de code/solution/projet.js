/* Rédigez votre code ci-dessous */

// Imports
import { listeItems, sauvegarder } from "./donnees.js";
import { elListe, creerElementLi } from "./dom-helper.js";
import { extraireDonnees } from "./insertion-intelligente.js";

// Récupérer une référence sur le template
const elNouvelItem = document.querySelector('#nouvel-item');

// Détecter la soumission du formulaire
const elForm = document.querySelector('form');

// Chargement des données depuis localStorage
for (const item of listeItems) {
  // On créé pour chaque objet un élément <li>
  const elLi = creerElementLi(item);
  // On ajoute l'élément à la liste <ul>
  elListe.append(elLi);
}

elForm.addEventListener('submit', function(e) {
  // On empêche le rechargement de la page
  e.preventDefault();
  
  // Récupérer la valeur de l'input nouvel item
  let nomItem = elNouvelItem.value;

  // Supprimer les espaces en trop avant et après le nom
  nomItem = nomItem.trim();

  // Supprimer les espaces d'affilés en trop
  nomItem = nomItem.replace(/ {2,}/g, " ");

  const objetItem = extraireDonnees(nomItem);

  // Sauvegarder les données dans localStorage
  listeItems.push(objetItem);
  sauvegarder();

  const elLi = creerElementLi(objetItem);

  // Ajouter l'élément <li> dans la liste <ul>
  liste.append(elLi);

  // Vider le champ nouvel item
  elNouvelItem.value = "";

  // Mettre le focus immédiatement sur le champ nouvel item
  elNouvelItem.focus();
  
});

elNouvelItem.addEventListener('input', function(e) {
  elNouvelItem.setCustomValidity('');
  elNouvelItem.checkValidity();
});

elNouvelItem.addEventListener('invalid', function(e) {
  const nom = elNouvelItem.value;

  if (nom.length === 0) {
    elNouvelItem.setCustomValidity("Vous devez indiquer les informations de l'item, exemple : 250 g chocolat");
  } else if (!/[A-Za-z]{2}/.test(nom)) {
    // Si nom ne contient pas 2 lettres côte à côte
    elNouvelItem.setCustomValidity("Le nom de l'item doit faire 2 lettres minimum");
  } else {
    elNouvelItem.setCustomValidity("Les caractères spéciaux, les accents et autres lettres spécifiques ne sont pas autorisés");
  }
});