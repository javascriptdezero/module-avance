/* 
Les solutions présentées ici NE sont PAS les seules qui sont valables.
Si les tests passent c'est tout bon 👍.

J'ai noté des solutions alternatives avec les fonctions fléchées même
si on ne les as pas encore vues, certains étudiants sont demandeurs.
*/

// Exercice 0
function sommeDesPositifs(nombres) {
  return nombres.filter(function(nombre) {
    return nombre > 0;
  }).reduce(function (resultat, nombre) {
    return resultat + nombre;
  }, 0);
}

// Exercice 0 : solution alternative avec fonction fléchée
function sommeDesPositifs(nombres) {
  return nombres.filter(nombre => nombre > 0)
    .reduce((resultat, nombre) => resultat + nombre, 0);
}

// Exercice 1
function nombresPaires(nombres) {
  return nombres.filter(function(nombre) {
    return nombre % 2 === 0;
  });
}

// Exercice 1 : solution alternative avec fonction fléchée
function nombresPaires(nombres) {
  return nombres.filter(nombre => nombre % 2 === 0);
}

// Exercice 2
function moyenne(nombres) {
  let sommeDesNombres = nombres.reduce(function(resultat, nombre) {
    return resultat + nombre;
  }, 0);
  // Il faut prendre en compte le cas où il n'y a pas de nombres
  return sommeDesNombres / (nombres.length ? nombres.length : 1);
}

// Exercice 2 : solution plus compacte sans variable intermédiaire
function moyenne(nombres) {
  return nombres.reduce(function(resultat, nombre) {
    return resultat + nombre;
  }, 0) / (nombres.length ? nombres.length : 1);
}

// Exercice 2 : solution alternative avec fonction fléchée
function moyenne(nombres) {
  return nombres.reduce((resultat, nombre) => resultat + nombre, 0) / (nombres.length ? nombres.length : 1);
}

// Exercice 3
function motsAvecEDeLongueurPaire(mots) {
  return mots.filter(function(mot) {
    return mot.length % 2 === 0 && mot.includes('e');
  })
}

// Exercice 3 : solution alternative avec 2 fois filter()
function motsAvecEDeLongueurPaire(mots) {
  return mots.filter(function(mot) {
    return mot.length % 2 === 0;
  }).filter(function(mot) {
    return mot.includes('e');
  })
}

// Exercice 3 : solution alternative avec fonction fléchée
function motsAvecEDeLongueurPaire(mots) {
  return mots.filter(mot => mot.length % 2 === 0 && mot.includes('e'));
}

// Exercice 4
function initialesEnMajuscules(phrase) {
  return phrase.split(' ').map(function(mot) {
    // Il faut prendre en compte le cas où il n'y a pas de mots
    return mot.length > 0 ? mot[0].toUpperCase() : "";
  }).join('');
}

// Exercice 4 : solution alternative avec fonction fléchée
function initialesEnMajuscules(phrase) {
  // Il faut prendre en compte le cas où il n'y a pas de mots
  return phrase.split(' ').map(mot => mot.length > 0 ? mot[0].toUpperCase() : "").join('');
}

// Exercice 5
function abreviations(phrase) {
  return phrase.split(' ').map(function(mot) {
    if (mot.length > 4) {
      return mot[0] + (mot.length - 2) + mot[mot.length - 1];
    }
    return mot;
  }).join(' ');
}

// Exercice 5 : solution alternative avec fonction fléchée
function abreviations(phrase) {
  return phrase.split(' ').map(mot => {
    if (mot.length > 4) {
      return mot[0] + (mot.length - 2) + mot[mot.length - 1];
    }
    return mot;
  }).join(' ');
}

// Exercice 5 : solution alternative plus compacte mais un peu moins lisible
function abreviations(phrase) {
  return phrase.split(' ')
    .map(mot => mot.length > 4 ? mot[0] + (mot.length - 2) + mot[mot.length - 1] : mot)
    .join(' ');
}

