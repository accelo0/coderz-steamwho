let personaggiFiltrati;
let contaDomanda = 0;
let pDomanda;

function mostraDomanda() {
  pDomanda.innerHTML = domande[contaDomanda].domanda;
  document.getElementById("startButton").style.display = "none";

  //mostro gli elementi invisibili della classe nascosti
  const nascostiClassElements = document.getElementsByClassName("nascosti");
  for (let i = 0; i < nascostiClassElements.length; i++) {
    nascostiClassElements[i].style.display = "inline";
  }
}

function sceltaPersonaggio(personaggio) {
  personaggio = personaggi.find((p) => p.nome === personaggio);
  console.log(personaggio);
  document.getElementById("personaggioNome").innerHTML = personaggio.nome;
  document.getElementById("personaggioImg").src = `imgs/${personaggio.nome
    .toLowerCase()
    .replace(/ /g, "_")}.png`;
  document.getElementById("personaggioBio").innerHTML = personaggio.descrizione;

  let proprietà = [`Informazioni su ${personaggio.nome}`];
  personaggio.scienziato
    ? proprietà.push("scienziato: si")
    : proprietà.push("scienziato: no");
  personaggio.ingegnere
    ? proprietà.push("ingegnere: si")
    : proprietà.push("ingegnere: no");
  personaggio.matematico
    ? proprietà.push("matematico: si")
    : proprietà.push("matematico: no");
  personaggio.artista
    ? proprietà.push("artista: si")
    : proprietà.push("artista: no");
  personaggio.informatico
    ? proprietà.push("informatico: si")
    : proprietà.push("informatico: no");
  personaggio.vivente
    ? proprietà.push("vivente: si")
    : proprietà.push("vivente: no");

  document.getElementById("personaggioProprietà").innerHTML =
    proprietà.join("<br>");

  document.getElementById("personaggioScelto").style.display = "flex"; //mostro il div con le informazioni sul personaggio
  document.getElementById("startButton").style.display = "flex";

  if (contaDomanda > 0 || personaggiFiltrati < personaggi.length) {
    document.getElementById("labelWarn").style.display = "inline";
  }

  contaDomanda = 0;
}

// Funzione per nascondere i bottoni
function deleteButtons() {
  const bottoni = document.getElementsByClassName("bottoni");
  for (let i = 0; i < bottoni.length; i++) {
    bottoni[i].style.display = "none";
  }
}

function risposta(r) {
  const target = domande[contaDomanda].target;
  if (target == "speciale") {
    switch (r) {
      case true: //il personaggio è questo
        personaggiFiltrati = personaggiFiltrati.filter(
          (p) => p.nome == domande[contaDomanda].id //solo le domande speciali hanno un id che è il nome del personaggio
        );
        break;
      case false: //il personaggio va rimosso
        personaggiFiltrati = personaggiFiltrati.filter(
          (p) => p.nome !== domande[contaDomanda].id
        );
        break;
    }
  } else if (target != "speciale") {
    personaggiFiltrati = personaggiFiltrati.filter((p) => p[target] === r);
  }
  contaDomanda++;

  if (personaggiFiltrati.length == 1) {
    //Rimane 1 personaggio => Personaggio trovato
    pDomanda.innerHTML = `Il personaggio che ho indovinato è: ${personaggiFiltrati[0].nome}`;
    deleteButtons();
  } else if (personaggiFiltrati.length == 0) {
    //Non rimane nessuno => Personaggio non trovato / non presente in lista
    pDomanda.innerHTML = "Non conosco questo personaggio :C";
    deleteButtons();
  } else if (contaDomanda < domande.length) {
    //L'indice della domanda attuale è piu piccolo del totale delle domande => ci sono altre domande => prossima domanda
    mostraDomanda();
  } else if (contaDomanda >= domande.length && personaggiFiltrati.length > 1) {
    //Le domande sono state esaurite e i personaggi sono ancora molti

    const domandeSpeciali = personaggiFiltrati
      .filter((p) => p.extra && p.extra.domanda) // Verifica che esista extra.domanda
      .map((p) => ({
        id: p.nome,
        domanda: p.extra.domanda,
        target: "speciale",
      }));

    domande.push(...domandeSpeciali);

    mostraDomanda();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  personaggiFiltrati = [...personaggi];
  pDomanda = document.getElementById("domanda");

  document.getElementById("menuPersonaggi").addEventListener("change", (e) => {
    sceltaPersonaggio(e.target.value);
  });

  const menu = document.getElementById("menuPersonaggi");
  for (let i = 0; i < personaggi.length; i++) {
    const nuovaOpzione = document.createElement("option");
    nuovaOpzione.value = personaggi[i].nome.trim();
    nuovaOpzione.innerHTML = personaggi[i].nome;
    menu.appendChild(nuovaOpzione);
  }
});
