let numero1: number = Number(prompt("ingres numero 1: "));
let numero2: number = Number(prompt("ingres numero 2: "));
let suma: number = 0;

//Intercambio de variables.

// ejemplo si ingreso 5 y luego 1
// numero1 = 5
// numero2 = 1
if (numero1 > numero2) {
  let auxiliar: number = numero1; //auxiliar = 5
  numero1 = numero2; // numero1 = 1
  numero2 = auxiliar; // numero2 = 5
}
// numero1 = 1
// numero2 = 5

for (let indice: number = numero1; indice <= numero2; indice++) {
  suma = suma + indice;
}

console.log(suma);
