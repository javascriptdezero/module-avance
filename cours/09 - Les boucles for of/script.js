const lis = document.querySelectorAll('li');
// On récupère une NodeList
console.log(lis);

// Avec for...of
console.log("Avec for...of");
for (let li of lis) {
  console.log(li);
}


console.log("for...of sur une DOMTokenList");
for (let li of lis) {
  for (let classe of li.classList) {
    console.log(classe);
  }
}
