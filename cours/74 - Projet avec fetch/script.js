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

  let promesse = new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();

    // 🚨 Faille de sécurité possible ici
    xhr.open("get", `https://api.github.com/users/${githubUsername}`, true);
    
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200 || xhr.status === 304) {
          resolve(xhr.responseText);
        } else {
          reject("Une erreur s'est produite");
        }
      }
    }
    xhr.send(null);
  });

  promesse
    .then(function(resultat) {
      donnees.textContent = resultat;

      /* Envoi d'une nouvelle requête pour récupérer les dépôts */
      return new Promise(function(resolve, reject) {
        let reponse = JSON.parse(resultat);
        let xhrDepots = new XMLHttpRequest();
        xhrDepots.open("get", reponse.repos_url, true);
  
        xhrDepots.onreadystatechange = function() {
          if (xhrDepots.readyState === 4) {
            if (xhrDepots.status === 200 || xhrDepots.status === 304) {
              let listeDepots = JSON.parse(xhrDepots.responseText);
              let premierDepot = listeDepots[0];
              resolve(premierDepot.forks_url);
            } else {
              reject("Impossible de récupérer les dépôts");
            }
          }
        };
        xhrDepots.send(null);
      });
    })
    .then(function(urlForks) {
      /* Envoi d'une nouvelle requête pour récupérer les forks */
      return new Promise(function(resolve, reject) {
        let xhrForks = new XMLHttpRequest();
        xhrForks.open("get", urlForks, true);
  
        xhrForks.onreadystatechange = function() {
          if (xhrForks.readyState === 4) {
            if (xhrForks.status === 200 || xhrForks.status === 304) {
              let listeForks = JSON.parse(xhrForks.responseText);
              let premierFork = listeForks[0];
              resolve(premierFork.html_url);
            } else {
              reject("Impossible de récupérer les forks");
            }
          }
        }
        xhrForks.send(null);
      });
    })
    .then(function(url) {
      window.location = url;
    })
    .catch(function(erreur) {
      console.error(erreur);
    });
}