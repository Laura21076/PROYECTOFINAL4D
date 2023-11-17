document.addEventListener("DOMContentLoaded", function () {

    console.log("Laura Cardona Morales - 21076 - 4D");

    const nombreCompleto = document.getElementById("nombreCompleto");
    const verificarBtn = document.getElementById("verificarBtn");
    const resultadoTexto = document.getElementById("resultadoTexto");

    verificarBtn.addEventListener("click", function () {
        const texto = nombreCompleto.value;

        // Verificar la longitud del texto
        if (texto.length === 0) {
            alert("Por favor, ingrese un nombre.");
            
        } else if (texto.split(" ").length !== 3) {
            alert("El nombre debe contener tres palabras.");
            
        } else {
            const nombreEnMayusculas = texto.toUpperCase();
            resultadoTexto.textContent = `${nombreEnMayusculas}`;
        }
    });
});

