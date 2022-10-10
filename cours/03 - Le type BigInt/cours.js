/* Le type BigInt */

// Introduit dans la version ECMAScript 2020 (ES11)
// Le type bigint est un nouveau type primitif 👍
// (Rappel : number, string, boolean, undefined, null + bigint !)
// BigInt : Big Integer
// console.log(42n); // Le suffixe n est pour bigiNt
// console.log(-13n);
// console.log(BigInt(42)); // Pareil que 42n

// 🚨 Attention à ne pas utiliser un nombre déjà trop grand !
let plusQueMaxSafeInteger = 123456789012345678901234;
// console.log(BigInt(plusQueMaxSafeInteger));

// Solution possible, utiliser une chaîne de caractères
// console.log(BigInt("123456789012345678901234"));

/* Pourquoi avoir créé le type BigInt ? */
// Max de la norme IEEE-754 : 2^53 - 1
// console.log(Number.MAX_SAFE_INTEGER);

for (let i = -5; i <= 5; i++) {
  // Affiche les 5 nombres avant et après
  // console.log(`Max + ${i} : ${Number.MAX_SAFE_INTEGER + i}`);
}

// Utilisation de grands nombres ?
// Astronomie, Finance, ID sur de grosses plateformes
// Timestamps de haute précision (nanosecondes)
// https://unixtime.org/
// console.log(JSON.parse('{ "heure_ns": 1665398946123456789 }'));

// Twitter IDs : https://developer.twitter.com/en/docs/twitter-ids
let donnees = JSON.parse('{"id": 10765432100123456789, "id_str": "10765432100123456789"}');
// console.log(donnees);
// Récupération de l'ID au format BigInt
// donnees.id = BigInt(donnees.id_str);
// console.log(donnees);
// 🚨 Le code ci-dessous donnera une valeur imprécise
// donnees.id = BigInt(donnees.id);
// console.log(donnees);

// Autre solution avec le prototype de BigInt
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt#utilisation_avec_json

/* Opérations sur les BigInt */
// Toutes les opérations suivantes : +, *, /, -, **, % MAIS toutes les opérandes doivent être des BigInt !
// 🚨 N'oubliez pas le suffixe 'n' sinon => TypeError:
// Cannot mix BigInt and other types, use explicit conversions
// console.log(15 + 12n); // ❌
// console.log(15n + 12n); // ✅
// console.log(15n * 12n); // ✅
// console.log(15n / 12n); // ✅ 🚨 Division d'entiers seulement, arrondi à l'entier inférieur
// console.log(15n - 12n); // ✅
// console.log(15n ** 12n); // ✅

/* Conversions explicites */
let grandEntier = 1234567890123456789n;
let nombre = 5;
// console.log(grandEntier + nombre); // ❌
/* Conversions BigInt => Number */
let petitNombreBigInt = 42n;
// console.log(Number(petitNombreBigInt) + nombre); // ✅

// 🚨😱 Conversion qui modifie la valeur initial sans prévenir !
// console.log(Number(grandEntier) + nombre); // 💀

/* Opérateur de concaténation 👍 */
// console.log(13n + '37'); // Chaîne "1337"

/* Comparaisons 👍 */
// console.log(5n > 2n); // true
// console.log(3n < 6n); // true
// console.log(5n >= 5n); // true
// console.log(5n <= 5n); // true
// console.log(5n === 5n); // true
// console.log(5n > 2); // true
// console.log(3n < 6); // true
// console.log(5n >= 5); // true
// console.log(5n <= 5); // true
// console.log(5n === 5); // ❌

/* Le type */
// 🚨 Un bigint n'est PAS de type number
let cinq = 5n;
// console.log(typeof cinq); // "bigint"
// console.log(typeof 5n); // "bigint"
// console.log(typeof 1);  // "number"
// Par conséquent...
// console.log(cinq === 5);  // false !

/* Observation du fonctionnement des BigInt */
for (let i = -5; i <= 5; i++) {
  // Affiche les 5 nombres avant et après avec BigInt
  // console.log(`Max + ${i} : ${BigInt(Number.MAX_SAFE_INTEGER) + BigInt(i)}`);
}

/* Limitations */
/* L'opérateur + unaire n'est pas supporté */
// => TypeError: Cannot convert a BigInt value to a number
// console.log(+cinq); // ❌
// console.log(Number(cinq)); // ✅

/* On ne peut pas utiliser la librairie Math */
// => TypeError: Cannot convert a BigInt value to a number
// console.log(Math.abs(10n)); // ❌
// console.log(Math.abs(Number(10n))); // ✅

/* On ne peut convertir un BigInt en format JSON */
// => TypeError: Do not know how to serialize a BigInt
let objetAvecBigInt = {
  id: 1234567890123456789n,
};
// console.log(JSON.stringify(objetAvecBigInt)); // ❌
// Solution : utiliser une librairie comme granola https://github.com/kanongil/granola

/* Liste des valeurs falsy */
// Rappel : 0, -0, "", false, NaN, null, undefined
// Une petite nouvelle : 0n (et aussi -0n) !
// if (0n) {
//   console.log("0n est truthy");
// } else {
//   console.log("0n est falsy");
// }
// if (-0n) {
//   console.log("-0n est truthy");
// } else {
//   console.log("-0n est falsy");
// }

/* Opérations booléenes possibles : ||, &&, ! */
// if (1n || 3) {
//   console.log("1n || 3 est truthy");
// } else {
//   console.log("1n || 3 est falsy");
// }
// if (4 && 0n) {
//   console.log("4 && 0n est truthy");
// } else {
//   console.log("4 && 0n est falsy")
// }

/* C'est nouveau ? Peut-on l'utiliser partout ? */
// Ressource : https://caniuse.com

/* Du coup... on n'a qu'à l'utiliser partout ?! */
// Problème de performances