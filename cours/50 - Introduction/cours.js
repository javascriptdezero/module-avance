/* Introduction */

/* D'où viennent les méthodes sur les types standards ? */
let personne = {
  prenom: "Tom",
  saluer() {
    console.log(`Bonjour, je m'appelle ${this.prenom}`);
  }
};
personne.saluer();

let tableau = [1,2,3];
console.log(tableau.includes(2));

/* Référence aux prototypes dans la doc MDN
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/includes */

/* Avant de commencer (changements dans Google Chrome):
__proto__ => [[Prototype]]

console.log(obj.__proto__); ❌
Object.getPrototypeOf(obj); ✅

obj.__proto__ = Object.prototype ❌
Object.setPrototype(obj, Object.prototype); ✅
*/

