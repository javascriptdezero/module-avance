/* Les classes sont des fonctions */

class Vehicule {
  constructor(roues, places) {
    this.roues = roues;
    this.places = places;
  }
  rouler() {
    console.log("Je roule");
  }
}

class VehiculeAMoteur extends Vehicule {
  constructor(puissance, reservoir, roues, places) {
    super(roues, places);
    this.puissanceMoteur = puissance;
    this.reservoir = reservoir;
  }
  faireLePlein() {
    console.log("Et glou et glou");
    this.reservoir = 100;
  }
}

let voiture = new VehiculeAMoteur(30, 50, 4, 5);
console.log(typeof VehiculeAMoteur);

/* Expression de classe */
let VehiculeAVoile = class extends Vehicule {
  constructor(hauteurMat, roues, places) {
    super(roues, places);
    this.hauteurMat = hauteurMat;
  }
};
let charAVoile = new VehiculeAVoile(4, 3, 1);

/* Fonction de première classe */
function creerNouvelleClasse() {
  return class {
    // ...
  }
}

function instancierObjetAvecClasse(classe) {
  let objet = new classe(2, 3, 1);
  return objet;
}

let objet = instancierObjetAvecClasse(VehiculeAVoile);
console.log(objet);

/* On peut utiliser tout ce qui est exploitable sur une fonction :
- getters / setters
- les propriétés dynamiques
*/

let nomMethode = "bonjour";
class NouvelleClasse {
  constructor() {

  }
  [nomMethode] () {
    console.log("bonjour !");
  }
  get prenom() {
    return this._prenom;
  }
  set prenom(valeur) {
    this._prenom = valeur;
  }
}

let instance = new NouvelleClasse();
instance.bonjour();
instance.prenom = "Tom";
console.log(instance.prenom);