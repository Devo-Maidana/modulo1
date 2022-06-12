//Dados estos 5 arreglos 
//que representan las ventas semanales del primer trimentre, 
//corresspondientes a 5 vendedores de la empresa: Camila, Franco,
 ///Sofia, Matias y Agustina, respectivamente.
 //vendedor1 
 //vendeor1 [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652]
 // vendedor2 [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855] 
  //vendedor3 [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218] 
  //vendedor4 [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006] 
  //vendedor5 [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562]
 // Escribir un programa que permita determinar:Para cada vendedor
 // Para cada vendedor mostrar su nombre y 
 //  1 su venta maxima indicando semana y mes de la misma.
 //  2- su venta minima indicando semana y mes de la misma.
 //  3- su promedio semanal de ventas.4- su promedio mensual de ventas.
  // Entre todos los vendedores calcular:
  // 5- nombre y monto vendido del mejor vendedor de cada semana.
  // 6- nombre y suma de montos vendidos del mejor vendedor de cada mes
  // 7- nombre y suma de montos vendidos del peor vendedor de cada mes
 //  8- nombre y suma de montos vendidos de peor vendedor del 
 //  trimestreTenga en
 //   cuenta que cada valor en los arreglos es la 
//venta de una semana, y que cuatro semanas forman un mes




//cargar los datos por us
function cargarDatos(
  nombresVendedores: string[]= [ "Camila", "Franco", "Sofia", "Matias","Agustina"],
  venta1: number ,// [32558,36165, 34240, 39273,34360,21347,20869,21493,23062,31908,30369,30652],
  venta2: number, //[27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855],
  venta3: number ,//[20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218],
  venta4: number ,//[27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006],
  venta5: number ,//[23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562],


): void {
  for (let indice: number = 0; indice < nombresVendedores.length; indice++) {
    nombresVendedores[indice] = prompt("Ingrese nombre del vendedor");
    
    console.log(nombresDeVendedores[0]);
  //deberia mostrar a camila 
  }
  }


// calcular el promedio del vendedor buscado
function calcularPromedio(venta1: number, venta2: number, venta3: number,venta4: number, venta5: number): number {
  let promedio: number = (venta1 + venta2 + venta3)  + venta4 + venta5 / 5;
  return promedio;
}
// tambien deberia de ver si es promedio por los cuatro trimestre que seria dividio 4 

//Fbuscar un vendedor
function buscarVendedor(
  vendedorBuscado: string,
  nombresVendedores: string[],
  numeroDeVentas: number
): number {
  let indice: number = 0;
  let posicionDeventa: number = -1;
  while (indice < nombresVendedores && posicionDeventa === -1) {
    if (nombresVendedores[indice] === vendedorBuscado) {
      posicionDeventa = indice;
    }
    indice++;
  }
  return posicionDeventa;
}






//Variable  cantidad de VENTAS
let numeroDeVenta: number = Number(prompt("Ingrese cantidad de venta"));
//Arreglo que almacena el nombre de venddores
let nombresDeVendedores: string[] = new Array(numeroDeVenta);
//vectores de ventas del primer trimestre al cuarto trimestre
let ventasTrimestre1: number[] = new Array(numeroDeVenta);

let ventasTrimestre2: number[] = new Array(numeroDeVenta);

let ventasTrimestre3: number[] = new Array(numeroDeVenta);

let ventasTrimestre4: number[] = new Array(numeroDeVenta);

cargarDatos(
  nombresVendedores,
  ventasTrimestre1,
  ventasTrimestre2,
  ventasTrimestre3,
  ventasTrimestre4
);

let ventaBuscada: string = prompt(
  "Ingrese el nombre del vendor que esta buscando"
);

let indiceDeVendedores: number = buscarVendedor(
  ventaBuscada,
  nombresDeVendedores,
  numeroDeVentas,
);

if (indiceDeVendedores !== -1) {
  console.log(
    "El promedio por trimestre es de " +
      ventaBuscada +
      " es " +
      calcularPromedio(
        ventasTrimestre1[numeroDeVenta],
        ventasTrimestre2[numeroDeVenta],
        ventasTrimestre3[numeroDeVenta],
        ventasTrimestre4[numeroDeVenta],
        
        
  );
} else {
  console.log("No se encontro esa venta " + ventaBuscada);
}