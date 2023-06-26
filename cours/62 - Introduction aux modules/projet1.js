/* Projet pour faire une moyenne de notes dans une classe */

function moyenne(notes) {
  let sommeDesNotes = notes.reduce((resultat, valeur) => resultat + valeur, 0);
  return sommeDesNotes / notes.length;
}

let notes = [10, 15, 18, 20, 12, 17, 13];
console.log(moyenne(notes));