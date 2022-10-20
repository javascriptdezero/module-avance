const input = document.querySelector('input');
let valeur;

/* Le problème */
valeur = input.value;

/* Solution compacte */
// valeur = input ? input.value : "inconnue !";

/* Solution moderne */
// valeur = input?.value ?? "inconnue !";

document.body.append(`La valeur de l'input est : ${valeur}`);