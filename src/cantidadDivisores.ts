//saque la function esMultiplo porque me daba error o  me tiraba 0.

function cantidadDeDivisores(numero: number): number {
  let divisor: number;
  let cantidad: number = 0;
  for (divisor = 0; divisor <= numero; divisor++) {
    if (numero % divisor === 0) {
      cantidad++;
    }
  }
  return cantidad;
}
let numero: number = Number(prompt("ingrese su numero"));
let numDivisores: number = cantidadDeDivisores(numero);
console.log("El número", numero, "tiene ", numDivisores, "divisores.");
