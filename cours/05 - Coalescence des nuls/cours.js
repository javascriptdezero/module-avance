/* L'opérateur de coalescence des nuls ?? (Nullish coalescing operator) */

// Introduit dans la version ECMAScript 2020 (ES11)
// Caniuse : https://www.caniuse.com

/* Problème des opérateurs || et && */
const preferences = {
  label: "animation",
  reps: 5, // Nombre de répétitions
  duree: 300, // 300 ms
}

let animation = {
  label: "Ma super animation !",
  reps: 2,
  duree: 500,
};

function executerAnimation(animation) {
  const label = animation.label || preferences.label;
  const reps = animation.reps || preferences.reps;
  const duree = animation.duree || preferences.duree;
  console.log(`Affiche "${label}" ${reps} fois pendant ${duree}ms`);
}
executerAnimation(animation);

/* Ce qu'il faut retenir */
// || et && travaillent sur des expressions truthy ou falsy
// (Rappel falsy => 0, -0, 0n, -0n, NaN, false, null, undefined, "")
// ?? travaille sur des expressions "nullish" (non définies) : null et undefined

/* Court-circuit avec fonctions (pareil que pour || et &&) */
// null ?? executerAnimation(animation);

/* Première valeur définie ? */
// let prenom = null;
// let nom;
// let surnom = "Bob";
// console.log(prenom ?? nom ?? surnom ?? "Anonyme");

/* Raccourci d'opérateur ??= */
// let valeur = null;
// valeur ??= 12; // Equivalent : valeur = valeur ?? 12
// console.log(valeur);

/* Interdit d'utiliser en combinaison avec || et && pour éviter les erreurs */
// Solution => mettre des parenthèses
// let duree;
// let minDuree = 300;
// let animDuree = duree ?? (console.log("durée min utilisée") || minDuree);
// console.log(animDuree);