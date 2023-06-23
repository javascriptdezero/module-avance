/* Le mode use strict */

/* Introduit dans ES5 (en 2009 !) */

/* À quoi ça sert ? */

/* Comment l'utiliser ? */
// Directive "use strict"; ou 'use strict';
// file://./script.js
// file://./fonction.js

/* Une fois activé ce mode on ne peut pas le retirer */

/* Comment activer le mode strict dans les Dev Tools ? */

/*
Le mode strict est activé par défaut dans :
- Les classes
- Les modules ES6
*/

/* Différences mode par défaut VS mode strict */

/* Toutes les variables doivent être déclarées de façon explicite */
// function declarationObligatoire() {
//   // "use strict";
//   test = "test";
//   console.log(test);
// }
// declarationObligatoire();

/* Les méthodes invoquées comme des fonctions auront le mot-clé this qui vaudra undefined au lieu de valoir la variable globalThis */
// function thisUndefined() {
//   // "use strict";
//   console.log(this.propriete);
// }
// let obj = { propriete: "propriété de obj" };
// obj.methode = thisUndefined;
// obj.methode();

// propriete = "propriete de globalThis";
// thisUndefined();

/* Les fonctions invoquées avec call() ou apply() ne feront pas de conversion implicite du thisArg */
// function test() {
//   // "use strict";
//   console.log(this.propriete);
// }
// propriete = "propriete de globalThis";

// function convImpliciteThis() {
//   test.call(undefined);
// }
// convImpliciteThis();

/* L'objet spécial arguments conserve une copie statique des valeurs passées à la fonction au lieu des références vers les arguments */
// function uneFonction(arg1, arg2, arg3) {
//   // "use strict";
//   arguments[0] = "deux";
//   arguments[1] = 1234;
//   arguments[2].test = "valeur changée"; // 🚨 Même comportement
//   console.log(arg1, arg2, arg3);
// }

// let un = "un";
// let objet = { test: "test" };
// let nombre = 42;
// uneFonction(un, nombre, { test: "test" });

/* Une erreur de syntaxe est déclenchée si on tente de supprimer une variable, un paramètre ou une fonction avec delete */
// function erreurDelete(bonjour) {
//   // "use strict";
//   delete bonjour;
// }
// erreurDelete("bonjour");

/* Une erreur est déclenchée si on tente de déclarer 2 paramètres de même nom dans une fonction */
// function memeNomDeProprietes(arg, arg) {
//   // "use strict";
//   console.log(arg);
// }
// memeNomDeProprietes("coucou", "oops");

/* Les nombres en notation octale sont interdits */
// function octal() {
//   // "use strict";
//   console.log(016); // (Zéro seize) = 1 * 8 + 6 = 14 en décimal
// }
// octal();

/*
En plus :
- Le code passé à eval() est strict si eval est utilisé dans un code strict ou si 'use strict' est indiqué dans l'argument passé à eval().
- L'instruction with est interdite en mode strict
- Les assignations à des propriétés en lecture seule ou tenter de créer ou supprimer des propriétés sur des objets verrouillés déclenchent une erreur alors qu'en mode par défaut cela échoue silencieusement
- ...
*/