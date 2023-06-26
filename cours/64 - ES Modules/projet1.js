/* Projet pour faire une moyenne de notes dans une classe */

// On importe le module
// CommonJS : let maLibMath = require('./lib-math.js');

/* Différentes façons d'importer */
// 1. Importation depuis un module qui exporte une valeur par défaut
// import maLibMath from './lib-math.js'; // 🚨 Extension .js obligatoire !
// 2. Importation depuis un module qui exporte de multiples valeurs
// import { somme, PI } from './lib-math.js';
// 3. Importation de TOUT depuis un module qui exporte de multiple valeurs
// import * as maLibMath from './lib-math.js';
// 4. Importation d'une valeur par défaut et de valeurs multiples
// import maLibMath, { PI } from './lib-math.js';
// 5. Importation d'un module avec ou sans export
// import './lib-math.js';


function moyenne(notes) {
  let sommeDesNotes = maLibMath.somme(notes);
  return sommeDesNotes / notes.length;
}

let notes = [10, 15, 18, 20, 12, 17, 13];
console.log(moyenne(notes));