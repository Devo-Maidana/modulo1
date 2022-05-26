let trimestre1: number[] = new Array(3);
let trimestre2: number[] = new Array(3);
let trimestre3: number[] = new Array(3);
let valorpromedio: number[] = new Array(3);
let indice: number;
let suma: number;
let nota1, nota2, nota3;
//Cargo el vector de valores para notas1
for (let indice = 0; indice < 3; indice++) {
  suma = nota1 + nota2 + nota3;
  let trimestre110 = Number(prompt(`Ingrese notas alumno juan`));
}
//Cargo el vector de valores para notas2
for (let indice = 0; indice < 3; indice++) {
  suma = nota1 + nota2 + nota3;
  trimestre2[indice] = Number(prompt(`Ingrese notas alumno mateo`));
}
////Cargo el vector de valores para notas3
for (let indice = 0; indice < 3; indice++) {
  suma = nota1 + nota2 + nota3;
  trimestre3[indice] = Number(prompt(`Ingrese notas alumna rocio`));
}

//Sumo los valores y muestro por pantalla (imrimo) la suma total de los 3 y divido

for (indice = 0; indice < 3; indice++) {
  valorpromedio[indice] = suma / 3;

  //valorpromedio y me mostraria solo el valor promedio de la suma de mis notas.
  console.log(`Promedio Juan :` + valorpromedio);
  console.log(`Promedio Mateo :` + valorpromedio);
  console.log(`Promedio Rocio :` + valorpromedio);
}
