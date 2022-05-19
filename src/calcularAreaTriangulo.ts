//• Realice un programa que devuelva el área del
//triángulo usando los siguientes pares de base-altura:
//• (1,2) (2,4) (3,6) (4,8) (5, 10) (6,12) (7,14)
//• Implemente un método llamado calcularAreaTriangulo
//que reciba dos números por parámetro (uno llamado
//base y otro altura)

function calcularAreaTriangulo(base: number, altura: number): number {
  return (base * altura) / 2;
}

let i: number;
for (i = 1; i <= 100; i++) {
  console.log("El area es = ", calcularAreaTriangulo(i, i * 2));
}
