/*
 * N'hésitez pas à jeter un oeil 👁 sur ce code et à me prévenir
 * si vous rencontrez un bogue !
 *
 * Vous pouvez me joindre par email sur jeremy@javascriptdezero.com
 *
 * Merci 👍
 */

const tests = {};

function ajouterTest(idExercice, nomFonction, {
  entrees,
  descriptionEntrees = null,
  sortie,
}) {
  if (!tests[nomFonction]) {
    tests[nomFonction] = [];
  }
  tests[nomFonction].push({
    idExercice,
    entrees,
    descriptionEntrees,
    sortie,
  });
}

// Exercice 0
let descriptionEntrees = ["nombres"];
ajouterTest(0, "sommeDesPositifs", {
  entrees: [[0,1,12,34,-5,-2,-8,6,29]],
  descriptionEntrees,
  sortie: 82,
});
ajouterTest(0, "sommeDesPositifs", {
  entrees: [[]],
  descriptionEntrees,
  sortie: 0,
});
ajouterTest(0, "sommeDesPositifs", {
  entrees: [[-5,-2,-8]],
  descriptionEntrees,
  sortie: 0,
});

// Exercice 1
descriptionEntrees = ["nombres"];
ajouterTest(1, "nombresPaires", {
  entrees: [[1,2,5,2,8,1,5,13,55,5,4]],
  descriptionEntrees,
  sortie: [2,2,8,4],
});
ajouterTest(1, "nombresPaires", {
  entrees: [[]],
  descriptionEntrees,
  sortie: [],
});
ajouterTest(1, "nombresPaires", {
  entrees: [[1,3,5,7]],
  descriptionEntrees,
  sortie: [],
});

// Exercice 2
descriptionEntrees = ["nombres"];
ajouterTest(2, "moyenne", {
  entrees: [[2,5,2,8,1,5,13,55,5,4]],
  descriptionEntrees,
  sortie: 10,
});
ajouterTest(2, "moyenne", {
  entrees: [[]],
  descriptionEntrees,
  sortie: 0,
});
ajouterTest(2, "moyenne", {
  entrees: [[0,0,0,0]],
  descriptionEntrees,
  sortie: 0,
});
ajouterTest(2, "moyenne", {
  entrees: [[1,3,5,7]],
  descriptionEntrees,
  sortie: 4,
});

// Exercice 3
descriptionEntrees = ["mots"];
ajouterTest(3, "motsAvecEDeLongueurPaire", {
  entrees: [["développeur","étudie","vaincre","et","non","pourquoi","pas","joyeux"]],
  descriptionEntrees,
  sortie: ["étudie","et","joyeux"],
});
ajouterTest(3, "motsAvecEDeLongueurPaire", {
  entrees: [["trois","quad","heros","vendu"]],
  descriptionEntrees,
  sortie: [],
});
ajouterTest(3, "motsAvecEDeLongueurPaire", {
  entrees: [[]],
  descriptionEntrees,
  sortie: [],
});

// Exercice 4
descriptionEntrees = ["phrase"];
ajouterTest(4, "initialesEnMajuscules", {
  entrees: ["apprendre le javascript est parfois difficile mais il ne faut rien lâcher"],
  descriptionEntrees,
  sortie: "ALJEPDMINFRL",
});
ajouterTest(4, "initialesEnMajuscules", {
  entrees: [""],
  descriptionEntrees,
  sortie: "",
});

// Exercice 5
descriptionEntrees = ["phrase"];
ajouterTest(5, "abreviations", {
  entrees: ["apprendre le javascript est parfois difficile mais il ne faut rien lâcher"],
  descriptionEntrees,
  sortie: "a7e le j8t est p5s d7e mais il ne faut rien l4r",
});
ajouterTest(5, "abreviations", {
  entrees: ["Il est temps de se coucher"],
  descriptionEntrees,
  sortie: "Il est t3s de se c5r",
});
ajouterTest(5, "abreviations", {
  entrees: [""],
  descriptionEntrees,
  sortie: "",
});

// Exercice 6
descriptionEntrees = ["personnes"];
ajouterTest(6, "lePlusJeuneEtLePlusVieux", {
  entrees: [[
    {
      prenom: "Marie",
      age: 25,
    }
  ]],
  descriptionEntrees,
  sortie: ["Marie", "Marie"],
});
ajouterTest(6, "lePlusJeuneEtLePlusVieux", {
  entrees: [[]],
  descriptionEntrees,
  sortie: [null, null],
});
ajouterTest(6, "lePlusJeuneEtLePlusVieux", {
  entrees: [[
    {
      prenom: "Marie",
      age: 25,
    },
    {
      prenom: "Jean",
      age: 12,
    },
    {
      prenom: "Jacques",
      age: 48,
    },
  ]],
  descriptionEntrees,
  sortie: ["Jean", "Jacques"],
});
ajouterTest(6, "lePlusJeuneEtLePlusVieux", {
  entrees: [[
    {
      prenom: "Dominique",
      age: 34,
    },
    {
      prenom: "Sophie",
      age: 25,
    },
    {
      prenom: "Jacques",
      age: 48,
    },
    {
      prenom: "Michael",
      age: 25,
    },
  ]],
  descriptionEntrees,
  sortie: ["Sophie", "Jacques"],
});
ajouterTest(6, "lePlusJeuneEtLePlusVieux", {
  entrees: [[
    {
      prenom: "Sophie",
      age: 25,
    },
    {
      prenom: "Dominique",
      age: 34,
    },
    {
      prenom: "Jacques",
      age: 48,
    },
    {
      prenom: "Michael",
      age: 25,
    },
    {
      prenom: "Bénédicte",
      age: 48,
    },
  ]],
  descriptionEntrees,
  sortie: ["Sophie", "Jacques"],
});

