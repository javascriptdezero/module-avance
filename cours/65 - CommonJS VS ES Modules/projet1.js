/* Projet pour faire une moyenne de notes dans une classe */

// CommonJS
const maLibMath = require('./lib-math.js');

// ES Module
// import * as maLibMath from './lib-math.js';

// Testons le mode strict !
undefined = "test";

function moyenne(notes) {
  let sommeDesNotes = maLibMath.somme(notes);
  return sommeDesNotes / notes.length;
}

let notes = [10, 15, 18, 20, 12, 17, 13];
console.log(moyenne(notes));