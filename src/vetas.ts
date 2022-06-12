let vendedores = ["camila", "Franco", "sofia", "Matias", "agusina"];
let trimestre = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre"
];

let ventasvendedor1 = [
  32558,
  36165,
  34240,
  39273,
  34360,
  21347,
  20869,
  21493,
  23062,
  31908,
  30369,
  30652
];
let ventasvendedor2 = [
  27520,
  31480,
  24053,
  34823,
  32942,
  38477,
  23756,
  21413,
  26699,
  22045,
  25625,
  26855
];
let ventasvendedor3 = [
  20584,
  33473,
  34300,
  24598,
  33955,
  24040,
  39173,
  25542,
  25105,
  26759,
  29790,
  36218
];
let ventasvendedor4 = [
  27243,
  38774,
  21246,
  30691,
  24542,
  39771,
  31807,
  31641,
  20850,
  29837,
  37182,
  28006
];
let ventasvendedor5 = [
  23334,
  32687,
  25217,
  26844,
  27033,
  35244,
  25702,
  25781,
  35525,
  34874,
  38842,
  20562
];

let vendedores = vendedores.length;
console.log(vendedores);
for (let i = 0; i < vendedores; i++) {
  console.log("vendedor llamado: " + vendedores[i]);
  console.log("mes de trimestre: " + trimestre[i]);
  console.log("ventas sofia: " + ventasvendedor3[i]);

  if (ventasvendedor3[i]) {
    console.log(" Sí tiene ventas");
  } else {
    console.log("No tiene ventas");
  }
}
