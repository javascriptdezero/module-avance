/* Les promesses (🇬🇧 promises) */

/* Introduites dans ES6 */

/* Qu'est-ce qu'une promesse ? */
// C'est un objet qui représente le résultat d'une opération asynchrone.

/* Comment créer une promesse ? */
let promesse = new Promise(function(resolve, reject) { // ℹ️ () => {}
  // ... XHR par exemple !
});
debugger;

/* Que trouve-t-on dans une promesse ?
- Résultat : le résultat de l'opération asynchrone (données)
- Statut : ⏱ pending (en attente) | ✅ fulfilled (tenue) | ❌ rejected (rompue)
- 3 méthodes :
  - then() (🇫🇷 alors()) : pour être notifié quand le statut change
  - catch() (🇫🇷 attraper()) : pour détecter les erreurs
  - finally() (🇫🇷 finalement()) : pour exécuter du code "de nettoyage"
*/

/* Comment fonctionne une promesse ? */
// console.log(1);
// let promesseSucces = new Promise(function(resolve, reject) {
//   console.log("Début du code à l'intérieur de la promesse");
  
//   setTimeout(function() {
//     console.log("Appel de resolve(42)");
//     resolve(42); // Change le statut de la promesse à ✅ fulfilled
//   }, 1000);
  
//   console.log("Fin du code à l'intérieur de la promesse");
// });

// // On demande à être notifié du résultat
// console.log(2);
// promesseSucces.then(function(resultat) {
//   console.log(`✅ Succès ! Résultat : ${resultat}`);
// });
// console.log(3);

/* On peut enregistrer autant de fonctions de rappel (callbacks) qu'on veut,
elles seront exécutées dans l'ordre du code */
// promesseSucces.then(function(resultat) {
//   console.log(`✅ Deuxième fonction de rappel avec résultat ${resultat}`);
// });
// promesseSucces.then(function(resultat) {
//   console.log(`✅ Troisième fonction de rappel avec résultat ${resultat}`);
// });

/* Et si une erreur survient ? */
// let promesseEchec = new Promise(function(resolve, reject) {
//   console.log("Début du code à l'intérieur de la promesse");

//   setTimeout(function() {
//     reject("Erreur de réseau"); // Change le statut de la promesse à ❌ rejected
//   }, 1000);

//   console.log("Fin du code à l'intérieur de la promesse");
// });

// On demande à être notifié des erreurs
// promesseEchec.then(null, function(erreur) {
//   console.log(`❌ Échec ! Erreur : ${erreur}`);
// });
// Alias utilisé 100% du temps dans le vrai code
// promesseEchec.catch(function(erreur) {
//   console.log(`❌ Échec (via catch) ! Erreur : ${erreur}`);
// });

/* 🚨 Arrêtons-nous une seconde sur .then()
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/then */
// let parlonsDeThen = new Promise(function(resolve, reject) {
//   // ...
// });
// let retourThen = parlonsDeThen.then(function(resultat) {
// });
// debugger;

/* Mettons les 2 ensemble (then et catch) */
// let promesseNormale = new Promise(function(resolve, reject) {
//   console.log("Début du code à l'intérieur de la promesse");
//   // Simulation d'une tâche longue...
//   setTimeout(function() {
//     if (Math.random() < .5) {
//       resolve("Succès de la promesse 👍");
//     } else {
//       reject("Échec de la promesse 👎");
//     }
//   }, 1000);
//   console.log("Fin du code à l'intérieur de la promesse");
// });

// promesseNormale.then(function(resultat) {
//   console.log(`✅ Succès ! Résultat : ${resultat}`);
// });

// promesseNormale.catch(function(erreur) {
//   console.log(`❌ Échec (via catch) ! Erreur : ${erreur}`);
// });

/* Rappel sur le chaînage de méthodes */
// let chaine = "chaîne";
// // Décomposons chaque étape :
// let finDeLaChaine = chaine.slice(3);
// let tableau = finDeLaChaine.split('');
// let resultat = tableau.join('-');
// console.log(resultat);
// // Même chose via le chaînage de méthodes
// resultat = chaine.slice(3).split('').join('-');
// console.log(resultat);

/* Utilisation du chaînage de méthodes avec les promesses ! */
// promesseNormale
//   .then(function(resultat) {
//     console.log(`✅ Succès ! Résultat : ${resultat}`);
//   })
//   .catch(function(erreur) {
//     console.log(`❌ Échec (via catch) ! Erreur : ${erreur}`);
//   });

/* Enchaîner de multiples actions 
🚨 .then() renvoie TOUJOURS une promesse (wrapper) */
// promesseNormale
//   .then(function(resultat) {
//     console.log(`✅ Succès 1 ! Résultat : ${resultat}`);
//   })
//   .then(function(resultat) {
//     console.log(`✅ Succès 2 ! Résultat : ${resultat}`);
//   })
//   .then(function(resultat) {
//     console.log(`✅ Succès 3 ! Résultat : ${resultat}`);
//   })
//   .catch(function(erreur) {
//     console.log(`❌ Échec (via catch) ! Erreur : ${erreur}`);
//   });

/* La méthode finally() : s'exécute quoi qu'il se passe !
Utile pour faire du "nettoyage" : arrêter des indicateurs de chargement (loading spinners), fermer des connexions au réseau, fermer des fichiers etc. */
// promesseNormale.finally(function() {
//   console.log("Je suis exécutée peu importe le statut de la promesse");
// });

/* L'ordre a de l'importance : on passe "au travers" du finally() */
// promesseNormale
//   .then(function(resultat) {
//     console.log(`✅ Succès 1 ! Résultat : ${resultat}`);
//     return 1;
//   })
//   .finally(function() {
//     console.log("Je suis exécutée peu importe le statut de la promesse");
//   })
//   .then(function(resultat) {
//     console.log(`✅ Succès 3 ! Résultat : ${resultat}`);
//     return 3;
//   })
//   .catch(function(erreur) {
//     console.log(`❌ Échec (via catch) ! Erreur : ${erreur}`);
//   });

/* 💡 En savoir plus sur les promesses :
- Le guide des promesses du MDN : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Using_promises
- JavaScript Asynchrone : https://fr.javascript.info/promise-basics
*/
