let base: number = 1;
let altura: number = 2;

function calcularAreaTriangulo(base: number, altura: number): number {
  return (base * altura) / 2;
}
console.log(calcularAreaTriangulo(base, altura));
for (let cont = 0; cont <= 7; cont++) {
  calcularAreaTriangulo(base, altura);

  base += 1;
  altura += 2;
}
