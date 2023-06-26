/* Projet pour faire une moyenne de notes dans une classe */

// On importe le module
let maLibMath = require('./lib-math.js');

function moyenne(notes) {
  let sommeDesNotes = maLibMath.somme(notes);
  return sommeDesNotes / notes.length;
}

let notes = [10, 15, 18, 20, 12, 17, 13];
console.log(moyenne(notes));