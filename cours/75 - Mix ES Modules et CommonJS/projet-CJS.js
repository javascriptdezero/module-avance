/* Projet CommonJS (CJS) */

/* Utilisation d'une fonction d'un module CJS */
let { sommeCJS } = require('./lib-cjs.js');
console.log(sommeCJS([1,2,3,4]));

/* Utilisation d'une fonction d'un module ESM */
// let { sommeESM } = require('./lib-esm.js');
// console.log(sommeESM([1,2,3,4,5]));

/* Utilisation d'une fonction d'un paquet npm de type ESM */