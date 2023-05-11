/* Des valeurs par défaut pour les paramètres de fonctions */

function saluer(prenom) {
  console.log(`Bonjour ${prenom} !`);
}

// Utilisation avec un argument
saluer("Tom");
// Utilisation sans argument
saluer();

/* Comment définir une valeur par défaut si on ne passe d'argument ? */

/* Ancienne solution 1 (code legacy) */
// function saluer(prenom) {
//   if (prenom === undefined) {
//     prenom = "à toi";
//   }
//   console.log(`Bonjour ${prenom} !`);
// }
// saluer();

/* Ancienne solution 2 (code legacy) */
// function saluer(prenom) {
//   prenom = prenom || "à toi"; // false, "", NaN, 0, -0, undefined, null
//   console.log(`Bonjour ${prenom} !`);
// }
// saluer();

/* Solution moderne (valeur par défaut) */
// function saluer(prenom = "à toi") {
//   console.log(`Bonjour ${prenom} !`);
// }
// saluer();

/* Fonction à plusieurs arguments optionnels */
// function saluer(salutation = "Salut", prenom = "à toi") {
//   console.log(`${salutation} ${prenom} !`);
// }

// saluer();
// saluer("Bonjour");
// saluer("Hello", "Bob");
// saluer(undefined, "Bob");

/* 🏆 Bonne pratique : mettre les arguments optionnels à la fin */
// function saluer(salutation = "Salut", prenom) {
//   console.log(`${salutation} ${prenom} !`);
// }

// saluer(undefined, "Tom"); // ❌
// // Argument obligatoire en 1er, optionnel à la fin
// saluer("Tom");            // ✅
// saluer("Tom", "Bonjour"); // ✅

/* Valeurs par défaut plus complexes : toute expression JavaScript */
// function meteo(ville = { nom: 'Grenoble', codePostal: 38000 }, temperatures = [26, 23]) {
//   temperatures.forEach(function(temperature, index) {
//     console.log(`Jour ${index}: il fera ${temperature}°C à ${ville.nom} (${ville.codePostal})`);
//   });
// }

// meteo();
// meteo({ nom : 'Lyon', codePostal: 69000 }, [31, 34, 28, 23]);
// meteo(undefined, [31, 34, 28, 23]);

// function genererTemperatures(quantite) {
//   let temperatures = [];
//   for (let n = 0; n < quantite; n++) {
//     temperatures.push(Math.floor(35 * Math.random()));
//   }
//   return temperatures;
// }

/* 🤯 Les valeurs par défaut peuvent dépendre des autres paramètres ! */
// 🚨 Ordre d'initialisation de gauche à droite
// function rectangle(largeur = 20, longueur = largeur * 3) {
//   console.log(`Périmètre du rectangle ${largeur}x${longueur} = ${largeur * 2 + longueur * 2}`);
// }

// rectangle();
// rectangle(10);
// rectangle(10, 14);