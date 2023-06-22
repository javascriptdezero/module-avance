/* Les classes */

/* Après ES6 avec le mot-clé class */
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