import { indexDeLiDansListe, elListe } from "./dom-helper.js";
import { listeItems, sauvegarder } from "./donnees.js";

// Item en cours de déplacement
let positionInitiale;
let itemEnDeplacement;

// Création d'un unique indicateur
const indicateur = document.createElement('li');
indicateur.classList.add('indicateur');
indicateur.addEventListener('dragover', function(e) {
  e.preventDefault();
});
indicateur.addEventListener('drop', drop);

export function demarrerDeplacement(e) {
  const poignee = e.currentTarget;
  const li = poignee.closest('li');
  li.setAttribute('draggable', 'true');
}

export function dragStart(e) {
  const li = e.currentTarget;
  li.classList.add('drag-start');
  itemEnDeplacement = li;
  positionInitiale = indexDeLiDansListe(itemEnDeplacement);
  elListe.classList.add('drag-en-cours');
}

export function dragEnd(e) {
  const li = e.currentTarget;
  li.removeAttribute('draggable');
  li.classList.remove('drag-start');
  elListe.classList.remove('drag-en-cours');
  
  const positionIndicateur = indexDeLiDansListe(indicateur);
  if (positionIndicateur >= 0) {
    indicateur.remove();
  }
}

export function dragOver(e) {
  // Permettre à l'élément d'être une cible de dépôt
  e.preventDefault();

  const li = e.currentTarget;
  
  const milieu = li.offsetHeight / 2; // 56px => 28
  const positionCurseur = e.offsetY;

  // Si l'item qui est survolé est l'item en déplacement
  // OU si on survole la partie inférieure de l'item précédent
  // OU si on survole la partie supérieure de l'item suivant
  // alors il faut supprimer l'indicateur
  if (li === itemEnDeplacement ||
     (li === itemEnDeplacement.previousElementSibling &&
     positionCurseur > milieu) ||
     (li === itemEnDeplacement.nextElementSibling &&
      positionCurseur <= milieu)) {
    indicateur.remove();
  } else {
    // Sinon il faut afficher l'indicateur
    if (positionCurseur <= milieu) {
      // Au-dessus
      if (li.previousElementSibling !== indicateur) {
        // On ajoute l'indicateur au-dessus de l'item
        li.before(indicateur);
      }
    } else {
      // En dessous
      if (li.nextElementSibling !== indicateur) {
        // On ajoute l'indicateur en dessous de l'item
        li.after(indicateur);
      }
    }
  } 

}

export function drop(e) {
  const positionIndicateur = indexDeLiDansListe(indicateur);
  
  // S'il y a un indicateur, alors on déplace l'item
  if (positionIndicateur >= 0) {
    // Mettre à jour les données de la liste
    // 1. Supprimer l'item en déplacement
    const item = listeItems.splice(positionInitiale, 1)[0];
    // 2. Ajouter l'item en déplacement à la position de l'indicateur
    if (positionIndicateur > positionInitiale) {
      // Si l'indicateur est après l'item à déplacer, on compense
      // le décalage créé par l'indicateur
      listeItems.splice(positionIndicateur - 1, 0, item);
    } else {
      listeItems.splice(positionIndicateur, 0, item);
    }

    // Sauvegarde des données
    sauvegarder();

    /* Animations de déplacement */

    // Constantes pour les animations
    const CSS_SCALE = 'scale(1.05)';
    const CSS_BOX_SHADOW = '0 0 24px rgba(32,32,32,.8)';
    const PHASE_DECOLLAGE = 'decollage';
    const PHASE_DEPLACEMENT = 'deplacement';
    const PHASE_ATTERRISSAGE = 'atterrissage';

    // Phase de décollage
    function gestionAnimation(e) {
      if (e.propertyName === 'transform') {
        const phase = itemEnDeplacement.dataset.phase;
        // Si je suis dans la phase de décollage alors faire...
        switch(phase) {
          case PHASE_DECOLLAGE:
            itemEnDeplacement.dataset.phase = PHASE_DEPLACEMENT;

            // Récupérer la hauteur de l'item hauteurItem
            const hauteurItem = itemEnDeplacement.offsetHeight;
            // Récupérer sa marge top margeTopItem
            const margeTopItem = Number.parseInt(window.getComputedStyle(itemEnDeplacement).marginTop);
            // Additionner les 2 => hauteurTotale
            let hauteurTotale = hauteurItem + margeTopItem;
            
            // De combien d'items doit-on se déplacer ?
            let nombreItems = Math.abs(positionIndicateur - positionInitiale) - 1;

            // On vient compenser le décalage dû à l'indicateur
            const deplacementVersLeHaut = positionIndicateur < positionInitiale;
            if (deplacementVersLeHaut) {
              nombreItems += 1;
              // Si hauteurTotale > 0 => on se déplace vers le bas
              // Si hauteurTotale < 0 => on se déplace vers le haut
              hauteurTotale = -hauteurTotale;
            }

            itemEnDeplacement.style.transform += ` translateY(${nombreItems * hauteurTotale}px)`;

            // Sélectionner les différents items de la liste à déplacer et les faire bouger dans la direction opposée

            // position initiale = 0, indic = 3 => debut: 1 fin: 2
            let debut = positionInitiale + 1;
            let fin = positionIndicateur;

            if (deplacementVersLeHaut) {
              // position initiale = 3, indic = 1 => debut: 1 fin: 2
              debut = positionIndicateur;
              fin = positionInitiale;
            }

            for (let i = debut; i < fin; i++) {
              elListe.children[i].style.transform = `translateY(${-hauteurTotale}px)`;
            }
            break;
          case PHASE_DEPLACEMENT:
            itemEnDeplacement.dataset.phase = PHASE_ATTERRISSAGE;
            
            // Si je suis à la fin de la phase de déplacement alors faire l'atterissage etc.
            itemEnDeplacement.style.boxShadow = '';
            let tr = itemEnDeplacement.style.transform;
            // tr -> "scale(1.05) translateY(144px)"
            // -> "translateY(144px)"
            tr = tr.replace(CSS_SCALE, '');
            tr = tr.trim();
            itemEnDeplacement.style.transform = tr;
            break;
          case PHASE_ATTERRISSAGE:
            itemEnDeplacement.removeAttribute('data-phase');

            // Supprimer le gestionnaire d'évènement transitionend
            itemEnDeplacement.removeEventListener('transitionend', gestionAnimation);

            // Mettre à jour le DOM
            // Cas particulier : déplacement à la fin de la liste
            if (positionIndicateur === elListe.children.length) {
              elListe.children[positionIndicateur - 1].after(itemEnDeplacement);
            } else {
              elListe.children[positionIndicateur].before(itemEnDeplacement);
            }

            // Retirer les styles CSS des items de la liste
            for (let i = 0; i < elListe.children.length; i++) {
              const enfant = elListe.children[i];
              enfant.removeAttribute('class');

              enfant.style.transition = 'none';
              enfant.style.transform = '';

              setTimeout(function() {
                enfant.removeAttribute('style');
              }, 0);
            }

            break;
          default:
            break;
        }
      }
    }
    itemEnDeplacement.addEventListener('transitionend', gestionAnimation);

    itemEnDeplacement.dataset.phase = PHASE_DECOLLAGE;
    itemEnDeplacement.style.position = "relative";
    itemEnDeplacement.style.zIndex = "1";
    itemEnDeplacement.style.transform = CSS_SCALE;
    itemEnDeplacement.style.boxShadow = CSS_BOX_SHADOW;
  }
}