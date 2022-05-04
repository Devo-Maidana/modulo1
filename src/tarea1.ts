let precioProducto: number = Number(prompt("igrese numero por teclado "));
let porcen: number = 0.1;
let descuento: number = Number(precioProducto * porcen);
let preciototal: number = precioProducto - descuento;

console.log(preciototal);

//tarea Implemente un algoritmo que calcule y
//muestre por pantalla el precio final de un producto después de aplicarle un descuento
//El precio inicial lo ingresa el usuario usando prompt
//El descuento a aplicar es del 10%. Recuerde que puede obtener el 10% de un valor multiplicado por 0,1
//El descuento debe ser guardados en una variable (no ingresados por teclado)
