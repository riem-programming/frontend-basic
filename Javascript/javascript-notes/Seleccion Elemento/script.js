// Selecciona por ID del elemento solamente a 1, o el primero
parrafo = document.getElementById("parrafo1");
document.write(parrafo);

// Seleccionamos todos los elementos "p" -> me devuleve una lista de elementos
parrafo = document.getElementsByTagName("p");
document.write(parrafo);

// Seleccionamos solo el primer elemento con nombre de clase .parrafo
parrafo = document.querySelector(".parrafo");
document.write(parrafo);
// Seleccionamos solo el primer elemnto con nombre id parrafo1
parrafo = document.querySelector("#parrafo1");
document.write(parrafo);

// Seleccionamos todos los elementos que coincidan con .parrafo -> NOS DEVUELVE UNA LISTA DE NODOS
parrafo = document.querySelectorAll(".parrafo");
document.write(parrafo);
// lo mismo  
parrafo = document.querySelectorAll("#parrafo");
document.write(parrafo);


// seleccionar elemento padre en base a un elemento hijo, para ser especificos al seleccionar
parrafo = document.querySelector(".parrafo-div")
let padre_parrafo= parrafo.closest(".div3");
console.log(padre_parrafo)