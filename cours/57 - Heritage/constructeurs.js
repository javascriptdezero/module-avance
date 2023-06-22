/* Les constructeurs */

function Vehicule(roues, places) {
  this.roues = roues;
  this.places = places;
}
Vehicule.prototype.rouler = function() {
  console.log("Je roule");
}

let velo = new Vehicule(2, 1);
velo.rouler();

function VehiculeAMoteur(puissance, reservoir, roues, places) {
  Vehicule.call(this, roues ,places);
  this.puissanceMoteur = puissance;
  this.reservoir = reservoir;
}
VehiculeAMoteur.prototype = Object.create(Vehicule.prototype);
VehiculeAMoteur.prototype.constructor = VehiculeAMoteur;
VehiculeAMoteur.prototype.faireLePlein = function() {
  console.log("Et glou et glou");
}

let voiture = new VehiculeAMoteur(100, 50, 4, 5);
voiture.faireLePlein();
voiture.rouler();