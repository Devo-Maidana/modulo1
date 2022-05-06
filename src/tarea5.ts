let sueldoActual: number = Number(prompt("ingrese sueldo:"));
let nuevoSueldo: number = 0;
switch (nuevoSueldo) {
  case 1:
    console.log("Ud. tiene un aumento de 20%");
    if (0 < sueldoActual && sueldoActual <= 15000)
      nuevoSueldo = sueldoActual * 1.2;

    break;
  case 2:
    console.log("Ud. tiene un aumento de 10%");
    if (15001 < sueldoActual && sueldoActual <= 20000)
      nuevoSueldo = sueldoActual * 1.1;

    break;
  case 3:
    console.log("Ud. tiene un aumento de 5%");
    if (20001 < sueldoActual && sueldoActual <= 25000)
      nuevoSueldo = sueldoActual * 1.05;

    break;
  default:
    console.log("Ud. no tiene aumento");
}

//Una empresa desea premiar a sus empleados con
//un aumento de sueldo.
//Este aumento se ajusta a la siguiente tabla:
//Sueldo Actual  Sueldo con Aumento
// 0 - 15.000             $   20%
// 15.001 - 20.000        $   10%
// 20.001 - 25.000        $   5%
// Más de 25.000          $ No hay aumento
//Desarrolle un algoritmo dado el salario actual de un empleado
// determine el aumento de sueldo a aplicar y se lo muestre.
//Recuerde plantear el Pseudocódigo y las Pruebas de Escritorio
