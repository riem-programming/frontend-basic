const contenedor = document.querySelector(".container");

// creamos un elemento y se declara con mayuscula UL para la etiqueta html
const formulario = document.createElement("UL");

// inciamos un bucle para insertar elementos dentro del q hemos creado
for (i = 0; i < 10; i++){
    // creamos un elemento LI de una lista
    let itemElement = document.createElement("LI");
    // dentro del contenido de LI le añadimos una información, tambien se puede usar innerHtml o ounerHTML pero como solo ponemos texto usamos textContent.
    itemElement.textContent = "Esta es una mini lista";
    // añadimos a formulario los elementos como hijos
    formulario.appendChild(itemElement);
}
// al contenedor principal añadimos el formulario al div
contenedor.appendChild(formulario);


// UNA MEJOR FORMA DE AÑADIR elementos dentro de un bucle según dalto es usando documentFragment, asi no reinicia el DOM en cada iteración de agregado
const formulario1 = document.createElement("OL");
const fragmento = document.createDocumentFragment();

for (i = 0; i < 10; i ++){
    let itemElement1 = document.createElement("LI");
    itemElement1.textContent = "Esta es una mini lista ordenada";
    fragmento.appendChild(itemElement1);
}

formulario1.appendChild(fragmento);
contenedor.appendChild(formulario1);


// ACLARACION no se si es verdad pero el fragmento solo se usa en solamente cuando vamos a tener contacto en bucles con nuestro html directamente, es decir como añadir 20 formularios al div, es mejor usar fragmento pero en caso q ese bucle sea con un html creado no tiene relevancia xq al interactuar con el html princiapl solo le enviaremos un form