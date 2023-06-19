/* Utiliser Object.create */

/* 🚨 Mauvaise pratique */
let listeMethodes = {
  saluer: function() {
    console.log("Bonjour");
  }
}

// ❌ Empêche l'optimisation dans le moteur JavaScript
let mauvais = {};
Object.setPrototypeOf(mauvais, listeMethodes);
mauvais.saluer();

// ✅ Conserve l'optimisation dans le moteur JavaScript
let bon = Object.create(listeMethodes);
bon.saluer();

// Doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/create