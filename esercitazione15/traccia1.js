// TRACCIA 1 - Gioco dei dadi tra due giocatori

// Funzione che tira un dado a 6 facce (numero casuale da 1 a 6)
function tiraDado() {
  return Math.floor(Math.random() * 6) + 1;
}

function giocaADadi() {
  // Chiedo all'utente quanti tiri fare
  let tiri = Number(prompt("Quanti tiri vuoi fare?"));

  let punteggio1 = 0;
  let punteggio2 = 0;

  // Tiri del giocatore 1
  for (let i = 1; i <= tiri; i++) {
    let dado = tiraDado();
    console.log("Giocatore 1 - tiro " + i + ": " + dado);
    punteggio1 = punteggio1 + dado;
  }

  // Tiri del giocatore 2
  for (let i = 1; i <= tiri; i++) {
    let dado = tiraDado();
    console.log("Giocatore 2 - tiro " + i + ": " + dado);
    punteggio2 = punteggio2 + dado;
  }

  console.log("Punteggio Giocatore 1: " + punteggio1);
  console.log("Punteggio Giocatore 2: " + punteggio2);

  // Controllo chi ha vinto
  if (punteggio1 > punteggio2) {
    console.log("Ha vinto il Giocatore 1!");
  } else if (punteggio2 > punteggio1) {
    console.log("Ha vinto il Giocatore 2!");
  } else {
    console.log("Pareggio!");
  }
}

giocaADadi();
