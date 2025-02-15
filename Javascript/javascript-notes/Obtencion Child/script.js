const container = document.querySelector(".container");

// obtenemos todo lo q existe en el container, incluyendo esos espacios en blacno por tabular o por poner enter
console.log(container.firstChild);  // obtiene el primer elemento
console.log(container.lastChild);   // ... el ultimo elemento
console.log(container.childNodes);  // todos los elementos, en formato nodoList

container.childNodes.forEach(child => console.log(child));  // se puede recorrer mediante un forEach el formato nodoList

// solo considera los elementos bajo una etiqueta html
console.log(container.firstElementChild);   // obtiene el primer elemento hijo
console.log(container.lastElementChild);    // ... el ultimo
console.log(container.children);            // todos los elementos, en formato HTMLcollection

// para el htmlcollection no se puede con forEach, por eso usamos for
for (child of container.children){
    console.log(child);
}


// a mi criterio tiene más utilidad el firstElementChild y children, pero la otra opcion esta presente para considera todo los casos posibles

