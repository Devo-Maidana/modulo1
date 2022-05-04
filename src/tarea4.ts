let num1: number = Number(prompt("Ingrese un número: "));
let num2: number = Number(prompt("Ingrese otro número: "));

let suma = 0;
let inicio = num1;

if (num1 < num2) {
  while (inicio <= num2) {
    suma = suma + inicio;
    inicio++;
  }
  console.log("La suma de " + num1 + " hasta " + num2 + " es: " + suma);
} else {
  while (inicio >= num2) {
    suma = suma + inicio;
    inicio--;
  }
  console.log("La suma de " + num2 + " hasta " + num1 + " es: " + suma);
}
