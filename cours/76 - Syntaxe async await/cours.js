/* La syntaxe async / await */

/* Introduite dans ES2017 */

/* Reprenons notre script un peu modifié */
// console.log("début");
// envoyerRequete("javascriptdezero");
// console.log("fin");

function envoyerRequete(githubUsername) {
  fetch(`https://api.github.com/users/${githubUsername}`)
    .then(reponse => reponse.json())
    .then(profil => fetch(profil.repos_url))
    .then(reponse => reponse.json())
    .then(depots => fetch(depots[0].forks_url))
    .then(reponse => reponse.json())
    .then(function(urls) {
      console.log(urls[0].html_url);
    })
    .catch(console.error);
}

/* La syntaxe async / await */

/* Déclaration d'une fonction asynchrone avec async */
async function asynchrone() {
  return 42;
};

/* Une fonction asynchrone renvoie TOUJOURS une promesse ! */
// console.log("Avant");
// let valeur = asynchrone();
// console.log(valeur);
// console.log("Après");

/* Exploitons la valeur de retour de la promesse */
// console.log("Avant");
// let promesse = asynchrone();
// promesse.then(function(resultat) {
//   console.log(resultat);
// });
// console.log("Après");

/* Attendons le résultat de la promesse avec await (🇫🇷 être dans l'attente) */
async function profilGitHub() {
    let reponse = await fetch('https://api.github.com/users/javascriptdezero');
    let body = await reponse.json();
    return body;
}
// console.log("Avant");
// profilGitHub();
// console.log("Après");

/* 🚨 On ne peut utiliser await que dans une fonction async ! 🚨 */

/* Affichage du résultat avec then() */
// console.log("Avant");
// profilGitHub()
//   .then(function(resultat) {
//     console.log(resultat);
//   });
// console.log("Après");

/* Et avec la nouvelle syntaxe await, on peut ? */
/* Nouveauté ES2022 : top-level await dans les modules ES6 */
// console.log("Avant");
// let resultat = await profilGitHub();
// console.log(resultat);
// console.log("Après");

/* Sinon... l'alternative c'est une IIFE */
// console.log("Avant");
// (async function() {
//   let resultat = await profilGitHub();
//   console.log(resultat);
// })();
// console.log("Après");

/* Gestion des erreurs avec .catch() (rappel) */
async function fonctionRejetee() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject('Je rejette toujours');
    }, 1000);
  });
}

// console.log("Avant");
// fonctionRejetee()
//   .catch(function(erreur) {
//     console.log(erreur);
//   });
// console.log("Après");

/* Avec await et try / catch / finally */
// console.log("Avant");
// try {
//   let valeurRetour = await fonctionRejetee();
//   // On peut avoir d'autres await ci-dessous !
// } catch (erreur) {
//   console.error(erreur);
// } finally {
//   console.log("Je m'exécute quoi qu'il arrive");
// };
// console.log("Après");

/* Retravaillons le code initial avec async await */
async function recupererProfilGitHub(githubUsername) {
  // ...
}
// console.log("Avant");
// recupererProfilGitHub("javascriptdezero");
// console.log("Après");

/* Avantages de la syntaxe async / await :
- On écrit du code asynchrone comme s'il était synchrone
- On récupère le résultat de la promesse directement (plus besoin de .then() !)
- Syntaxe try / catch / finally pour gérer plusieurs erreurs d'un coup sur plusieurs promesses
*/