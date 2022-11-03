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

// Ajout des tests des exos
const VALEUR_FALSY = [0, -0, 0n, -0, '', false, null, undefined, NaN];
const VALEUR_INDEFINIES = [null, undefined];

// Exercice 0
let descriptionEntrees = ["process"];
VALEUR_FALSY.forEach(valeur => {
  ajouterTest(0, "getDatabaseHost", {
    entrees: [{
      "env": {
        "DB_HOST": valeur,
      }
    }],
    descriptionEntrees,
    sortie: 'localhost',
  });
});
ajouterTest(0, "getDatabaseHost", {
  entrees: [{
    "env": {
      "DB_HOST": "217.70.185.65",
    }
  }],
  descriptionEntrees,
  sortie: "217.70.185.65",
});

// Exercice 1
descriptionEntrees = ["type", "quantite"];
ajouterTest(1, "definirIndentation", {
  entrees: ["espaces", 4],
  descriptionEntrees,
  sortie: "4 espaces",
});
ajouterTest(1, "definirIndentation", {
  entrees: ["tabulation", 1],
  descriptionEntrees,
  sortie: "1 tabulation",
});
ajouterTest(1, "definirIndentation", {
  entrees: ["tabulations", 3],
  descriptionEntrees,
  sortie: "3 tabulations",
});
for (type of VALEUR_FALSY) {
  for (quantite of VALEUR_FALSY) {
    ajouterTest(1, "definirIndentation", {
      entrees: [type, quantite],
      descriptionEntrees,
      sortie: "2 espaces",
    });
  }
}

// Exercice 2
descriptionEntrees = ["pixels"];
VALEUR_INDEFINIES.forEach(pixels => {
  ajouterTest(2, "getPaddingMax", {
    entrees: [pixels],
    descriptionEntrees,
    sortie: 8,
  });
});
ajouterTest(2, "getPaddingMax", {
  entrees: [0],
  descriptionEntrees,
  sortie: 8,
});
ajouterTest(2, "getPaddingMax", {
  entrees: [12],
  descriptionEntrees,
  sortie: 20,
});
ajouterTest(2, "getPaddingMax", {
  entrees: [55],
  descriptionEntrees,
  sortie: 63,
});
ajouterTest(2, "getPaddingMax", {
  entrees: [56],
  descriptionEntrees,
  sortie: 64,
});
ajouterTest(2, "getPaddingMax", {
  entrees: [57],
  descriptionEntrees,
  sortie: 64,
});

// Exercice 3
descriptionEntrees = ["client"];
ajouterTest(3, "extraireNumeroAdresse", {
  entrees: [{
    adresse: {
      numero: 42,
    }
  }],
  descriptionEntrees,
  sortie: 42,
});
ajouterTest(3, "extraireNumeroAdresse", {
  entrees: [{
    adresse: {
      numero: 0,
    }
  }],
  descriptionEntrees,
  sortie: 0,
});
ajouterTest(3, "extraireNumeroAdresse", {
  entrees: [undefined],
  descriptionEntrees,
  sortie: undefined,
});
ajouterTest(3, "extraireNumeroAdresse", {
  entrees: [null],
  descriptionEntrees,
  sortie: undefined,
});

// Exercice 4
descriptionEntrees = ["client"];
ajouterTest(4, "extraireNumeroAdresseOuErreur", {
  entrees: [{
    adresse: {
      numero: 42,
    }
  }],
  descriptionEntrees,
  sortie: 42,
});
ajouterTest(4, "extraireNumeroAdresseOuErreur", {
  entrees: [{
    adresse: {
      numero: 0,
    }
  }],
  descriptionEntrees,
  sortie: 0,
});
ajouterTest(4, "extraireNumeroAdresseOuErreur", {
  entrees: [undefined],
  descriptionEntrees,
  sortie: "Erreur",
});
ajouterTest(4, "extraireNumeroAdresseOuErreur", {
  entrees: [null],
  descriptionEntrees,
  sortie: "Erreur",
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
          const entreesOriginales = test.entrees.map(entree => (entree !== null && typeof entree === "object") ? { ...entree } : entree);

          // Exécute la fonction de l'étudiant
          let valeurRetour = (entreesOriginales === null) ? window[nomFonction]() : window[nomFonction](...entreesOriginales);
          let valeursIdentiques = valeurRetour === test.sortie;
          let doitRenvoyerUnObjet = typeof test.sortie === "object";

          if (doitRenvoyerUnObjet) {
            if (valeurRetour) {
              // Vérifie qu'il y a le même nombre de propriétés dans chaque objet à comparer
              valeursIdentiques = Object.keys(valeurRetour).length === Object.keys(test.sortie).length;
              // Vérifie que toutes les valeurs de propriétés sont les mêmes
              for (let cle in valeurRetour) {
                if (valeurRetour[cle] !== test.sortie[cle]) {
                  valeursIdentiques = false;
                }
              }
            }

            // On affiche l'objet sous la forme d'une chaîne de caractères
            valeurRetour = JSON.stringify(valeurRetour);
            test.sortie = JSON.stringify(test.sortie);
          }

          if (valeursIdentiques) {
            valeurRetour = formaterPourLeHtml(valeurRetour);
            enonces.definirSucces(enonces.liste[test.idExercice], test.sortie);
          } else {
            // Affiche les arguments d'entrée sous la forme d'une chaîne de caractères
            test.entrees = test.entrees.map(entree => (entree !== null && typeof entree === "object") ? JSON.stringify(entree) : entree);

            const valeurRecue = formaterPourLeHtml(valeurRetour);
            const valeurAttendue = formaterPourLeHtml(construireMessageErreur(test, numeroTest, listeTests.length));
            enonces.definirEchec(enonces.liste[test.idExercice], { valeurRecue, valeurAttendue });

            if (doitRenvoyerUnObjet) {
              document.querySelector(".message.echec").innerHTML = document.querySelector(".message.echec").innerHTML.replace("affiche", "renvoie").replace("afficher", "renvoyer");
            }

            continuerTests = false;
          }
        }
      });
    }
  });
}

function construireMessageErreur(test, numeroTest, nombreDeTests) {
  let messageErreur = `${test.sortie}\n`;

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
  return `<strong>${nomArgument}</strong> = <code>${valeur}</code>`;
}