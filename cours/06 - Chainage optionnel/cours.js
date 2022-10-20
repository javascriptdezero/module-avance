/* L'opérateur de chaînage optionnel ?. (optional chaining operator) */

// Introduit dans la version ECMAScript 2020 (ES11)
// Caniuse : https://www.caniuse.com

/* Problème d'accès à un objet imbriqué "facultatif" */
let stagiaire = {
  prenom: "Tom",
  nom: "Redocemia",
  contact: {
    email: "tom@redocemia.com",
    tel: {                        // Section facultative
      mobile: "0601234567",
      fixe: "031234567",
    },
    appeler: function() { console.log(`Appel en cours : n°${this.tel.mobile}`) },
  },
};

// console.log(`Portable de ${stagiaire.prenom} : ${stagiaire.contact.tel.mobile}`);

/* Solution possible */
// let telMobile;
// if (stagiaire.contact.tel !== undefined) { // Alternative if (stagiaire.contact.tel) { ... }
//   telMobile = stagiaire.contact.tel.mobile;
// } else {
//   telMobile = "Non renseigné";
// }
// console.log(`Portable de ${stagiaire.prenom} : ${telMobile}`);

/* Solution possible plus compacte */
// let telMobile = stagiaire.contact.tel ? stagiaire.contact.tel.mobile : "Non renseigné";
// console.log(`Portable de ${stagiaire.prenom} : ${telMobile}`);

/* Et si la propriété contact venait à devenir facultative ? */
// let telMobile = stagiaire.contact ? stagiaire.contact.tel ? stagiaire.contact.tel.mobile : "Non renseigné (tel non défini)" : "Non renseigné (contact non défini)";
// console.log(`Portable de ${stagiaire.prenom} : ${telMobile}`);

/* Solution alternative plus compacte */
// let telMobile = stagiaire.contact && stagiaire.contact.tel ? stagiaire.contact.tel.mobile : "Non renseigné";
// console.log(`Portable de ${stagiaire.prenom} : ${telMobile}`);

/* Fonctionnement du nouvel opérateur ?. */
// Si l'opérande de gauche est null ou undefined => renvoie undefined
// stagiaire = undefined;
// console.log(stagiaire?.contact);

/* Chaînages longs (d'où son nom) */
// console.log(stagiaire?.contact?.tel);

// Cas important : l'opérateur ne protège que l'opérande immédiatement à gauche
// console.log(stagiaire.contact?.email);

/* Différentes façons de l'utiliser */
// let proprieteEmail = "email";
// console.log(stagiaire.contact?.[proprieteEmail]);

/* Attention au placement des parenthèses */
// Challenge : si on supprime contact, que fait cette instruction ?
// console.log((stagiaire.contact?.tel).mobile);

// Challenge : si pas de tel, que fait cette instruction ?
// console.log(stagiaire.contact?.tel.mobile);

/* Solution moderne au problème initial (sans valeur par défaut) */
// let telMobile = stagiaire.contact?.tel?.mobile;
// console.log(`Portable de ${stagiaire.prenom} : ${telMobile}`);

/* Solution moderne au problème initial : combiner ?. avec ?? */
// let telMobile = stagiaire.contact?.tel?.mobile ?? "Non renseigné";
// console.log(`Portable de ${stagiaire.prenom} : ${telMobile}`);

/* Pour les fonctions ça fonctionne aussi */
// stagiaire.contact?.appeler?.();

/* Court-circuit */
// Opérande de droite n'est interprété que si l'opérande de gauche est définie
// let donnees = {
//   tab: [0, 1, 2, 3],
// };
// let index = 0;
// console.log(donnees.tab?.[index++]);
// console.log(index);

/* Exemple site web */
// file:///./index.html