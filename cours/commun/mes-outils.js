/*
 * N'hésitez pas à jeter un oeil 👁 sur ce code et à me prévenir
 * si vous rencontrez un bogue !
 *
 * Vous pouvez me joindre par email sur jeremy@javascriptdezero.com
 *
 * Merci 👍
 */

/* eslint-disable no-unused-vars */
const classesCSS = {
  enonce: 'enonce',
  message: 'message',
  succes: 'succes',
  echec: 'echec',
};

const enonces = {
  attente: 'En attente de code à tester... À vous de jouer !',
  echec: "Ce n'est pas la bonne réponse... 😭 Réessayez !",

  extraireMessage(enonce) {
    return enonce.getElementsByClassName(classesCSS.message)[0];
  },
  definirAttente(enonce) {
    enonce.classList.remove(classesCSS.echec);
    enonce.classList.remove(classesCSS.succes);
    enonce.classList.add(classesCSS.enonce);
    const message = this.extraireMessage(enonce);
    if (message !== undefined) {
      message.classList = classesCSS.message;
      message.innerHTML = this.attente;
    }
  },
  definirSucces(enonce, bonneReponse) {
    enonce.classList.remove(classesCSS.echec);
    enonce.classList.add(classesCSS.succes);
    const message = this.extraireMessage(enonce);
    if (message !== undefined) {
      message.classList.remove(classesCSS.echec);
      message.classList.add(classesCSS.succes);
      message.innerHTML = "<p>▶︎ Bonne réponse 👍</p>";
    }
  },
  definirEchec(enonce, valeurs) {
    enonce.classList.remove(classesCSS.succes);
    enonce.classList.add(classesCSS.echec);
    const message = this.extraireMessage(enonce);
    if (message !== undefined) {
      message.classList.remove(classesCSS.succes);
      message.classList.add(classesCSS.echec);
    }
    const { valeurRecue, valeurAttendue } = valeurs;
    message.innerHTML = debutMessageEchec(valeurRecue);
    message.innerHTML += `<p>▶︎ Alors qu'elle devrait renvoyer :</p><pre class="valeur">${formaterPourLeHtml(valeurAttendue)}</pre>
    <p style="margin-top: var(--dim-triple)">${this.echec}</p>`;
  },
  liste: [],
};

function debutMessageEchec(valeurRecue) {
  if (valeurRecue === undefined) {
    return `<p>▶︎ Votre fonction ne renvoie rien (undefined) !</p> <p>Êtes-vous sûr d'avoir utilisé l'instruction <code>return</code> ?</p>`
  } else {
    return `<p>▶︎ Votre fonction renvoie :</p><pre class="valeur">${formaterPourLeHtml(valeurRecue)}</pre>`
  }
}

function formaterPourLeHtml(valeur) {
  return (
    String(valeur)
      // Les espaces en trop en fin et début de ligne sont mis en surbrillance
      .replace(/( {2,})/g, '<span class="espace">$1</span>')
      .replace(/^( +)/g, '<span class="espace">$1</span>')
      .replace(/( +)$/g, '<span class="espace">$1</span>')
      .replace(/( +)\n/g, '<span class="espace">$1</span>\n')
      .replace(/\n/g, '<br/>')
  );
}
