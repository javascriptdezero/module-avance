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
let descriptionEntrees = ["listeMots"];
ajouterTest(0, "longueursPaires", {
  entrees: [[]],
  descriptionEntrees,
  sortie: [],
});
ajouterTest(0, "longueursPaires", {
  entrees: [["armoire", "roue", "vis", "siège", "cycliste", "marteau", "guidon"]],
  descriptionEntrees,
  sortie: ["roue", "cycliste", "guidon"],
});

// Exercice 1
descriptionEntrees = ["liste", "valeurACompter"];
ajouterTest(1, "compteur", {
  entrees: [[1,2,5,2,8,1,"5",5,13,55,5], 42],
  descriptionEntrees,
  sortie: 0,
});
ajouterTest(1, "compteur", {
  entrees: [[1,2,5,2,8,1,"5",5,13,55,5], 5],
  descriptionEntrees,
  sortie: 3,
});
ajouterTest(1, "compteur", {
  entrees: [["un", "deux", "trois","un", "un", "un"], "quatre"],
  descriptionEntrees,
  sortie: 0,
});
ajouterTest(1, "compteur", {
  entrees: [["un", "deux", "trois","un", "un", "un"], "un"],
  descriptionEntrees,
  sortie: 4,
});

// Exercice 2
descriptionEntrees = ["liste"];
const objet1 = { actif: true, valeur: 1 };
const objet2 = { actif: false, valeur: 2 };
const objet3 = { actif: false, valeur: 3 };
const objet4 = { actif: true, valeur: 4 };
ajouterTest(2, "objetsActifs", {
  entrees: [[objet1, objet4]],
  descriptionEntrees,
  sortie: [objet1, objet4],
});
ajouterTest(2, "objetsActifs", {
  entrees: [[objet2, objet3]],
  descriptionEntrees,
  sortie: [],
});
ajouterTest(2, "objetsActifs", {
  entrees: [[objet1, objet2, objet3, objet4]],
  descriptionEntrees,
  sortie: [objet1, objet4],
});

// Exercice 3
descriptionEntrees = ["liste"];
ajouterTest(3, "toutEnMajuscules", {
  entrees: [[]],
  descriptionEntrees,
  sortie: [],
});
ajouterTest(3, "toutEnMajuscules", {
  entrees: [["pas", "si", "facile", "hein?"]],
  descriptionEntrees,
  sortie: ["PAS", "SI", "FACILE", "HEIN?"],
});

// Exercice 4
descriptionEntrees = ["texte"];
ajouterTest(4, "statistiques", {
  entrees: [""],
  descriptionEntrees,
  sortie: {},
});
ajouterTest(4, "statistiques", {
  entrees: ["Voici un long texte dont il va falloir faire des statistiques dessus avec du JavaScript"],
  descriptionEntrees,
  sortie: {"V":1,"o":4,"i":8,"c":3," ":14,"u":4,"n":3,"l":4,"g":1,"t":7,"e":7,"x":1,"d":4,"v":3,"a":7,"f":2,"r":3,"s":7,"q":1,"J":1,"S":1,"p":1},
});

// Exercice 5
descriptionEntrees = ["tableauEntrees"];
ajouterTest(5, "objetDepuisEntrees", {
  entrees: [[]],
  descriptionEntrees,
  sortie: {},
});
ajouterTest(5, "objetDepuisEntrees", {
  entrees: [[["cle1", "valeur1"], ["cle2", 42], ["cle3", true]]],
  descriptionEntrees,
  sortie: { cle1: "valeur1", cle2: 42, cle3: true},
});

// Exercice 6
descriptionEntrees = ["tableaux"];
ajouterTest(6, "retirerDoublons", {
  entrees: [[]],
  descriptionEntrees,
  sortie: [],
});
ajouterTest(6, "retirerDoublons", {
  entrees: [[[1,2,2,true,false,false,"un","un"], ["un","un","deux","trois"], [true, false, true]]],
  descriptionEntrees,
  sortie: [[1,2,true,false,"un"], ["un","deux","trois"], [true, false]],
});

// Exercice 7
descriptionEntrees = ["personnes"];
ajouterTest(7, "composerDebutLettre", {
  entrees: [[]],
  descriptionEntrees,
  sortie: [],
});
ajouterTest(7, "composerDebutLettre", {
  entrees: [[{genre: "M", prenom: "Tom", nom: "Redocemia"},
            {genre: "F", prenom: "Anna", nom: "Dupont"}]],
  descriptionEntrees,
  sortie: ["A l'attention de Monsieur Tom Redocemia",
          "A l'attention de Madame Anna Dupont"],
});

// Exercice 8
descriptionEntrees = ["tweets"];
ajouterTest(8, "statistiquesTwitter", {
  entrees: [[{comments: 0, likes: 0, retweets: 0},
    {comments: 0, likes: 0, retweets: 0},
    {comments: 0, likes: 0, retweets: 0},
    {comments: 0, likes: 0, retweets: 0},
  ]],
  descriptionEntrees,
  sortie: {comments: 0, likes: 0, retweets: 0},
});
ajouterTest(8, "statistiquesTwitter", {
  entrees: [[{comments: 5, likes: 8, retweets: 4},
    {comments: 16, likes: 251, retweets: 2},
    {comments: 180, likes: 43, retweets: 1},
    {comments: 90, likes: 8, retweets: 9},
  ]],
  descriptionEntrees,
  sortie: {comments: 291, likes: 310, retweets: 16},
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
  } else if (typeof valeur1 === "object") {
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