//Actividad (Promedio Escolar)
//Desarrolle un algoritmo que permita cargar alumnos
//y sus notas en los tres trimestres
//Se debe permitir obtener el promedio anual
// (es decir, de sus tres notas) de un alumno
//(ingresado por el usuario)
//Luego de resolverlo, pensar en aprovechar métodos y
//discutir como representar la información

//declaro lo que voy a usar y pasar 3 notas de alumnos por cada array
let trimestre1: number[] = new Array(3);
let trimestre2: number[] = new Array(3);
let trimestre3: number[] = new Array(3);
let valorpromedio: number[] = new Array(3);
let indice: number;
//Cargo el vector de valores para notas1
for (indice = 0; indice < 3; indice++) {
  trimestre1[indice] = Number(prompt(`Ingrese notas alumno juan`));
}
//Cargo el vector de valores para notas2
for (indice = 0; indice < 3; indice++) {
  trimestre2[indice] = Number(prompt(`Ingrese notas alumno mateo`));
}
////Cargo el vector de valores para notas3
for (indice = 0; indice < 3; indice++) {
  trimestre3[indice] = Number(prompt(`Ingrese notas rocio`));
}

//Sumo los valores y muestro por pantalla (imrimo) la suma total de los 3 y divido

for (indice = 0; indice < 3; indice++) {
  valorpromedio[indice] =
    trimestre1[indice] + trimestre2[indice] + trimestre3[indice] / 3;

  //valorpromedio y me mostraria solo el valor promedio de la suma de mis notas.
  console.log(`Promedio Juan :` + valorpromedio);
  console.log(`Promedio Mateo :` + valorpromedio);
  console.log(`Promedio Rocio :` + valorpromedio);
}
