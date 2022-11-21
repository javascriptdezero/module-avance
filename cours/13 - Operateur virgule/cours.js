/* L'opérateur virgule */

/* Syntaxe */
// expression1, expression2, expression3, ...
let a = 1;
let b = 2;
let c = 3;

let d = 42 + (a++, b++, c + 3);

console.log(a, b, c, d);

/* Utilité principale */
// for (expr. initialisation; condition; expr. itération)
// for (let i = 1, j = 10; i <= 10; i++, j--) {
//   console.log(i, j);
// }

/* Attention à la précédence faible de cet opérateur */
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// a = 2 + 3, 5 + 8;
// console.log(a);