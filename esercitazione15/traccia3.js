// TRACCIA 3 - Contare le cifre di un numero

function contaCifre(numero) {
  if (numero > 9999) {
    console.log("Numero troppo grande");
    return;
  }

  let cifre = 1;

  // Divido il numero per 10 finché non diventa più piccolo di 10
  while (numero >= 10) {
    numero = Math.floor(numero / 10);
    cifre++;
  }

  if (cifre === 1) {
    console.log(cifre + " cifra");
  } else {
    console.log(cifre + " cifre");
  }
}

contaCifre(9);     // 1 cifra
contaCifre(99);    // 2 cifre
contaCifre(1234);  // 4 cifre
contaCifre(12000); // Numero troppo grande
