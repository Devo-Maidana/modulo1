function esMultiplo(dividendo: number, divisor: number): boolean {
  if (dividendo % divisor === 0) {
    return true;
  } else {
    return false;
  }
}

let numero1: number = Number(prompt("ingrese numero 1"));
let numero2: number = Number(prompt("ingrese numero 2"));

let multiplo: boolean = esMultiplo(numero1, numero2);

if (multiplo === true) {
  console.log("el numero " + numero1 + " es multiplo de " + numero2);
} else {
  console.log("el numero " + numero1 + " no es multiplo de " + numero2);
}