/* Classes VS Constructeurs */

class Vehicule {
  constructor(roues, places) {
    this.roues = roues;
    this.places = places;
  }
  rouler() {
    console.log("Je roule");
  }
}

let velo = new Vehicule(2, 1);
velo.rouler();

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
voiture.faireLePlein();
voiture.rouler();

/* Avantages des classes :
- Erreur si invocation sans new
- for...in n'indique pas les méthodes
- Tout le code est en mode strict
*/