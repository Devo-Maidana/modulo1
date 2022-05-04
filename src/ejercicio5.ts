//Desarrollar un algoritmo que dado un número, ingresado por el usuario determine si el número es par o impar y le informe al usuario
//En el caso de ser 0 (cero) el algoritmo deberá  informarlo
//con switch

//Desarrolle un algoritmo que dados tres números determine cuál es el mayor de los tres
//con else if

let numero1: number = Number(prompt("ingrese numero1 "));
let numero2: number = Number(prompt("ingrese numero2 "));
let numero3: number = Number(prompt("ingrese numero3 "));

if (numero1 > 20 || numero2 > 20 || numero3 > 20) {
  console.log("el numero es mayor ");
} else if (numero1 < 20 || numero2 < 20 || numero3 < 20) {
  console.log(" el numero es menor   ");
}
