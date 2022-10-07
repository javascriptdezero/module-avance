/* Le format JSON */

/* Comment le prononce-t-on ? */
// D'après son inventeur Douglas Crockford, comme le prénom "Jason"

/* Qu'est-ce que c'est ? */
// JSON = JavaScript Object Notation
// Format texte d'échanges de données

/* Schéma du principe de transmission de données */
// file://./schema.png

/* 🚨 Indépendant de tout langage de programmation */
// Librairie pour plein de langage Python/Ruby/PHP/Java etc.

/* À quoi ça ressemble ? */
// Fichiers d'exemple dans ce dossier

/* ✅ Ce qu'on peut transmettre comme données */
// strings, numbers, booleans (true ou false), null, objects et arrays

/* ❌ Ce qu'on ne peut PAS transmettre comme données */
// octal, hex, Infinity, NaN, undefined, fonctions, symboles

/* Particularités de formatage */
// Pas de trailing commas
// Toutes les clés doivent être entre double quotes
// Pas de simple quotes ni de backticks
// Pas de commentaires possible

/* 💡 Sous-ensemble du langage JavaScript */

/* Générateur / Analyseur (parser) */
// Générateur : données JavaScript --> JSON.stringify() --> JSON
// Parser : JSON --> JSON.parse() --> données JavaScript

/* Exemples : API Twitter */
// UserID : 926419111030255616
// Tweet : https://twitter.com/JeremyMouzin/status/1573231416732688385
// Playground : https://oauth-playground.glitch.me/

/* Utilités */
// Web Storage API (localStorage) => vu dans le module intermédiaire
// Fichier de configuration (package.json, .vscode/launch.json etc.)
// => JSONC (JSON with comments)

/* Copie profonde (deep clone) d'un objet JS */
// let objetOriginal = {
//   nom: "JavaScript de Zéro",
//   langage: {
//     nom: "JavaScript",
//     version: "ES2022"
//   },
// };
// let copieObjet = objetOriginal;
// let copieObjet = JSON.parse(JSON.stringify(objetOriginal));
// copieObjet.nom = "Java de Zéro";
// console.log(objetOriginal);
