/* Qu'est-ce qu'un timestamp ? */

// Timestamp 🇬🇧 = horodatage 🇫🇷

/* Unix Epoch Time (Heure de l'époque Unix) */
// Temps en millisecondes depuis le 1er Janvier 1970 à 00:00:00
const ms = Date.now();
console.log(ms);

/* Et pour avant ? Nombres négatifs : */
// console.log(new Date(ms));
// console.log(new Date(-ms));

/* Outils de conversion en ligne */
// https://unixtime.org/

/* Nouvelle API Temporal */
// Précision à la nanoseconde !
// https://tc39.es/proposal-temporal/docs/index.html