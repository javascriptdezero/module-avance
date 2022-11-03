/* Exercices de remaniement de code avec les nouveaux opérateurs */

// Exercice 0
function getDatabaseHost(process) {
  let databaseHost;
  if (process.env.DB_HOST) {
    databaseHost = process.env.DB_HOST;
  } else {
    databaseHost = 'localhost';
  }
  return databaseHost;
}

// Exercice 1
function definirIndentation(type, quantite) {
  if (!type) {
    type = "espaces";
  }
  if (!quantite) {
    quantite = 2;
  }
  return `${quantite} ${type}`;
}

// Exercice 2
function getPaddingMax(pixels) {
  if (pixels === null || pixels === undefined) {
    pixels = 0;
  }
  pixels += 8;
  if (pixels > 64) {
    return 64;
  } else {
    return pixels;
  }
}

// Exercice 3
function extraireNumeroAdresse(client) {
  if (client && client.adresse) {
    return client.adresse.numero;
  } else {
    return undefined;
  }
}

// Exercice 4
function extraireNumeroAdresseOuErreur(client) {
  if (client && client.adresse) {
    return client.adresse.numero;
  } else {
    return "Erreur";
  }
}
