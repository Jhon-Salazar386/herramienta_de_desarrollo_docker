const botonMensaje = document.getElementById("btn-mensaje");
const mensaje = document.getElementById("mensaje");

botonMensaje.addEventListener("click", () => {

    mensaje.textContent = "Se ha pulsado el botón de interacción";

});

botonMensaje.addEventListener("click", () => {

    console.log("Se ha pulsado el botón de interacción")

});
