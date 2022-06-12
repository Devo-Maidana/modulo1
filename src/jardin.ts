//Funcion para calcular butacas libres y asignar el aula

function calcularButacaslibres(): string {
  let butacasLibres: number = 0;
  let aula: string;
  if (AulaAmarilla - cantidadDeInfantes >= butacasLibres) {
    aula = "El aula asignado para el infante es el amarillo";
  } else if (AulaVerde - cantidadDeInfantes >= butacasLibres) {
    aula = "El aula asignado para el infante es el verde";
  } else if (AulaAzul - cantidadDeInfantes >= butacasLibres) {
    aula = "El aula asignado para el infante es el azul";
  } else {
    aula = "No disponemos con aulas para la capacidad indicada";
  }
  return aula;
}

let AulaAzul: number = 40;
let AulaVerde: number = 35;
let AulaAmarilla: number = 30;
let cantidadDeInfantes: number = Number(
  prompt("Ingrese cantidad de infantes: ")
);
let resultado: string = calcularButacaslibres();

console.log(resultado);
