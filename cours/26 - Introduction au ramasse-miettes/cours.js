/* Introduction au ramasse-miettes (garbage collector) */

// https://excalidraw.com/#json=SI7J0cn-xdzEpbMmHcTa5,hK6tcDGuTeVCTeYDoywAwA

// Rappel : copie par valeur (types primitifs)
let valeur = 42;
let copieValeur = valeur;
copieValeur = 10;
console.log(valeur); // ?

// Rappel : copie par référence (objets)
let objet = {
  prenom: "Jean",
};
let copieObjet = objet;

copieObjet.prenom = "Bob";

console.log(objet.prenom); // ?

// Rôle du ramasse-miettes (garbage collector)
