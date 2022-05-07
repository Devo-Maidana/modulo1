// Manera correcta de realizar el ejercicio
let clave: string = "0";
let contadorIntentos: number = 0;

while (clave !== "eureka" && contadorIntentos < 3) {
  clave = prompt("Ingrese clave");
  if (clave === "eureka") {
    console.log("clave correcta");
  } else {
    console.log("clave Incorrecta");
    contadorIntentos++;
  }