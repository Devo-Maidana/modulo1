let numero: number = Number(prompt("ingrese numero: "));
let tope: number = Number(prompt("ingrese tope: "));

for (let indice: number = 0; indice <= tope; indice++) {
  console.log(numero + " x " + indice + " = " + numero * indice);
}