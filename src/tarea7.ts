//declaro variables e ingreso numero

let cantidadTotal: number = 0;
let cantidadPositivos: number = 0;
let porcentajePositivos: number = 0;
let num = Number(prompt("Ingrese un numero"));

//utilizo while para cortar y contar cantidades positivas y total
while (num !== 0) {
  if (num > 0) {
    cantidadPositivos++;
  }

  cantidadTotal++;
  num = Number(prompt("Ingrese un numero"));
}

// le digo al codigo Si catidadToal se cumple mostrar el 
//75 % del total de cantidad de positivos
if (cantidadTotal > 0) {
  porcentajePositivos = (cantidadPositivos * 100) / cantidadTotal;

  console.log(
    +cantidadPositivos + " positivos " 
    + porcentajePositivos + " % del total."
  );
}
