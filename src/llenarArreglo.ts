function ingresar_numeros() {
  for (let indice: number = 0; indice <= 4; indice++) {
    numeros[indice] = Number(prompt("ingrese numero: "));
  }
}

function mostrar_numeros() {
  for (let indice: number = 0; indice <= 4; indice++) {
    console.log(numeros[indice]);
  }
}

let numeros: number[] = new Array(5);

ingresar_numeros();
mostrar_numeros();
