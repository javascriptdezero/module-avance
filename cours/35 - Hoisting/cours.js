/* Qu'est-ce que le hoisting (remontée) ? */

/* 💡 Module débutant : la portée des variables avec var */

/* Code normal : on déclare une variable avant de l'utiliser */
// var|let|const bonjour = "bonjour";
// console.log(bonjour);

/* Accéder à une variable AVANT sa déclaration ? */
// Avec var...
// console.log(bonjour); // ?
// var bonjour = "bonjour";
// console.log(bonjour); // "bonjour"

// Avec let ou const (même comportement)...
// console.log(bonjour); // ReferenceError: Cannot access 'bonjour' before initialization
// let bonjour = "bonjour";
// console.log(bonjour);

/* Qu'est-ce qu'il se passe ? Le hoisting ! */
// Avec var...
// // ℹ️ variable bonjour, assignation automatique à la valeur undefined par l'interpréteur JavaScript
// // "Comme si" on avait écrit : var bonjour = undefined;
// console.log(bonjour); // undefined
// var bonjour = "bonjour";
// console.log(bonjour); // "bonjour"

// Avec let ou const (même comportement)...
// ℹ️ variable bonjour, PAS d'assignation à undefined ET interdiction d'utiliser la variable avant son initialisation
// console.log(bonjour); // ReferenceError: Cannot access 'bonjour' before initialization
// let bonjour = "bonjour";
// console.log(bonjour);

/* TDZ: Temporal Dead Zone (🇫🇷 Zone Morte Temporelle) */
// {
//   // Début de la TDZ pour la variable bonjour, ℹ️ variable bonjour
//   console.log("des instructions");
//   console.log("encore des instructions");
//   console.log(bonjour); // 💀💀💀
//   console.log("et d'autres instructions");

//   let bonjour = "bonjour"; // Fin de la TDZ ici
//   console.log(bonjour);
// }

/* Les déclarations de fonctions sont remontées ("hoistées") */
// parler(); // Appel de la fonction parler() avant sa déclaration

// function parler() {
//   console.log("blah blah");
// }

/* 🚨 Les assignations à des fonctions ne sont pas remontées (puisque même principe que pour les variables) */
// Avec var...
// parler();

// var parler = function() {
//   console.log("blah blah");
// };

// Avec let ou const (même comportement)...
// parler();

// let parler = function() {
//   console.log("blah blah");
// }

/* Ce qu'il faut retenir
- Toutes les déclarations de variables (var|let|const) sont remontées ("hoistées") en haut de leur portée
- L'interpréteur JS assigne la valeur undefined aux variables déclarées avec var
- L'interpréteur JS n'assigne PAS la valeur undefined aux variables déclarées avec let et const
- Les variables déclarées avec let et const ne sont pas accessibles tant que leur déclaration n'a pas été exécutée par l'interpréteur JaveScript (TDZ)
*/

/* 🏆 Bonnes pratiques 
- Déclarez toujours vos variables avant de les utiliser
- Déclarez vos variables au plus près de là où vous souhaitez les utiliser
- Si vous devez utiliser var, déclarez votre variable au tout début de la portée de celle-ci
- [Préférence personnelle] : Déclarez vos fonctions à la fin de votre fichier pour avoir le code "utile" en haut et faciliter la lecture (cf. exemples ci-dessous)
*/

/* Déclaration en bas (ma préférence personnelle) */
// let prixHT = 100;
// let taxe = 20;
// let prixTTC = prixHT + TVA(prixHT, taxe);
// afficherDetailsCalcul(prixHT, taxe, prixTTC);

// function TVA(prix, taxe) {
//   return prix * taxe / 100;
// }

// function afficherDetailsCalcul(prixHT, taxe, prixTTC) {
//   console.log(`Si le prix hors taxe est de ${prixHT} € et la taxe de ${taxe}%, l'acheteur devra payer ${prixTTC} €.`);
// }

/* Déclaration en haut */
// function TVA(prix, taxe) {
//   return prix * taxe / 100;
// }

// function afficherDetailsCalcul(prixHT, taxe, prixTTC) {
//   console.log(`Si le prix hors taxe est de ${prixHT} € et la taxe de ${taxe}%, l'acheteur devra payer ${prixTTC} €.`);
// }

// let prixHT = 100;
// let taxe = 20;
// let prixTTC = prixHT + TVA(prixHT, taxe);
// afficherDetailsCalcul(prixHT, taxe, prixTTC);

/* Déclaration des fonctions par des expressions */
// let prixHT = 100;
// let taxe = 20;

// let TVA = function(prix, taxe) {
//   return prix * taxe / 100;
// }

// let afficherDetailsCalcul = function(prixHT, taxe, prixTTC) {
//   console.log(`Si le prix hors taxe est de ${prixHT} € et la taxe de ${taxe}%, l'acheteur devra payer ${prixTTC} €.`);
// }

// let prixTTC = prixHT + TVA(prixHT, taxe);
// afficherDetailsCalcul(prixHT, taxe, prixTTC);
