/* Par défaut, toutes les variables et fonctions sont privées au fichier ! Il faut explicitement indiquer ce qu'on souhaite exporter au "public" */

function somme(tableau) {
  return tableau.reduce((resultat, valeur) => resultat + valeur, 0);
}

// Exportation des valeurs ou variables
module.exports.somme = somme;
module.exports.PI = 3.14159;

// module.exports = {
//   somme: somme,
// };

let variablePrivee = "personne d'autre ne peut me voir en dehors de ce fichier";
function fonctionPrivee() {
  console.log("Je suis une fonction privée");
}

/* Plus d'informations sur la doc officielle :
https://nodejs.org/api/modules.html
*/