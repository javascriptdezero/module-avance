/* 
Les solutions présentées ici NE sont PAS les seules qui sont valables.
Si les tests passent c'est tout bon 👍.
*/

// Exercice 0
function getDatabaseHost(process) {
  return process.env.DB_HOST || 'localhost';
}

// Exercice 1
function definirIndentation(type, quantite) {
  return `${quantite || 2} ${type || "espaces"}`;
}

// Exercice 2
// Alternative 1
function getPaddingMax(pixels) {
  pixels ??= 0;
  return pixels + 8 > 64 ? 64 : pixels + 8;
}
// Alternative 2
function getPaddingMax(pixels) {
  pixels ??= 0;
  return Math.min(pixels + 8, 64);
}
// Alternative 3 (🚨 moins lisible donc à éviter)
function getPaddingMax(pixels) {
  return Math.min((pixels ??= 0) + 8, 64);
}

// Exercice 3
function extraireNumeroAdresse(client) {
  return client?.adresse?.numero;
}

// Exercice 4
function extraireNumeroAdresseOuErreur(client) {
  return client?.adresse?.numero ?? "Erreur";
}