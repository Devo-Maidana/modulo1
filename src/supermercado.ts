//Funcion para registrar los productos, el precio unitario y la cantidad de articulos

function registrarCompra(): void {
  for (let i: number = 0; i < cantidadDeProductos; i++) {
    productos[i] = prompt("Ingrese nombre del producto: ");
    precioUProductos[i] = Number(
      prompt("Ingrese el precio de " + productos[i] + ":")
    );
    while (precioUProductos[i] <= 0) {
      precioUProductos[i] = Number(
        prompt(
          "Error ingrese el precio de " + productos[i] + " correspondiente:"
        )
      );
    }
    cantidadDeCadaArticulo[i] = Number(
      prompt("Ingrese la cantidad que lleva de " + productos[i] + ":")
    );
    while (cantidadDeCadaArticulo[i] <= 0) {
      cantidadDeCadaArticulo[i] = Number(
        prompt(
          "Error ingrese la cantidad de " + productos[i] + " correspondiente:"
        )
      );
    }
  }
}

//Funcion para detal la compra
function detallarCompra(): void {
  let precioFinalDelProducto: number = 0;
  for (let i: number = 0; i < cantidadDeProductos; i++) {
    precioFinalDelProducto = cantidadDeCadaArticulo[i] * precioUProductos[i];
    console.log(
      productos[i],
      cantidadDeCadaArticulo[i] +
        " uni * $" +
        precioUProductos[i] +
        "c/u = $" +
        precioFinalDelProducto
    );
    precioFinalDeLaCompra = precioFinalDelProducto + precioFinalDeLaCompra;
  }
  console.log("El total de la ccompra es: $" + precioFinalDeLaCompra);
}

//verifica  los sorteos segun el total
function Sorteo(): void {
  if (precioFinalDeLaCompra > 3000) {
    console.log(
      "Por tu compra de : $" +
        precioFinalDeLaCompra +
        " estas participando por un Auto 0Km"
    );
  } else if (precioFinalDeLaCompra > 2000) {
    console.log(
      "Por tu compra de : $" +
        precioFinalDeLaCompra +
        " estas participando por una moto 0Km "
    );
  } else if (precioFinalDeLaCompra > 1000) {
    console.log(
      "Por tu compra de : $" +
        precioFinalDeLaCompra +
        " estas participando por un LED Tv de 42 Pulgadas"
    );
  } else {
    console.log(
      "Por tu compra de : $" +
        precioFinalDeLaCompra +
        " No participa en ninguno de nuestros sorteos,gracias"
    );
  }
}

//variable para ingresar la cantidad de productos
let cantidadDeProductos: number = Number(
  prompt("Ingrese cantidad de productos: ")
);
//Arreglo que almacena los productos
let productos: string[] = new Array(cantidadDeProductos);
//Arreglo que almacena el precio
let precioUProductos: number[] = new Array(cantidadDeProductos);
//Arreglo que almacena la cantidad
let cantidadDeCadaArticulo: number[] = new Array(cantidadDeProductos);
//Variable  precio final de la compra
let precioFinalDeLaCompra: number = 0;

registrarCompra();
detallarCompra();
Sorteo();
