function verdadero() {
  return true;
}

function asincrona() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
}

asincrona().then(() => console.log("Hola, soy una promesa"));

function* generadora() {
  let i = 0;
  while (i < 10) {
    yield (i += 2);
  }
}

const gen = generadora(0);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
