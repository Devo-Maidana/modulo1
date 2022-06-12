let dimencion: number = 10;
let edadAlumnos: number[] = new Array(dimencion);
//metodo para devolver valor matematico resultado
function aleatorio(min, max): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

function obtenerPromedio(): number {
  let promedio: number;
  let suma: number = 0;
  for (let indice: number = 0; indice < edadAlumnos.length; indice++) {
    suma = suma + edadAlumnos[indice];
  }
  promedio = suma / edadAlumnos.length;
  return promedio;
}

function cargarDatosAleatorio() {
  for (let i: number = 0; i < edadAlumnos.length; i++) {
    edadAlumnos[i] = aleatorio(3, 7);
  }
}

cargarDatosAleatorio();
let promedioEdades: number = obtenerPromedio();

console.log(promedioEdades);

// let cantidad_de_alumnos:number = edadAlumnos.length;

// console.log(suma/cantidad_de_alumnos);
