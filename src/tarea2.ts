let posicion: number = Number(prompt("ingrese la posicion del Jugador "));

if (posicion === 1) {
  console.log("Entregue una Medalla de ORO ");
} else {
  if (posicion === 2) {
    console.log("Entregue una Medalla de PLATA ");
  } else {
    if (posicion === 3) {
      console.log("Entregue una Medalla de BRONCE ");
    } else {
      console.log(
        " MUCGAS GRACIAS POR PARTICIPAR LE OTORGAREMOS UN CERTIFICADO"
      );
    }
  }
}
