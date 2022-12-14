/* 
Les solutions présentées ici NE sont PAS les seules qui sont valables.
Si les tests passent c'est tout bon 👍.

J'ai noté des solutions alternatives avec les fonctions fléchées même
si on ne les as pas encore vues, certains étudiants sont demandeurs.
*/

// Exercice 0
function longueursPaires(listeMots) {
  return listeMots.filter(function(mot) {
    return mot.length % 2 === 0;
  });
}

// Exercice 0 : solution alternative avec fonction fléchée
function longueursPaires(listeMots) {
  return listeMots.filter(mot => mot.length % 2 === 0);
}

// Exercice 1
function compteur(liste, valeurACompter) {
  return liste.reduce(function (resultat, valeur) {
    if (valeur === valeurACompter) {
      resultat += 1;
    }
    return resultat;
  }, 0);
}

// Exercice 1 : solution alternative plus compacte
function compteur(liste, valeurACompter) {
  return liste.reduce(function (resultat, valeur) {
    return (valeur === valeurACompter) ? resultat + 1 : resultat;
  }, 0);
}

// Exercice 1 : solution alternative avec fonction fléchée
function compteur(liste, valeurACompter) {
  return liste.reduce((resultat, valeur) => (valeur === valeurACompter) ? resultat + 1 : resultat, 0);
}

// Exercice 2
function objetsActifs(liste) {
  return liste.filter(function(valeur) {
    return valeur.actif;
  });
}

// Exercice 2 : solution alternative avec fonction fléchée
function objetsActifs(liste) {
  return liste.filter(valeur => valeur.actif);
}

// Exercice 3
function toutEnMajuscules(listeMots) {
  return listeMots.map(function (mot) {
    return mot.toUpperCase();
  });
}

// Exercice 3 : solution alternative avec fonction fléchée
function toutEnMajuscules(listeMots) {
  return listeMots.map(mot => mot.toUpperCase());
}

// Exercice 4
function statistiques(texte) {
  // Il y a plein de façon différentes de convertir une
  // chaîne en tableau, on aurait pu utliser texte.split('')
  // aussi ou [...texte] qu'on verra plus tard 😉
  return Array.from(texte).reduce(function (resultat, lettre) {
    if (resultat.hasOwnProperty(lettre)) {
      resultat[lettre]++;
    } else {
      resultat[lettre] = 1;
    }
    return resultat;
  }, {});
}

// Exercice 4 : solution alternative plus compacte avec l'opérateur ternaire et de pré-incrémentation
function statistiques(texte) {
  return Array.from(texte).reduce(function (resultat, lettre) {
    resultat[lettre] = resultat.hasOwnProperty(lettre) 
      ? ++resultat[lettre]
      : 1;
    return resultat;
  }, {});
}

// Exercice 4 : solution alternative encore plus compacte
// avec l'opérateur virgule
function statistiques(texte) {
  return Array.from(texte).reduce(function (resultat, lettre) {
    return resultat[lettre] = resultat.hasOwnProperty(lettre) 
      ? ++resultat[lettre]
      : 1, resultat;
  }, {});
}

// Exercice 4 : solution ultra compacte avec fonction 
// fléchée mais moins lisible vous avouerez !
function statistiques(texte) {
  return Array.from(texte).reduce((resultat, lettre) =>
    (resultat[lettre] = resultat.hasOwnProperty(lettre) 
      ? ++resultat[lettre]
      : 1, resultat), {});
}

// Exercice 5
function objetDepuisEntrees(tableauEntrees) {
  return tableauEntrees.reduce(function (resultat, valeur) {
    resultat[valeur[0]] = valeur[1];
    return resultat;
  }, {});
}

// Exercice 5 : solution alternative plus compacte avec l'opérateur
// virgule
function objetDepuisEntrees(tableauEntrees) {
  return tableauEntrees.reduce(function (resultat, valeur) {
    return resultat[valeur[0]] = valeur[1], resultat;
  }, {});
}

// Exercice 5 : encore plus compacte avec une fonction fléchée
function objetDepuisEntrees(tableauEntrees) {
  return tableauEntrees.reduce((resultat, valeur) => (resultat[valeur[0]] = valeur[1], resultat), {});
}

// Exercice 6
function retirerDoublons(tableaux) {
  return tableaux.map(function (tableau) {
    let sansDoublons = new Set(tableau);
    return Array.from(sansDoublons);
  });
}

// Exercice 6 : solution alternative plus compacte sans variable
// intermédiaire
function retirerDoublons(tableaux) {
  return tableaux.map(function (tableau) {
    return Array.from(new Set(tableau));
  });
}

// Exercice 6 : solution alternative avec fonction fléchée
function retirerDoublons(tableaux) {
  return tableaux.map(tableau => Array.from(new Set(tableau)));
}

// Exercice 7
function composerDebutLettre(personnes) {
  return personnes.map(function (personne) {
    let debutLettre = "A l'attention de ";
    if (personne.genre === "F") {
      debutLettre += "Madame ";
    } else {
      debutLettre += "Monsieur ";
    }
    debutLettre += `${personne.prenom} ${personne.nom}`;
    return debutLettre;
  });
}

// Exercice 7 : solution alternative plus compacte grâce aux 
// template strings
function composerDebutLettre(personnes) {
  return personnes.map(function (personne) {
    return `A l'attention de ${personne.genre === "F" ? "Madame" : "Monsieur"} ${personne.prenom} ${personne.nom}`;
  });
}

// Exercice 7 : solution alternative avec fonction fléchée
function composerDebutLettre(personnes) {
  return personnes.map(personne =>
    `A l'attention de ${personne.genre === "F" ? "Madame" : "Monsieur"} ${personne.prenom} ${personne.nom}`);
}

// Exercice 8
function statistiquesTwitter(tweets) {
  return tweets.reduce(function (resultat, tweet) {
    resultat.comments += tweet.comments;
    resultat.likes += tweet.likes;
    resultat.retweets += tweet.retweets;
    return resultat;
  }, { comments: 0, likes: 0, retweets: 0 });
}

// Exercice 8 : solution alternative avec l'opérateur virgule
function statistiquesTwitter(tweets) {
  return tweets.reduce(function (resultat, tweet) {
    return resultat.comments += tweet.comments,
    resultat.likes += tweet.likes,
    resultat.retweets += tweet.retweets,
    resultat;
  }, { comments: 0, likes: 0, retweets: 0 });
}

// Exercice 8 : avec une fonction fléchée
function statistiquesTwitter(tweets) {
  return tweets.reduce((resultat, tweet) =>
    (resultat.comments += tweet.comments,
    resultat.likes += tweet.likes,
    resultat.retweets += tweet.retweets,
    resultat), { comments: 0, likes: 0, retweets: 0 });
}

