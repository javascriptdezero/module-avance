// Chargement des données depuis localStorage
const CLE_LOCAL_STORAGE = "liste";
const donnees = localStorage.getItem(CLE_LOCAL_STORAGE);

// S'il y a des données à charger
function chargerDonnees() {
  if (donnees !== null) {
    // On les charge
    return JSON.parse(donnees); 
  }
  return [];
}

export function sauvegarder() {
  localStorage.setItem(CLE_LOCAL_STORAGE, JSON.stringify(listeItems));
}

export const listeItems = chargerDonnees();