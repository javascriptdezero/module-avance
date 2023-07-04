/* Projet ES Modules (ESM) */

/* Utilisation d'une fonction d'un module ESM */
import { sommeESM } from './lib-esm.js';
console.log(sommeESM([1,2,3]));

/* Utilisation d'une fonction d'un module CJS */
// import { sommeCJS } from './lib-cjs.js';
// console.log(sommeCJS([1,2,3,4]));

/* Utilisation d'une fonction d'un paquet npm de type CommonJS */
// https://www.npmjs.com/package/array-sum
// > npm install array-sum
// import arraySum from 'array-sum';
// console.log(arraySum([1,2,3,4,5]));
