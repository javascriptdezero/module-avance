/* Réécriture avec l'API fetch */

let bouton = document.querySelector('#avecFetch');
let username = document.querySelector('#username');
let donnees = document.querySelector('#donnees');

bouton.addEventListener('click', function(e) {
  // Ne pas envoyer le formulaire
  e.preventDefault();
  let githubUsername = username.value;
  envoyerRequete(githubUsername);
});

function envoyerRequete(githubUsername) {
  fetch(`https://api.github.com/users/${githubUsername}`)
    .then(resultat => resultat.json())
    .then(function(reponse) {   
      donnees.textContent = JSON.stringify(reponse);
      return fetch(reponse.repos_url);
    })
    .then(reponse => reponse.json())
    .then(depots => fetch(depots[0].forks_url))
    .then(reponse => reponse.json())
    .then(function(urls) {
      window.location = urls[0].html_url;
    })
    .catch(console.error);
}