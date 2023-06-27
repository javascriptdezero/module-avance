import { listeItems } from "./donnees.js";

const elExporter = document.querySelector('#exporter');

export function clicSurBoutonExporter(e) {
  // - <nom> (<quantite> <unite>)%0D%0A
  let corps = "";
  for (let i = 0; i < listeItems.length; i++) {
    const item = listeItems[i];
    const chaine = `- ${item.nom} (${item.quantite} ${item.unite})%0D%0A`;
    corps += chaine;
  }

  // Construire l'URL de type mailto
  let url = "mailto:jeremy@javascriptdezero.com";
  url += "?subject=Liste de courses";
  url += "&body=" + corps;

  window.location = url;
}

elExporter.addEventListener('click', clicSurBoutonExporter);