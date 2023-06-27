import { listeItems, sauvegarder } from "./donnees.js";
import { drop, dragEnd, dragOver, demarrerDeplacement, dragStart } from "./animations.js";

export const elListe = document.querySelector('#liste');
export const elTemplateItem = document.querySelector('#template-item');

export function indexDeLiDansListe(element) {
  const li = element.closest('li');
  const enfants = Array.from(elListe.children);
  return enfants.indexOf(li);
}

function remplacerParagrapheParInput(e) {
  const elP = e.target;
  // Transformation de l'élément <p> en <input type="text">
  // Créer un <input>
  const elInput = document.createElement('input');
  
  // Si on a cliqué sur le nom... on fait un type="text"
  if (elP.classList.contains("nom")) {
    elInput.type = "text";
  } else {
    // Sinon on fait type="number" et ajouter les attributs min max
    elInput.type = "number";
    elInput.min = "1";
    elInput.max = "999";
  }
  
  elInput.className = elP.className;

  // Injecter le nom provenant de <p> dans <input>
  const nom = elP.textContent;
  elInput.value = nom;

  // Remplacer l'élément <p> par <input>
  elP.replaceWith(elInput);

  // UX
  elInput.focus();

  // Lorsqu'on quitte l'input, il faut remettre <p> mis à jour
  function gestionBlur(e) {
    // Stocker les nouvelles données dans localStorage
    // Détecter ce qu'on a modifié, le nom ou la quantité ?
    const element = e.target;

    // On cherche l'élément <li> parent
    const index = indexDeLiDansListe(element);

    if (element.classList.contains('nom')) {
      listeItems[index].nom = element.value;
    } else {
      listeItems[index].quantite = Number(element.value);
    }

    // Mettre à jour la propriété adéquate dans la listeItems
    // Sauvegarder la liste
    sauvegarder();

    elP.textContent = elInput.value;
    elInput.replaceWith(elP);
  }

  elInput.addEventListener('blur', gestionBlur);

  // Si on appuie sur ENTREE, il faut également remplacer par <p>
  elInput.addEventListener('keydown', function(e) {
    if (e.key === "Enter") {
      elInput.removeEventListener('blur', gestionBlur);
      gestionBlur(e);
    }
  });
}

export function creerElementLi(objetItem) {
  // Créer un fragment de document à partir du template
  const fragmentDoc = elTemplateItem.content.cloneNode(true);

  // Injecter cette valeur dans l'élément <li>
  // Sélectionner l'élément nom <p>
  const elLi = fragmentDoc.querySelector('li');
  const elNom = fragmentDoc.querySelector('.nom');
  const elQuantite = fragmentDoc.querySelector('.quantite');
  const elUnite = fragmentDoc.querySelector('.unite');
  const elSupprimer = fragmentDoc.querySelector('.supprimer');
  const elPoignee = fragmentDoc.querySelector('.poignee');

  elSupprimer.addEventListener('click', function(e) {
    // Détecter sur quel élément on a cliqué ?
    const index = indexDeLiDansListe(e.currentTarget);
    // Supprimer cet élément de la listeItems
    listeItems.splice(index, 1);
    // Sauvegarde dans localStorage
    sauvegarder();
    
    // Supprimer l'item <li> de la liste <ul> avec l'animation
    const li = elListe.children[index];
    // On ajoute le gestionnaire d'évènement
    li.addEventListener('transitionend', function(e) {
      if (e.propertyName === "height") {
        li.remove();
      }
    });
    // On ajoute la classe qui va générer l'animation
    li.classList.add('suppression');
  });

  elNom.addEventListener('focus', remplacerParagrapheParInput);
  elQuantite.addEventListener('focus', remplacerParagrapheParInput);
  elUnite.addEventListener('change', function(e) {
    const index = indexDeLiDansListe(elUnite);
    listeItems[index].unite = elUnite.value;
    sauvegarder();
  });
  
  elNom.textContent = objetItem.nom;
  elQuantite.textContent = objetItem.quantite;
  elUnite.value = objetItem.unite;

  elPoignee.addEventListener('mousedown', demarrerDeplacement);
  elPoignee.addEventListener('mouseup', function(e) {
    elLi.removeAttribute('draggable');
  });
  elLi.addEventListener('dragstart', dragStart);
  elLi.addEventListener('dragend', dragEnd);

  // Affichage de l'indicateur
  elLi.addEventListener('dragover', dragOver);

  // Gestion du relâchement du bouton de la souris
  elLi.addEventListener('drop', drop);

  return fragmentDoc;
}
