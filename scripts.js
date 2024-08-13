function encriptar() {
    var input = document.getElementById("textoEntrada").value.toLowerCase();
    var encriptado = input.replace(/e/g, "enter")
                         .replace(/i/g, "imes")
                         .replace(/a/g, "ai")
                         .replace(/o/g, "ober")
                         .replace(/u/g, "ufat");
    
    mostarResultado(encriptado);
    mostrarAlertaEncriptado();
}

function desencriptar() {
    var mensajeEncriptado = document.getElementById("textoEntrada").value.toLowerCase();
    var desencriptado = mensajeEncriptado.replace(/enter/g, "e")
                                    .replace(/imes/g, "i")
                                    .replace(/ai/g, "a")
                                    .replace(/ober/g, "o")
                                    .replace(/ufat/g, "u");
    
    mostarResultado(desencriptado);
    mostrarAlertaDesencriptado();
}

function mostarResultado(text) {
    var mensaje = document.getElementById("mensaje");
    var mensaje1 = document.getElementById("mensaje1");
    var imagenVacia = document.getElementById("imagenVacia");
    var botonCopiar = document.getElementById("botonCopiar");

    if (text === "") {
        mensaje.textContent = "Ningún mensaje fue encontrado.";
        mensaje1.textContent = "No hay ningún mensaje.";
        imagenVacia.style.display = "block";
        botonCopiar.style.display = "none";
    } else {
        mensaje.textContent = text;
        mensaje1.style.display = "none";
        imagenVacia.style.display = "none";
        botonCopiar.style.display = "block";
    }
}

function copiarTexto() {
    var textoCopiado = document.getElementById("mensaje").textContent;
    navigator.clipboard.writeText(textoCopiado)
        .then(() => { mostrarAlertaCopiado();
        var textoEntrada = document.getElementById("textoEntrada");
        textoEntrada.value = '';
        textoEntrada.focus();
    } )
        .catch(err => console.error('Error al copiar: ', err));
}
