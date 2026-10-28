# Herramienta de desarrollo Docker

## Que ejecuta el cliente

  El cliente es el navegador que muestra la pagina de la herramienta de desarrollo. Ejecuta el codigo Javascript para que
  los botones muestren y oculten información y para buscar caracteristicas. Tambien carga el HTML y aplica los estilos
  CSS.

## Funciones JavaScript y instrucciones de ejecución

- Funcionalidad 1: Del mensaje de consola a la pagina web

  Se trata de una funcionalidad que nos permite probar los eventos, en donde en base a un evento click sobre un boton, podemos
  hacer que el contenido dentro de un parrafo se actualize, ademas de que, usando un segundo evento, podremos hacer que imprima
  un mensaje en la consola.

  El párrafo que se actualizara usa una propiedad llamada aria-live, el cual sirve para indicar que su contenido es dinamico
  y que puede cambiar en tiempo real.

  Método de uso: Se debe dirigir a su seccion(puedes acceder a ella mediante los links en contenido), y despues presionar el
  boton "Probar interaccion"

  Resultado: El párrafo abajo del boton se actualizara con un nuevo mensaje, ademas de que al entrar en consola, tambien se
  podrá apreciar un mensaje.

- Funcionalidad 2: Mostrar información

  Funcionalidad diseñada para poder mostrar y ocultar información mediante un botón. El boton contiene una propiedad llamado
  aria-expanded, la cual es una propiedad de accesibilidad que se utiliza en elementos interactivos para indicar a los lectores
  de pantalla si un contenido dependiente, esta abierto o cerrado.

  Método de uso: Posicionarse en su respectiva seccion, y presionar el boton "Mostrar informacion" o "Ocultar informacion"

  Resultado: al presionar el boton por primera vez, se mostraran una serie de tarjetas con informacion y asignando un valor
  true a la propiedad aria-expanded, al volver a presionar se ocultara la informacion y se le asigna un valor false a la
  propiedad.

-  Funcionalidad 3: Información generada con JavaScript y búsqueda interactiva

   Funcionalidad que crea tarjetas usando principalmente JavaScript mediante archivos externos como interfas.js y datos.js.
  la funcion mostrarCaracteristicas se importa dentro de main.js, el cual ejecuta la función, y despues la utiliza dentro de
  un evento. La función tambien permite filtrar las caracteristicas por nombre mediante un input, al usar el input, actualizara
  las tarjetas encontradas y tambien actualizara un párrafo con propiedad aria-live.
  
   Método de uso: Posicionarse en su respectiva sección, alli habra un input y una serie de tarjetas, usar el campo de texto,
  se actualizara la cantidad de tarjetas, dependiendo de cuantas coincidencias existan.
  
   Ejemplo: Al introducir la palabra "Contenedores" dentro del campo, el parrafo mostrara 1 coincidencia y la lista
   mostrara el resultado.

## Captura de pestaña de red

Para comprobar que los javascripts se habian importado correctamente, entre al menu de herramientas de desarrollador, y
entre en el apartado de redes, al principio no aparecio nada, pero desactive el cache y recargue la pagina.

<img width="610" height="302" alt="image" src="https://github.com/user-attachments/assets/12d9eb25-0edf-4163-b3c6-8ec38920cd26" />
