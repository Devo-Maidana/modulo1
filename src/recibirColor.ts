//Variables
//ambito global
function soloEjemplo(): void {
  let variableLocal: number = 7;
  console.log(variableLocal);
}

function imprimirColorRecibidoPorParametro(color: string): void {
  console.log(color);
}

function calcularAreaCuadrado(base: number, altura: number): number {
  let resultado: number = Number(base) * Number(altura);
  return resultado;
}

let nombre: string = "braian";
let DNI: number = 12345678;
let esCasado: boolean = false;

console.log(nombre);

//console.log(variableLocal);

if (nombre === "braian") {
  console.log("es masculino");
} else if (nombre === "maria") {
  console.log("es femenino");
} else {
  console.log("es no binario");
}

switch (DNI) {
  case 34543:
    console.log("dni arranca con 3");
    break;
  case 12345678:
    console.log("dni arranca con 1");
    break;
  default:
    console.log("no especifica el dni");
    break;
}

for (let indice: number = 0; indice < 10; indice++) {
  console.log("indice ", indice);
}

let posicion: number = 10;
while (posicion > 0) {
  console.log("posicion ", posicion);
  posicion = posicion - 1;
}

let arregloNombres: string[] = ["braian", "maria", "fernando", "sofia"];

for (let i: number = 0; i < arregloNombres.length; i++) {
  console.log(arregloNombres[i]);
}

imprimirColorRecibidoPorParametro("rojo");
imprimirColorRecibidoPorParametro("verde");

let areaDelCuadrado: number = 0;

areaDelCuadrado = calcularAreaCuadrado(5, 4);

console.log(areaDelCuadrado);