lancerTousLesTests();

// Code qui vient tester tous les exercices remplis par l'étudiant
function lancerTousLesTests() {
  Object.keys(tests).forEach((nomFonction) => {
    // Si la fonction a été déclarée par l'étudiant, on teste son code
    if (typeof window[nomFonction] !== "undefined") {
      let continuerTests = true;
      tests[nomFonction].forEach((test, numeroTest, listeTests) => {
        if (continuerTests) {
          // Sauvegarde des entrées originales qui peuvent être modifiées par l'étudiant à l'intérieur
          // de la fonction. Ça permet d'afficher les entrées d'origine dans le message d'erreur.
          const entreesOriginales = test.entrees.map(dupliquerValeur);
          
          // Exécute la fonction de l'étudiant
          let valeurRetour = (entreesOriginales === null) ? window[nomFonction]() : window[nomFonction](...entreesOriginales);

          let valeursIdentiques = comparerSimplement(valeurRetour, test.sortie);

          if (valeursIdentiques) {
            let bonneReponse = formaterObjet(test.sortie);
            enonces.definirSucces(enonces.liste[test.idExercice], bonneReponse);
          } else {
            const valeurRecue = formaterObjet(valeurRetour);
            const valeurAttendue = construireMessageErreur(test, numeroTest, listeTests.length);
            enonces.definirEchec(enonces.liste[test.idExercice], { valeurRecue, valeurAttendue });

            continuerTests = false;
          }
        }
      });
    }
  });
}

/* Duplique superficiellement (shallow copy) un objet ou tableau */
function dupliquerValeur(valeur) {
  if (Array.isArray(valeur)) {
    // On renvoie un nouveau tableau identique
    return [...valeur];
  } else if (typeof valeur === "object") {
    // On renvoie un nouvel objet identique
    return {...valeur};
  } else {
    // On renvoie la valeur primitive
    return valeur;
  }
}

function formaterObjet(valeur) {
  if (typeof valeur === "object") {
    return JSON.stringify(valeur);
  }
  return valeur;
}

function comparerSimplement(valeur1, valeur2) {
  if (typeof valeur1 !== typeof valeur2) return false;

  if (Array.isArray(valeur1) && Array.isArray(valeur2)) {
    // Au préalable on vérifie qu'ils ont le même nombre d'éléments
    if (valeur1.length !== valeur2.length) return false;
    // Comparaison, élément par élément
    for (let i = 0, l = valeur1.length; i < l; i++) {
      if (!comparerSimplement(valeur1[i],valeur2[i])) return false;
    }
    return true;
  } else if (typeof valeur1 === "object" && valeur1 !== null && valeur2 !== null) {
    // On vérifie qu'il y a le même nombre de clés
    if (Object.keys(valeur1).length !== Object.keys(valeur2).length) return false;
    for (cle in valeur1) {
      if (valeur1[cle] !== valeur2[cle]) return false;
    }
    return true;
  } else {  
    return valeur1 === valeur2;
  }
}

function construireMessageErreur(test, numeroTest, nombreDeTests) {
  let messageErreur = formaterObjet(test.sortie);
  messageErreur += '\n';

  if (test.descriptionEntrees !== null) {
    if (test.descriptionEntrees.length > 1) {
      messageErreur += '\n→ pour les arguments ';
      let listeDescriptionValeur = [];
      test.descriptionEntrees.forEach((description, index) => {
        listeDescriptionValeur.push(formateArgumentEtValeurHtml(description, test.entrees[index]));
      });
      messageErreur += listeDescriptionValeur.join(" et ");
    } else {
      messageErreur += `\n→ pour l'argument ${formateArgumentEtValeurHtml(test.descriptionEntrees[0], test.entrees[0])}`;
    }
    let pourcentageReussi = 100 * numeroTest / nombreDeTests;
    if (!Number.isInteger(pourcentageReussi)) {
      pourcentageReussi = pourcentageReussi.toFixed(2);
    }
    messageErreur += `\n\n<p class="indication-tests-reussis">Tests réussis : <strong>${pourcentageReussi}%</strong></p>`;
  }
  return messageErreur;
}

function formateArgumentEtValeurHtml(nomArgument, valeur) {
  return `<strong>${nomArgument}</strong> = <code>${formaterObjet(valeur)}</code>`;
}