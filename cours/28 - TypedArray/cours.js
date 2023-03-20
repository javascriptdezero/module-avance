/* Le type TypedArray (tableaux typés) */

/* Avant de commencer */

/* Introduit dans ES6 */
// Équivalent aux tableaux des langages fortement typés de bas niveau comme le C/C++

/* Différences avec les tableaux classiques (Arrays) */
// Taille fixe qui doit être indiquée au moment de la création
// Nombres uniquement dont on spécifie le type (signé ou non signé) ainsi que la taille disponible par élément (8 bits à 64 bits)
// Les éléments du tableau sont initialisés à 0 (pas undefined)

/* 11 types de tableaux typés */
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

// Structure de nommage : [U]Int(8|16|32)Array
// [U] = Unsigned = Non signé => nombres >= 0
// Int = Integer = Entier => nombres entiers (sans virgule donc !)
// (8|16|32) = nombre de bits de stockage / élément (1, 2 ou 4 octets), plus on a de bits plus on peut stocker des nombres de grande valeur

// Type spécial : Uint8ClampedArray
// Si on met une valeur < 0 ou > 255, il affecte 0 ou 255 respectivement (plus lent)

/* Les méthodes disponibles */
// Les mêmes que sur les tableaux classiques en JS sauf celles qui modifient la taille du tableau (ex. : push(), pop(), shift(), unshift(), concat(), splice()) ou qui nécessitent que les éléments soient autre chose que des nombres (flat())

// 💡 Pour travailler avec NodeJS et les TypedArray
const { Buffer } = require('node:buffer');

const typedArray = new Uint8Array(3);
typedArray[1] = 260;
console.log(typedArray[1]);
typedArray[0] = -12;
console.log(typedArray[0]);

const clamped = new Uint8ClampedArray(5);
clamped[1] = 260;
console.log(clamped[1]);