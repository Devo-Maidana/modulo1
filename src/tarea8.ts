function Guiones() {
  // function declarada
  let Guiones: string = "-";

  for (let index = 0; index <= 15; index++) {
    Guiones = Guiones + "-";
  }
  console.log(Guiones);
}

Guiones(); // se llama a la fuction

let numero1: number = Number(prompt("ingese primer numero"));
let numero2: number = Number(prompt("ingrese segundo numero"));
let opcion: number = Number(
  prompt(
    "ingrese 1 para sumar , ingrese 2 para restar , ingrese 3 para multiplicar , ingrese 4 para dividir"
  )
);
let resultado: number = 0;

switch (opcion) {
  case 1:
    resultado = numero1 + numero2;
    Guiones();
    console.log(" el resultado de la suma es :", resultado);
    Guiones();
    break;

  case 2:
    resultado = numero1 - numero2;
    Guiones();
    console.log(" el resultado de la resta es :", resultado);
    Guiones();
    break;

  case 3:
    resultado = numero1 * numero2;
    Guiones();
    console.log(" el resultado de la multiplicacion es :", resultado);
    Guiones();
    break;

  case 4:
    resultado = numero1 / numero2;
    Guiones();
    console.log(" el resultado de la divicion es :", resultado);
    Guiones();
    break;
}
