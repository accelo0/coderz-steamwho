let personaggiFiltrati;
let contaDomanda = 0;
let pDomanda;

function mostraDomanda(reset = false) {
  if (reset) {
    contaDomanda = 0;
    personaggiFiltrati = [...personaggi];
  }

  pDomanda.innerHTML = domande[contaDomanda].domanda;
  document.getElementById("startButton").style.display = "none";
  document.getElementById("labelWarn").style.display = "none";

  [...document.getElementsByClassName("nascosti")].forEach((el) => {
    el.style.display = "inline";
  });
}

function sceltaPersonaggio(nome) {
  const personaggio = personaggi.find((p) => p.nome === nome);
  console.log(personaggio);

  document.getElementById("personaggioNome").innerHTML = personaggio.nome;
  document.getElementById("personaggioImg").src = `imgs/${personaggio.nome
    .toLowerCase()
    .replace(/ /g, "_")}.png`;
  document.getElementById("personaggioBio").innerHTML = personaggio.descrizione;

  const proprietà = [
    `Informazioni su ${personaggio.nome}`,
    `scienziato: ${personaggio.scienziato ? "si" : "no"}`,
    `ingegnere: ${personaggio.ingegnere ? "si" : "no"}`,
    `matematico: ${personaggio.matematico ? "si" : "no"}`,
    `artista: ${personaggio.artista ? "si" : "no"}`,
    `informatico: ${personaggio.informatico ? "si" : "no"}`,
    `vivente: ${personaggio.vivente ? "si" : "no"}`,
  ];

  document.getElementById("personaggioProprietà").innerHTML =
    proprietà.join("<br>");
  document.getElementById("personaggioScelto").style.display = "flex";
  document.getElementById("startButton").style.display = "flex";

  if (contaDomanda > 0 || personaggiFiltrati.length < personaggi.length) {
    document.getElementById("labelWarn").style.display = "inline";
  }

  contaDomanda = 0;
}

function deleteButtons() {
  [...document.getElementsByClassName("bottoni")].forEach((el) => {
    el.style.display = "none";
  });
}

function risposta(r) {
  const { target, id } = domande[contaDomanda];

  if (target === "speciale") {
    personaggiFiltrati = personaggiFiltrati.filter((p) =>
      r ? p.nome === id : p.nome !== id
    );
  } else {
    personaggiFiltrati = personaggiFiltrati.filter((p) => p[target] === r);
  }

  contaDomanda++;

  if (personaggiFiltrati.length === 1) {
    pDomanda.innerHTML = `Il personaggio che ho indovinato è: ${personaggiFiltrati[0].nome}`;
    deleteButtons();
  } else if (personaggiFiltrati.length === 0) {
    pDomanda.innerHTML = "Non conosco questo personaggio :C";
    deleteButtons();
  } else if (contaDomanda < domande.length) {
    mostraDomanda();
  } else {
    const domandeSpeciali = personaggiFiltrati
      .filter((p) => p.extra?.domanda)
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

  const menu = document.getElementById("menuPersonaggi");
  menu.addEventListener("change", (e) => sceltaPersonaggio(e.target.value));

  personaggi.forEach((p) => {
    const nuovaOpzione = document.createElement("option");
    nuovaOpzione.value = p.nome.trim();
    nuovaOpzione.innerHTML = p.nome;
    menu.appendChild(nuovaOpzione);
  });
});
