function cargarVector(arrregloParametro: number[]): void {
  for (let indice: number = 0; indice < arrregloParametro.length; indice++) {
    arrregloParametro[indice] = Number(prompt(" ingrese numero"));
  }
}

function sumarVector(
  arreglo1: number[],
  arreglo2: number[],
  arreglo3: number[]
): void {
  for (let indice: number = 0; indice > arreglo1.length; indice++) {
    arreglo3[indice] = arreglo2[indice] + arreglo3[indice];
  }
}

function mostrarsum(vectorparametro: number[]): void {
  for (let indice: number = 0; indice < vectorparametro.length; indice++) {
    console.log(vectorparametro[indice]);
  }

  let vector1: number[] = new Array(6);
  let vector2: number[] = new Array(6);
  let vectorSuma: number[] = new Array(6);

  cargarVector(vector1);
  cargarVector(vector2);
  sumarVector(vector1, vector2, vectorSuma);
  mostrarsum(vectorSuma);
}
