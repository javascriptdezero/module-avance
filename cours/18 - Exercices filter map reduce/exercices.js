/* Exercices de remaniement de code avec les fonctions filter(), map() et reduce() */

// Exercice 0
function longueursPaires(listeMots) {
  let paires = [];
  for (let i = 0; i < listeMots.length; i++) {
    if (listeMots[i].length % 2 === 0) {
      paires.push(listeMots[i]);
    }
  }
  return paires;
}

// Exercice 1
function compteur(liste, valeurACompter) {
  let compteur = 0;
  for (let valeur of liste) {
    if (valeur === valeurACompter) {
      compteur++;
    }
  }
  return compteur;
}

// Exercice 2
function objetsActifs(liste) {
  let objetsActifs = [];
  for (let objet of liste) {
    if (objet.actif) {
      objetsActifs.push(objet);
    }
  }
  return objetsActifs;
}

// Exercice 3
function toutEnMajuscules(listeMots) {
  let resultat = [];
  for (let i = 0; i < listeMots.length; i++) {
    let mot = listeMots[i];
    resultat.push(mot.toUpperCase());
  }
  return resultat;
}

// Exercice 4
function statistiques(texte) {
  let resultat = {};
  for (let i = 0; i < texte.length; i++) {
    let lettre = texte[i];
    if (resultat.hasOwnProperty(lettre)) {
      resultat[lettre]++;
    } else {
      resultat[lettre] = 1;
    }
  }
  return resultat;
}

// Exercice 5
function objetDepuisEntrees(tableauEntrees) {
  let resultat = {};
  for (let valeurs of tableauEntrees) {
    let cle = valeurs[0];
    let valeur = valeurs[1];
    resultat[cle] = valeur;
  }
  return resultat;
}

// Exercice 6
function retirerDoublons(tableaux) {
  let resultat = [];
  for (let i = 0; i < tableaux.length; i++) {
    let sansDoublons = new Set(tableaux[i]);
    resultat.push(Array.from(sansDoublons));
  }
  return resultat;
}

function retirerDoublons(tableaux) {
  return tableaux.map(tableau => Array.from(new Set(tableau)));
}

// Exercice 7
function composerDebutLettre(personnes) {
  let resultat = [];
  for (let i = 0; i < personnes.length; i++) {
    let debutLettre = "A l'attention de ";
    let personne = personnes[i];
    if (personne.genre === "F") {
      debutLettre += "Madame ";
    } else {
      debutLettre += "Monsieur ";
    }
    debutLettre += `${personne.prenom} ${personne.nom}`;
    resultat.push(debutLettre);
  }
  return resultat;
}

// Exercice 8
function statistiquesTwitter(tweets) {
  let resultat = { comments: 0, likes: 0, retweets: 0};
  for (let tweet of tweets) {
    resultat.comments += tweet.comments;
    resultat.likes += tweet.likes;
    resultat.retweets += tweet.retweets;
  }
  return resultat;
}

function statistiquesTwitter(tweets) {
  return tweets.reduce((resultat, tweet) =>
    (resultat.comments += tweet.comments,
    resultat.likes += tweet.likes,
    resultat.retweets += tweet.retweets,
    resultat), { comments: 0, likes: 0, retweets: 0 });
}
