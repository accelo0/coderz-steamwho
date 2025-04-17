let personaggi = [
  {
    nome: "Albert Einstein",
    donna: false,
    vivente: false,
    scienziato: true,
    ingegnere: false,
    matematico: true,
    artista: false,
    informatico: false,
    descrizione:
      "Fisico teorico tedesco, celebre per la teoria della relatività e il suo contributo fondamentale alla fisica moderna.",
    extra: {
      domanda:
        "Il tuo personaggio è celebre per il suo contributo fondamentale alla fisica moderna?",
    },
  },
  {
    nome: "Marie Curie",
    donna: true,
    vivente: false,
    scienziato: true,
    ingegnere: false,
    matematico: false,
    artista: false,
    informatico: false,
    descrizione:
      "Fisica e chimica polacca naturalizzata francese, pioniera nello studio della radioattività. Prima persona a vincere due Premi Nobel in discipline scientifiche diverse.",
    extra: {
      domanda: "Ha vinto 2 premi Nobel in discipline scientifiche diverse?",
    },
  },
  {
    nome: "Ada Lovelace",
    donna: true,
    vivente: false,
    scienziato: false,
    ingegnere: false,
    matematico: true,
    artista: false,
    informatico: true,
    descrizione:
      "Matematica inglese dell’Ottocento, considerata la prima programmatrice della storia per il suo lavoro sulla Macchina Analitica di Charles Babbage.",
    extra: {
      domanda: "Ha lavorato alla Macchina Analitica di Charles Babbage?",
    },
  },
  {
    nome: "Leonardo da Vinci",
    donna: false,
    vivente: false,
    scienziato: true,
    ingegnere: true,
    matematico: false,
    artista: true,
    informatico: false,
    descrizione:
      "Artista e scienziato italiano del Rinascimento, noto per opere come la ‘Mona Lisa’ e per i suoi studi in anatomia, ingegneria e scienze naturali.",
    extra: {
      domanda: "È noto per opere come la ‘Mona Lisa’?",
    },
  },
  {
    nome: "Elon Musk",
    donna: false,
    vivente: true,
    scienziato: false,
    ingegnere: true,
    matematico: false,
    artista: false,
    informatico: false,
    descrizione:
      "Imprenditore sudafricano naturalizzato americano, fondatore di SpaceX e Tesla, noto per le sue innovazioni nei settori dell’energia e dei trasporti.",
    extra: {
      domanda:
        "È un importante imprenditore americano, fondatore di famose aziende in campo automobilistico e spaziale?",
    },
  },
  {
    nome: "Katherine Johnson",
    donna: true,
    vivente: false,
    scienziato: true,
    ingegnere: false,
    matematico: true,
    artista: false,
    informatico: false,
    descrizione:
      "Matematica afroamericana, ha calcolato traiettorie cruciali per le missioni spaziali della NASA, inclusa quella di Apollo 11.",
    extra: {
      domanda: "Ha ricoperto un ruolo cruciale per le missioni spaziali NASA?",
    },
  },
  {
    nome: "Stephen Hawking",
    donna: false,
    vivente: false,
    scienziato: true,
    ingegnere: false,
    matematico: true,
    artista: false,
    informatico: false,
    descrizione:
      "Fisico teorico britannico, noto per i suoi lavori sui buchi neri e la cosmologia quantistica, autore di ‘Dal Big Bang ai buchi neri’.",
    extra: {
      domanda:
        "È noto per i suoi lavori sui buchi neri e cosmologia quantistica?",
    },
  },
  {
    nome: "Margaret Hamilton",
    donna: true,
    vivente: true,
    scienziato: false,
    ingegnere: false,
    matematico: true,
    artista: false,
    informatico: true,
    descrizione:
      "Informatica americana, ha guidato lo sviluppo del software di bordo per le missioni Apollo della NASA e ha coniato il termine ‘software engineering’.",
    extra: {
      domanda: "Ha coniato il termine ‘software engineering’?",
    },
  },
  {
    nome: "Alan Turing",
    donna: false,
    vivente: false,
    scienziato: false,
    ingegnere: false,
    matematico: true,
    artista: false,
    informatico: true,
    descrizione:
      "Matematico e logico britannico, padre dell’informatica teorica e dell’intelligenza artificiale, noto per aver decifrato il codice Enigma durante la Seconda Guerra Mondiale.",
    extra: {
      domanda:
        "I suoi progetti più importanti risalgono al periodo della Seconda Guerra Mondiale?",
    },
  },
  {
    nome: "Hedy Lamarr",
    donna: true,
    vivente: false,
    scienziato: false,
    ingegnere: true,
    matematico: false,
    artista: true,
    informatico: false,
    descrizione:
      "Attrice e inventrice austriaca naturalizzata americana, ha co-inventato un sistema di comunicazione a spettro espanso, base per tecnologie come Wi-Fi e Bluetooth. ",
    extra: {
      domanda:
        "Ha contribuito a sistemi base di tecnologie moderne come Bluetooth e Wi-Fi?",
    },
  },
  {
    nome: "Steve Jobs",
    donna: false,
    vivente: false,
    scienziato: false,
    ingegnere: true,
    matematico: false,
    artista: true,
    informatico: true,
    descrizione:
      "Imprenditore e inventore americano, cofondatore di Apple Inc., ha rivoluzionato l’industria tecnologica con prodotti come l’iPhone e il Mac.",
    extra: {
      domanda:
        "È ricordato per aver introdotto il primo smarthphone touch nel 2007?",
    },
  },
  {
    nome: "Galileo Galilei",
    donna: false,
    vivente: false,
    scienziato: true,
    ingegnere: false,
    matematico: true,
    artista: false,
    informatico: false,
    descrizione:
      "Astronomo e fisico italiano, ha migliorato il telescopio e sostenuto il modello eliocentrico del sistema solare, contribuendo alla nascita della scienza moderna.",
    extra: {
      domanda:
        "Era un appassionato astronomo e fisico che ha contribuito alle migliorie di alcuni strumenti come il telescopio?",
    },
  },
  {
    nome: "Rosalind Franklin",
    donna: true,
    vivente: false,
    scienziato: true,
    ingegnere: false,
    matematico: false,
    artista: false,
    informatico: false,
    descrizione:
      "Chimica britannica, il suo lavoro sulla diffrazione a raggi X ha contribuito alla scoperta della struttura del DNA.",
    extra: {
      domanda:
        "I suoi lavori hanno contribuito alla scoperta della struttura del DNA?",
    },
  },
  {
    nome: "Tim Berners-Lee",
    donna: false,
    vivente: true,
    scienziato: false,
    ingegnere: false,
    matematico: true,
    artista: false,
    informatico: true,
    descrizione:
      "Ingegnere britannico, ha inventato il World Wide Web nel 1990, rivoluzionando l’accesso e la condivisione delle informazioni online.",
    extra: {
      domanda:
        "Dobbiamo attribuire al tuo personaggio l'invenzione del World Wide Web?",
    },
  },
  {
    nome: "Nikola Tesla",
    donna: false,
    vivente: false,
    scienziato: true,
    ingegnere: true,
    matematico: false,
    artista: false,
    informatico: false,
    descrizione:
      "Inventore e ingegnere serbo-americano, noto per i suoi contributi allo sviluppo dell’elettricità a corrente alternata.",
    extra: {
      domanda:
        "Il tuo personaggio ha contribuito allo sviluppo dell'elettricità a corrente alternata?",
    },
  },
  {
    nome: "Grace Hopper",
    donna: true,
    vivente: false,
    scienziato: false,
    ingegnere: false,
    matematico: true,
    artista: false,
    informatico: true,
    descrizione:
      "Informatica e contrammiraglio della Marina statunitense, pioniera nella programmazione e nello sviluppo del linguaggio COBOL.",
    extra: {
      domanda: "Il tuo personaggio faceva parte della Marina statunitense?",
    },
  },
  {
    nome: "Jane Goodall",
    donna: true,
    vivente: true,
    scienziato: true,
    ingegnere: false,
    matematico: false,
    artista: false,
    informatico: false,
    descrizione:
      "Etologa e antropologa britannica, ha rivoluzionato lo studio dei primati con le sue ricerche sugli scimpanzé in Africa.",
    extra: {
      domanda: "È nota per le sue ricerche sugli scimpanzé?",
    },
  },
  {
    nome: "Richard Feynman",
    donna: false,
    vivente: false,
    scienziato: true,
    ingegnere: false,
    matematico: true,
    artista: false,
    informatico: false,
    descrizione:
      "Fisico teorico americano, ha contribuito significativamente alla meccanica quantistica e ha ricevuto il Premio Nobel per la Fisica nel 1965.",
    extra: {
      domanda: "Ha contribuito significativamente alla meccanica quantistica?",
    },
  },
  {
    nome: "Sally Ride",
    donna: true,
    vivente: false,
    scienziato: true,
    ingegnere: false,
    matematico: false,
    artista: false,
    informatico: false,
    descrizione:
      "Fisica e astronauta americana, è stata la prima donna statunitense a volare nello spazio nel 1983.",
    extra: {
      domanda:
        "Il tuo personaggio è stata la prima donna statunitense a volare nello spazio?",
    },
  },
  {
    nome: "John von Neumann",
    donna: false,
    vivente: false,
    scienziato: false,
    ingegnere: false,
    matematico: true,
    artista: false,
    informatico: true,
    descrizione:
      "Matematico e fisico ungherese naturalizzato americano, ha dato contributi fondamentali all’informatica, alla teoria dei giochi e alla fisica nucleare.",
    extra: {
      domanda:
        "Il tuo personaggio ha dato contributi fondamentali in campo informatico e fisico?",
    },
  },
  {
    nome: "Blaise Pascal",
    donna: false,
    vivente: false,
    scienziato: true,
    ingegnere: false,
    matematico: true,
    artista: false,
    informatico: false,
    descrizione:
      "Matematico, fisico e filosofo francese del XVII secolo, noto per i suoi contributi alla teoria delle probabilità e per l’invenzione della calcolatrice meccanica.",
    extra: {
      domanda:
        "Al tuo personaggio è riconducibile l'invenzione della calcolatrice meccanica?",
    },
  },
];
