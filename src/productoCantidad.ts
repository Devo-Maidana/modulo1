let producto: number = Number(prompt("ingrese precio  "));
let cantidad: number = Number(prompt("ingrese cantidad "));
let descuento: number = Number(producto * cantidad);

let precioProducto: number = Number(producto * cantidad);

if (precioProducto > 1000) {
  let descuento: number = precioProducto * 0.1;
  precioProducto = precioProducto - descuento;

  console.log("el precio total con el descuento del 10%");
  //si el cliente gasta mas de 1000 debemos aplicarle un descuento del 10%
} else {
  console.log(" lo siento,No tiene descuento ");
}
