import { elTemplateItem } from "./dom-helper.js";

const q = elTemplateItem.content.querySelector('.quantite');
const DEFAUT_QUANTITE = Number(q.textContent);
const u = elTemplateItem.content.querySelector('.unite');
const DEFAUT_UNITE = u.selectedOptions[0].value;

// Récupérer les valeurs par défaut de quantité et unité
const UNITES = [];
for (const options of u.options) {
  UNITES.push(options.value);
}

// Insertion intelligente
export function extraireDonnees(nomItem) {
  // <nom>
  // <quantité> <nom>
  // <quantité> <unité> <nom>
  // Est-ce que le 1er mot est un nombre ?
  let mots = nomItem.split(' ');
  let premierMot = mots[0];
  let deuxiemeMot = mots[1];

  const objetItem = {
    nom: nomItem,
    quantite: DEFAUT_QUANTITE,
    unite: DEFAUT_UNITE,
  }

  if (Number.isInteger(Number(premierMot))) {
    // Si c'est une quantité, il faut l'extraire
    // <quantité> <nom>
    // <quantité> <unité> <nom>
    objetItem.quantite = Number(premierMot);

    // Si le 2e mot est une unité, l'extraire
    if (UNITES.includes(deuxiemeMot)) {
      objetItem.unite = deuxiemeMot;
      objetItem.nom = mots.slice(2).join(' ');
    } else {
      // Sinon c'est que le nom commence à partir du 2e mot
      objetItem.nom = mots.slice(1).join(' ');
    }
  }

  // Mettre la 1ère lettre en majuscule
  // pommes => P + ommes
  objetItem.nom = objetItem.nom[0].toUpperCase() + objetItem.nom.slice(1);

  return objetItem;
}