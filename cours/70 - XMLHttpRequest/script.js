/* XMLHttpRequest */

let bouton = document.querySelector('#avecXHR');
let username = document.querySelector('#username');
let donnees = document.querySelector('#donnees');

bouton.addEventListener('click', function(e) {
  // Ne pas envoyer le formulaire
  e.preventDefault();
  let githubUsername = username.value;
  envoyerRequete(githubUsername);
});

function envoyerRequete(githubUsername) {
  let xhr = new XMLHttpRequest();

  // 🚨 Faille de sécurité possible ici
  xhr.open("get", `https://api.github.com/users/${githubUsername}`, true);
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || xhr.status === 304) {
        donnees.textContent = xhr.responseText;
      } else {
        console.log("Une erreur s'est produite");
      }
    }
  }

  xhr.send(null);
}