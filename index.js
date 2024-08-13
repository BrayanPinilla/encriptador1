function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let cuadro = document.getElementById("mensaje");
    let imagen = document.getElementById("fondo");
    let nuevoTexto = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");
    if (texto.length != 0) {
        document.getElementById("mensaje").value = nuevoTexto;
        tituloMensaje.textContent = "Texto encriptado";
        parrafo.textContent = "";
        imagen.style.visibility = "hidden";
        cuadro.style.visibility = "visible";
    } else {
        cuadro.style.visibility = "hidden";
        imagen.style.visibility = "visible";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas Encriptar o Desencriptar";
        document.getElementById("mensaje").value = "";
        alert("Ingresa un texto para encriptar");
        
    }
}
function desencriptar(params) {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let cuadro = document.getElementById("mensaje");
    let imagen = document.getElementById("fondo");
    let copia = document.getElementById("copiar");
    let nuevoTexto = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("mensaje").value = nuevoTexto;
        tituloMensaje.textContent = "Texto desencriptado";
        parrafo.textContent = "";
        imagen.style.visibility = "hidden";
        cuadro.style.visibility = "visible";
    } else {
        cuadro.style.visibility = "hidden";
        imagen.style.visibility = "visible";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas Encriptar o Desencriptar";
        document.getElementById("mensaje").value = "";
        alert("Ingresa un texto para desencriptar");
        
    }
}
function copiar() {
    let texto = document.getElementById("texto");
    let mensaje = document.getElementById("mensaje").value;
    document.getElementById("texto").value = mensaje;
}