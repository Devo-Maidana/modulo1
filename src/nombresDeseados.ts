//function ingresar() {
//pido ingresar
//for (let indice: number = 0; indice < 5; indice++) {
//  arreglo_Nombre[indice] = Number(prompt("ingrese numero"));
// }
//}

function mostrar(longitud: number) {
  //mostrar por pantalla
  for (let indice: number = 0; indice < longitud; indice++) {
    console.log(arreglo_Nombre[indice]);
  }
}

let longitud: number = Number(prompt("longitud del arreglo"));
let arreglo_Nombre: String[] = new Array(longitud);

for (let indice: number = 0; indice < longitud; indice++) {
  arreglo_Nombre[indice] = prompt("ingrese nombre");
}

mostrar(longitud);
