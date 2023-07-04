/* Gestion des erreurs */

/* Crash du script 😭 */
console.looog("Tom");
console.log("fin");

/* Capturer les erreurs avec try / catch */
// console.log("Début du script");
// try {
//   console.log("Là c'est OK");
//   console.looog("Tom");
//   console.log("Je ne serai jamais vu 😭");
// } catch (erreur) {
//   console.error("❌ Une erreur s'est produite :", erreur.message);
// }
// console.log("🏁 La suite est exécutée !");

/* Générer nos propres erreurs ("lever une exception") via throw */
// let personne = {
//   nom: "Redocemia",
//   age: 42,
// };

// try {
//   if (personne.prenom === undefined) {
//     throw new Error("Cette personne n'a pas de prénom !");
//   }
//   personne.adresse = "42 rue du code"; // Code jamais exécuté s'il y a une erreur !
// } catch (erreur) {
//   console.error("❌ L'objet personne est incomplet :", erreur.message);
// }
// console.log(personne);

/* Nettoyer son code avec finally */
// let personne = {
//   nom: "Redocemia",
//   age: 42,
// };

// try {
//   // personne.prenom = "Tom";
//   if (personne.prenom === undefined) {
//     throw new Error("Cette personne n'a pas de prénom !");
//   }
// } catch (erreur) {
//   console.error("❌ L'objet personne est incomplet :", erreur.message);
// } finally {
//   console.log("Je suis exécutée quoi qu'il se passe");
// }