// Exercice 6
/*
Il existe PLEIN de façons différentes de faire cet exercice.
Voici UNE solution simple avec le chaînage de méthodes que je vous propose :
1. Isoler l'âge minimum et maximum
2. Filtrer par âge minimum et trier
3. Filtrer par âge maximum et trier
4. Renvoyer le résultat
*/
function lePlusJeuneEtLePlusVieux(personnes) {
  // On cherche la valeur min et max de tous les âges.
  // On transforme avec map les objets en nombres (l'âge)
  // [{ prenom: "Marie", age: 26 }, { prenom: "Bob", age: 12 }] => [26,12]
  // puis on trie le tableau des âges dans l'ordre croissant.
  // Le 1er élément est le min, le dernier le max !
  let agesOrdreCroissant = personnes.map(function(personne) {
    return personne.age;
  }).sort(function(age1, age2) {
    return age1 - age2;
  });
  
  // 1. Isoler l'âge minimum et maximum
  let ageMin = agesOrdreCroissant[0];
  let ageMax = agesOrdreCroissant[agesOrdreCroissant.length - 1];
  
  // On prend en compte le cas où le tableau est vide
  let prenomJeune = null;
  let prenomVieux = null;
  if (personnes.length > 0) {
    // 2. Filtrer par âge minimum et trier
    prenomJeune = personnes.filter(function(personne) {
      return personne.age === ageMin;
    }).sort(function(personne1, personne2) {
      // On classe par ordre alphabétique INVERSE
      return personne2.prenom.localeCompare(personne1.prenom);
    })[0].prenom; // On prend le 1er élément
    
    // 3. Filtrer par âge maximum et trier
    prenomVieux = personnes.filter(function(personne) {
      return personne.age === ageMax;
    }).sort(function(personne1, personne2) {
      // On classe par ordre alphabétique INVERSE
      return personne2.prenom.localeCompare(personne1.prenom);
    })[0].prenom; // On prend le 1er élément
  }

  return [prenomJeune, prenomVieux];
}

// Exercice 6 : solution alternative avec fonction fléchée
function lePlusJeuneEtLePlusVieux(personnes) {
  let agesOrdreCroissant = personnes.map(personne => personne.age)
    .sort((age1, age2) => age1 - age2);
  
  // 1. Isoler l'âge minimum et maximum
  let ageMin = agesOrdreCroissant[0];
  let ageMax = agesOrdreCroissant[agesOrdreCroissant.length - 1];
  
  // On prend en compte le cas où le tableau est vide
  let prenomJeune = null;
  let prenomVieux = null;
  if (personnes.length > 0) {
    // 2. Filtrer par âge minimum et trier
    prenomJeune = personnes
      .filter(personne => personne.age === ageMin)
      .sort((personne1, personne2) => personne2.prenom.localeCompare(personne1.prenom))[0].prenom;
    
    // 3. Filtrer par âge maximum et trier
    prenomVieux = personnes
      .filter(personne => personne.age === ageMax)
      .sort((personne1, personne2) => personne2.prenom.localeCompare(personne1.prenom))[0].prenom;
  }

  return [prenomJeune, prenomVieux];
}

// Exercice 6 : UNE solution possible du challenge BONUS
// On n'effectue qu'une seule boucle !
function lePlusJeuneEtLePlusVieux(personnes) {
  let ageMin = Number.MAX_SAFE_INTEGER;
  let ageMax = Number.MIN_SAFE_INTEGER;
  let prenomJeune = null;
  let prenomVieux = null;

  for (let personne of personnes) {
    // On cherche la personne la plus jeune
    if (personne.age <= ageMin) {
      // Si c'est le premier prénom qu'on rencontre (condition
      // prenomJeune === null) alors on retient son prénom. Si on 
      // a trouvé une personne plus jeune alors on retient son prénom.
      if (prenomJeune === null || personne.age < ageMin) {
        prenomJeune = personne.prenom;
      } else {
        // Ici on est dans le cas où personne.age === ageMin
        // c'est-à-dire 2 personnes ont l'âge minimum
        // Il faut sélectionner le bon prénom en respectant l'ordre
        // alphabétique (on prend le prénom qui vient en dernier)
        if (prenomJeune.localeCompare(personne.prenom) < 0) {
          prenomJeune = personne.prenom;
        }
      }
      // On se souvient de ce nouvel âge minimum
      ageMin = personne.age;
    }

    // On cherche la personne la plus vieille
    if (personne.age >= ageMax) {
      // Si c'est le premier prénom qu'on rencontre (condition
      // prenomVieux === null) alors on retient son prénom. Si on 
      // a trouvé une personne plus vieille alors on retient son prénom.
      if (prenomVieux === null || personne.age > ageMax) {
        prenomVieux = personne.prenom;
      } else {
        // Ici on est dans le cas où personne.age === ageMax
        // c'est-à-dire 2 personnes ont l'âge maximum
        // Il faut sélectionner le bon prénom en respectant l'ordre
        // alphabétique (on prend le prénom qui vient en dernier)
        if (prenomVieux.localeCompare(personne.prenom) < 0) {
          prenomVieux = personne.prenom;
        }
      }
      // On se souvient de ce nouvel âge maximum
      ageMax = personne.age;
    }
  }
  return [prenomJeune, prenomVieux];
}