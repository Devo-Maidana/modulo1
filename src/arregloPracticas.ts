//declaro lo que vy a usar
let valor1: number[] = new Array(3);
let valor2: number[] = new Array(3);
let valorMultiplicacion: number[] = new Array(3);
let indice: number;
//Cargo el vector de valores para valor 1
for (indice = 0; indice < 3; indice++) {
  valor1[indice] = Number(prompt(`Ingrese el valor de valor1`));
}
//Cargo el vector de valores para valor2
for (indice = 0; indice < 3; indice++) {
  valor2[indice] = Number(prompt(`Ingrese el valor de valor2`));
}
//multiplico los valores y muestro por pantalla (imrimo) la suma total de los 2
//ejemplo valor 1 (1,2,3,4,5,6) + valor2 (1,2,2,2,2,2)
//esto me tiene que dar en taotal de los 2 vectores
//un resultado asi : (2,3,4,5,6,7)
for (indice = 0; indice < 3; indice++) {
  valorMultiplicacion[indice] = valor1[indice] * valor2[indice];
  //para que quede masordenado lo mismo puedo solo llamar a el
  //valorSuma y me mostraria solo e valor de la suma.
  console.log(` valor1 * valor2 es igual:` + valorMultiplicacion);
}
