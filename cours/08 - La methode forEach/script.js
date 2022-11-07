const lis = document.querySelectorAll('li');
// On récupère une NodeList
console.log(lis);

// Avec une boucle for classique
console.log("Boucle for classique");
for (let i = 0; i < lis.length; i++) {
  console.log(i, lis.item(i), lis);
}

// Avec forEach()
console.log("Avec forEach()");
lis.forEach(function (element, index, liste) {
  console.log(index, element, liste);
});

console.log("forEach() sur une DOMTokenList");
lis.forEach(function (element) {
  // classList est une DOMTokenList qui possède une méthode forEach()
  element.classList.forEach(function (classe, index, listeDeClasses) {
    console.log(index, classe, listeDeClasses);
  });
});