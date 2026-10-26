const botonMensaje = document.getElementById("btn-mensaje");
const mensaje = document.getElementById("mensaje");

botonMensaje.addEventListener("click", () => {

    mensaje.textContent = "Se ha pulsado el botón de interacción";

});

botonMensaje.addEventListener("click", () => {

    console.log("Se ha pulsado el botón de interacción")

});

const botonInformacion = document.getElementById("btn-informacion");
const detalleDocker = document.getElementById("detalle-docker");

botonInformacion.addEventListener("click", () => {

    const estaOculto = detalleDocker.classList.toggle("oculto");

    if (estaOculto) {
        botonInformacion.textContent = "Mostrar información";
    } else {
        botonInformacion.textContent = "Ocultar información";
    }

    botonInformacion.setAttribute("aria-expanded", String(!estaOculto));
});
