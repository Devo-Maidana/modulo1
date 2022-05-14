let base: number = Number(prompt("ingrese base: "));
let exponente: number = Number(prompt("ingrese exponente"));

function calcularPotencia(base: number, exponente: number): number {
  let resultado: number = 1;
  for (let indice: number = 1; indice <= exponente; indice++) {
    resultado = base * resultado;
  }
  return resultado;
}

console.log(calcularPotencia(base, exponente));
