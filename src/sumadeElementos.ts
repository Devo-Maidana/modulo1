function sumar(): number {
  let suma: number = 0;
  for (let indice: number = 0; indice < longitud; indice++) {
    suma = suma + arreglo_numeros[indice];
  }
  return suma;
}

let longitud: number = Number(prompt("longitud del arreglo: "));
let arreglo_numeros: number[] = new Array(longitud);

for (let indice: number = 0; indice < longitud; indice++) {
  arreglo_numeros[indice] = Number(prompt("ingrese numero: "));
}

console.log(sumar());
