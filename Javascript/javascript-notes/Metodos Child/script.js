
// Con esta función replace Child nos ayuda a cambiar un elemento hijo por otro, no necesariamente debe ser del mismo tipo en esta caso remplazo un h1 con un h2, importante tener claro el padre que sera donde realizaremos el cambio y señalar que hijos vamos a modificar
const container = document.querySelector(".container");
const h1_nuevo = document.createElement("H2");
h1_nuevo.innerHTML = "Nuevo titulo";
const h1_antiguo = document.querySelector(".titulo");
// primero el cambio y luego a quien vamos afectar
container.replaceChild(h1_nuevo,h1_antiguo);


// con esta funcion elminamos un elemento hijo por medio del padre, removeChild
const parrafo = document.querySelector(".parrafo");
container.removeChild(parrafo)


// esta funcion nos verifica si el elemento tiene un hijo, este puede ser incluso considerado el contenido escrito dentro de un <p> hijo <p>
const h3_esteril = document.querySelector(".h3_esteril");
let respuesta = h3_esteril.hasChildNodes();

if (respuesta) {
    document.write("El elemento tiene HIJOS");
}
else {
    document.write("El documento no tiene HIJOS");
}

const h3_no_esteril = document.querySelector(".h3_no-esteril");
respuesta = h3_no_esteril.hasChildNodes();

if (respuesta) {
    document.write("El elemento tiene HIJOS");
}
else {
    document.write("El documento no tiene HIJOS");
}