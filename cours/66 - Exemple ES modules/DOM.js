let liste = document.querySelector('#liste');
let nom = document.querySelector('#nom');
let bouton = document.querySelector('#bouton');

function ajouterItem(nom) {
  let li = document.createElement('li');
  li.textContent = nom;
  liste.appendChild(li);
}

bouton.addEventListener('click', function() {
  let nomItem = nom.value;
  ajouterItem(nomItem[0].toUpperCase() + nomItem.slice(1));
  nom.value = '';
});

let listeItems = recupererListe();
listeItems.forEach(item => ajouterItem(item));