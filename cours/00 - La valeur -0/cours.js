/* La valeur -0 */
let zeroNeg = -0;
let zero = 0; // +0

// Valeur positive la plus proche de zéro
// console.log(Number.MIN_VALUE);
// Notation scientifique : écrire des nombres très petits ou très grands facilement et de façon compacte
// 5e-324 = 5 x 10^-324 = 5 x 1 / 10^324 = 5 / 10^324 = 0.0000000000...(324 zéros!)...0000000005
// 421337 = 4,21337e5 = 4,21337 x 10^5 = 4,21337 x 10000 = 421337

// Valeur négative la plus proche de zéro
// console.log(-Number.MIN_VALUE);
// Encore plus petit que ça ?
// console.log(-Number.MIN_VALUE / 2);

/* D'autres façons d'obtenir -0 */
// console.log(1 / -Infinity);
// console.log(0 / -42);

/* Pourquoi cette valeur existe ? Norme IEEE-754 */
// En savoir plus :
// - https://www.youtube.com/watch?v=Jk9Tl3MR1KM
// - https://www.youtube.com/watch?v=PtFa7LhV96E
// Et le -0 ? C'est le bit de signe qui est à 1 et la valeur numérique qui est à 0.

/* Un résultat étrange */
// console.log(0.1 + 0.2);
// Vidéo : https://www.youtube.com/watch?v=PZRI1IfStY0 (en anglais)

/* Quelle est l'utilité du -0 ? */
// Conserver l'information de signe !
// - Courbe : file://./courbe-1-sur-x.png
// - Direction d'un objet sur une carte
// - Variation d'une valeur numérique (T°C, prix etc.)

/* Problème : comment différencier -0 de 0 ? */
// let vitesse = -0;
// console.log("vitesse === -0 :", vitesse === -0); // true
// console.log("vitesse === 0 :", vitesse === 0); // true 😭

/* Code Legacy (avant ES6) */
// Particularité
// console.log("1/0 :", 1/0);   // Infinity
// console.log("1/-0 :", 1/-0); // -Infinity
// console.log("zeroNeg === zero :", zeroNeg === -0);
// console.log("1/zeroNeg === 1/zero :", 1/zeroNeg === 1/zero); // ✅ -Infinity !== Infinity

/* Object.is (ES6 - ES2015) */
// console.log("Object.is(zeroNeg, 0) :", Object.is(zeroNeg, 0));

/* Rappel avec NaN */
// let valeur = NaN;
// console.log("valeur === NaN :", valeur === NaN);
// console.log("Object.is(valeur, NaN) :", Object.is(valeur, NaN));

/* Math.sign */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
// console.log(Math.sign(zero));
// console.log(Math.sign(zeroNeg));