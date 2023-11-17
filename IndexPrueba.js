function verificarNombreCompleto(texto) {
  if (texto.length === 0) {
    return "Por favor, ingrese un nombre.";
  } else if (texto.split(" ").length !== 3) {
    return "El nombre debe contener tres palabras.";
  } else {
    return texto.toUpperCase();
  }
}

module.exports = { verificarNombreCompleto };
