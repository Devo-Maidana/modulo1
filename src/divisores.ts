//saque la function esMultiplo porque me daba error .
function esMultiplo(dividendo: number, divisor: number): boolean {
  if (dividendo % divisor === 0) {
    return true;
  } else {
    return false;
  }
}
function cantidaddeDivisores(numero: number): number {
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
let numDivisores: number = cantidaddeDivisores(numero);
console.log("El número", numero, "tiene ", numDivisores, "divisores.");
