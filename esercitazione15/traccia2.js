// TRACCIA 2 - FizzBuzz

function fizzBuzz(N) {
  for (let i = 1; i <= N; i++) {
    // Controllo prima il 15, altrimenti verrebbe preso dal 3 o dal 5
    if (i % 15 === 0) {
      console.log("fizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(30);
