let continuar: number = 1;
let numero: number;
let maximo: number = -99999; // Se Puede Mejorar la inicializacion
let minimo: number = 99999; // Se Puede Mejorar la inicializacion
let suma: number = 0;
let contador: number = 0;

while (continuar !== 0) {
  numero = Number(prompt("ingrese numero: "));
  contador++;
  suma = numero + suma;
  continuar = Number(prompt("continuar? "));
  if (numero > maximo) {
    maximo = numero;
  }
  if (numero < minimo) {
    minimo = numero;
  }
}

console.log("Maximo: " + maximo);
console.log("Minimo: " + minimo);
console.log("Media: " + suma / contador);
