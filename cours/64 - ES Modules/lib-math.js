/* Par défaut, toutes les variables et fonctions sont privées au fichier ! Il faut explicitement indiquer ce qu'on souhaite exporter au "public" */

function somme(tableau) {
  return tableau.reduce((resultat, valeur) => resultat + valeur, 0);
}
const PI = 3.14159;

/* Différentes façons d'exporter */
/* 1. Exportation par défaut via export default { ... } */
// export default { somme, PI }; // 🚨 C'EST un objet classique !
/* 2. Exportation multiple via plusieurs mots-clés export aux définitions */
/* 3. Exportation multiple en une seule fois */
// export { somme, PI }; // 🚨 Ce n'est pas un objet mais la syntaxe du mot-clé export
/* 4. Exportation multiple ET d'une valeur par défaut (peu commun) */
// export default { somme };
// export { somme, PI };

// CommonJS : Exportation des valeurs ou variables
// module.exports.somme = somme;
// OU
// module.exports = {
//   somme: somme,
// };

/* Plus d'informations sur la doc officielle :
https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Modules
*/