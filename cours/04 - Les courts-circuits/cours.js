/* Les courts-circuits */

/* Rappel du fonctionnement des opérateurs booléens || et && */
// Cf. leçon du module intermédiaire "la conversion des types"
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#op%C3%A9rateurs_logiques
let cinq = 5;
let dix = 10;

// L'opérateur logique ET : &&
// console.log(cinq > 6 && dix > 2);
// console.log(3 && 2);

// L'opérateur logique OU : ||
// console.log(cinq < 3 || dix > 2);
// console.log(0 || 1);
// console.log(-0 || 2);
// console.log('' || 3);
// console.log(false || 4);
// console.log(null || 5);
// console.log(undefined || 6);
// console.log(NaN || 7);
// console.log(3 || 2);

/* Principe du court-circuit */
// L'opérande de droite n'est évalué que si c'est nécessaire !
function afficher() {
  console.log("La méthode afficher() s'est exécutée");
  return "bonjour";
}
// console.log(5 && "coucou");
// console.log(null && afficher());
// console.log(5 && afficher());
// console.log(5 || afficher());
// console.log(undefined || afficher());

/* Cas d'utilisation */
// Valeur par défaut
let stagiaire = {
  prenom: "Tom",
  nom: "Redocemia",
};

// if (stagiaire.poste === undefined
//   || stagiaire.poste === null
//   || stagiaire.poste === "") {
//   stagiaire.poste = "Non renseigné";
// }

// console.log(stagiaire);
// Avec un court-circuit
// stagiaire.poste = stagiaire.poste || "Non renseigné";
// console.log(stagiaire);

/* Valeur de paramètre par défaut */
// function initialiserInterface(theme) {
//   if (theme === undefined) {
//     theme = "sombre";  
//   }
//   console.log(theme);
// }
// initialiserInterface();
// initialiserInterface("bleu");

// Avec un court-circuit
// function initialiserInterface(theme) {
//   theme = theme || "sombre"; // 💡 Raccourci : theme ||= "sombre";
//   console.log(theme);
// }
// initialiserInterface();
// initialiserInterface("bleu");

/* Blocs if imbriqués */
let connexionReussie = true;
let profilExistant = true;
// if (connexionReussie) {
//   if (profilExistant) {
//     console.log('Bienvenue !');
//   }
// }

// Avec un court-circuit
// connexionReussie && profilExistant && console.log('Bienvenue !');

// Ça marche aussi avec des fonctions
function seConnecter() {
  return true;
}
function connexionDisponible() {
  return true;
}
// connexionDisponible() && seConnecter() && console.log('Bienvenue !');
