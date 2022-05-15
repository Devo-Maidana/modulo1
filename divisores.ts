
function cantidadDeDivisores ( numero : number ) : number {
  let cantidad : number = 0;
  let divisor : number;
  for (divisor = 0; divisor < numero; divisor++) {
  if (cantidadDeDivisores (numero, divisor)) {
  cantidad++;
  }
  }
  return cantidad;
  };

let numero : number = Number((prompt("ingrese numero "));
let numDivisores : number = cantidadDeDivisores( numero );
console.log("El número", numero, "tiene ", numDivisores, "divisores.");

