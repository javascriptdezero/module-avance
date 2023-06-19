/* Les fonctions constructeurs */

/* Rappels sur les types standards : Array, String, Number etc. */
let array = [1,2,3];
let arrayNew = new Array(1,2,3);
console.log(array);
console.log(arrayNew);

/* Les constructeurs : ce sont juste des fonctions !
Dans l'interpréteur JS on trouve des fonctions pour chaque type standard :

function Array() { ... } // Par convention, la 1ère lettre est en majuscule
function String() { ... }
function Number() { ... }
*/

/* Ils doivent être utilisés avec l'opérateur new */
// let chaine = String("bonjour");        // ❌
// let chaineNew = new String("bonjour"); // ✅
// console.log(chaine);
// console.log(chaineNew);

/* Exception pour Array qui peut être utilisé sans new */
// Doc : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/

// let tableau = Array(1,2,3);
// let tableauNew = new Array(1,2,3);
// console.log(tableau);
// console.log(tableauNew);

/* Notion d'instance d'un type de données */

/* Comment ça fonctionne ? : créons notre propre type de données Tweet ! */

// function Tweet(auteur, message) {
//   this.auteur = auteur;
//   this.message = message;
//   this.dateCreation = new Date();
//   this.afficher = function() {
//     console.log(`Tweet écrit le ${this.dateCreation.toLocaleDateString('fr-FR')} par ${this.auteur} : ${this.message}`);
//   }
// }

// let tweet1 = new Tweet("Jérémy", "Voici mon premier tweet");
// let tweet2 = new Tweet("Tom", "J'apprends le JavaScript");
// tweet1.afficher();
// tweet2.afficher();

/* BONUS: Vérifier que la fonction a été appelée avec new : new.target */
// function Test() {
//   console.log(new.target);
//   // ...
// }

// let test = Test();
// let testNew = new Test();

/* Array() fonctionne sans new grâce à ça : */
// function Test() {
//   if (new.target === undefined) {
//     return new Test();
//   }
//   // ...
// }

// let test = Test();
// let testNew = new Test();
// console.log(test);
// console.log(testNew);
