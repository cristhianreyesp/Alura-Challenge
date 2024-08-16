function encriptar() {
    var input = document.getElementById("textoEntrada").value.toLowerCase();
    var encriptado = input.replace(/e/g, "enter")
                         .replace(/i/g, "imes")
                         .replace(/a/g, "ai")
                         .replace(/o/g, "ober")
                         .replace(/u/g, "ufat");
    
    mostrarResultado(encriptado);
    mostrarAlertaEncriptado();
}

function desencriptar() {
    var mensajeEncriptado = document.getElementById("textoEntrada").value.toLowerCase();
    var desencriptado = mensajeEncriptado.replace(/enter/g, "e")
                                    .replace(/imes/g, "i")
                                    .replace(/ai/g, "a")
                                    .replace(/ober/g, "o")
                                    .replace(/ufat/g, "u");
    
    mostrarResultado(desencriptado);
    mostrarAlertaDesencriptado();
}

function mostrarResultado(texto) {
    var txtResultado = document.querySelector(".txtresultado");
    var mensaje = document.getElementById("mensaje");
    var imagenVacia = document.getElementById("imagenVacia");
    var botonCopiar = document.getElementById("botonCopiar");

    if (texto === "") {
        mensaje.textContent = "Ningún mensaje fue encontrado.";
        mensaje.style.display = "block";
        txtResultado.classList.add("hidden");
        imagenVacia.style.display = "block";
        botonCopiar.classList.add("hidden");
    } else {
        txtResultado.value = texto;
        mensaje.style.display = "none";
        txtResultado.classList.remove("hidden");
        imagenVacia.style.display = "none";
        botonCopiar.classList.remove("hidden");
    }
}

function copiarTexto() {
    var textoCopiado = document.querySelector(".txtresultado").value;
    navigator.clipboard.writeText(textoCopiado)
        .then(() => {
            mostrarAlertaCopiado();
            var textoEntrada = document.getElementById("textoEntrada");
            textoEntrada.value = '';
            textoEntrada.focus();
        })
        .catch(err => console.error('Error al copiar: ', err));
}
