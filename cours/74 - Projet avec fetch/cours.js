/* L'API fetch */

// Documentation : https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch

/* La fonction fetch() renvoie une promesse ! */
const promesse = fetch('https://api.github.com/users/javascriptdezero');

promesse
  .then(function(reponse) {
    // 🚨 La promesse de fetch est résolue quand les headers de la réponse HTTP sont
    // reçus, mais le corps de la réponse n'est peut-être pas encore arrivé !
    console.log(reponse.json());
  });