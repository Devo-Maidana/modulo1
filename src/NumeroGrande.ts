//Desarrolle un algoritmo que dados tres números determine cuál es el mayor de los tres

let num1: number = Number(prompt("ingrese numero1 "));
let num2: number = Number(prompt("ingrese numero2 "));
let num3: number = Number(prompt("ingrese numero3 "));

if (num1 > num2 && num1 > num3) {
  console.log("el numero uno es mas grande");
} else if (num2 > num3 && num3 > num1) {
  console.log("el  numero dos es mas grande");
} else if (num2 > num3 && num3 > num1) {
  console.log("el numero tres es mas grande");
} else {
  console.log("no se puede determinar este numero");
}

//Desarrollar un algoritmo que dado un número, ingresado por el usuario determine si el número es par o impar y le informe al usuario
//En el caso de ser 0 (cero) el algoritmo deberá  informarlo
//con switch
