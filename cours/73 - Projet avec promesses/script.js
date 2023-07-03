/* Réécriture avec les promesses */

let bouton = document.querySelector('#avecPromesse');
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

        let reponse = JSON.parse(xhr.responseText);

        /* Envoi d'une nouvelle requête pour récupérer les dépôts */
        let xhrDepots = new XMLHttpRequest();
        xhrDepots.open("get", reponse.repos_url, true);

        xhrDepots.onreadystatechange = function() {
          if (xhrDepots.readyState === 4) {
            if (xhrDepots.status === 200 || xhrDepots.status === 304) {
              let listeDepots = JSON.parse(xhrDepots.responseText);
              let premierDepot = listeDepots[0];
              
              /* Envoi d'une nouvelle requête pour récupérer les forks */
              let xhrForks = new XMLHttpRequest();
              xhrForks.open("get", premierDepot.forks_url, true);

              xhrForks.onreadystatechange = function() {
                if (xhrForks.readyState === 4) {
                  if (xhrForks.status === 200 || xhrForks.status === 304) {
                    let listeForks = JSON.parse(xhrForks.responseText);
                    let premierFork = listeForks[0];
                    // On se rend sur le premier fork du premier dépôt
                    window.location = premierFork.html_url;
                  } else {
                    console.log("Impossible de récupérer les forks");
                  }
                }
              }
              xhrForks.send(null);
            } else {
              console.log("Impossible de récupérer les dépôts");
            }
          }
        }
        xhrDepots.send(null);
      } else {
        console.log("Une erreur s'est produite");
      }
    }
  }
  xhr.send(null);
}