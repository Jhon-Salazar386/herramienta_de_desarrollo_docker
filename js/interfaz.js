import { caracteristicas } from "./datos.js";

const lista = document.querySelector("#lista-caracteristicas");
const resultado = document.querySelector("#resultado-busqueda");

export function mostrarCaracteristicas(texto = "") {
    lista.replaceChildren();

    const termino = texto.trim().toLocaleLowerCase();

    const filtradas = caracteristicas.filter((caracteristica) => {

        const nombre = caracteristica.nombre.toLocaleLowerCase();

        return nombre.includes(termino);
    });

    if (filtradas.length === 0) {
        resultado.textContent = "No se encontraron características. Prueba otra búsqueda.";
        return;
    }

    resultado.textContent = `Se han encontrado ${filtradas.length} característica(s).`;

    filtradas.forEach((caracteristica) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta");

        const titulo = document.createElement("h3");
        titulo.textContent = caracteristica.nombre;

        const categoria = document.createElement("p");
        categoria.textContent =
            `Categoría: ${caracteristica.categoria}`;

        const descripcion = document.createElement("p");
        descripcion.textContent = caracteristica.descripcion;

        tarjeta.append(titulo, categoria, descripcion);
        lista.append(tarjeta);
    });
}
