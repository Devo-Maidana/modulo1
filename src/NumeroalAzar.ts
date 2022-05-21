//Math.floor(Math.random()*100)

function azar(): number {
  return Math.floor(Math.random() * 100);
}

let arreglo: number = new Array(10);

for (let indice: number = 0; indice < 10; indice++) {
  arreglo[indice] = azar();
}

for (let indice: number = 0; indice < 10; indice++) {
  console.log(arreglo[indice]);
}
