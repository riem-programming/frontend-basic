// Modificando un atributo de un elemento, en especifico el tipo de range a text
const rangoEtario = document.querySelector(".rangoEdad");
rangoEtario.setAttribute("type","password");

// Obtener información de un atributo en este caso del atributo tipo type
tipo = rangoEtario.getAttribute("type");
document.write(tipo);

// Remover un atributo en este caso lo hacemos con placeholder
const textFirst = document.getElementById("username");
textFirst.removeAttribute("placeholder");


/* DATO CURIOSO EL SET sirve tanto para remplazar un atributo como para crear*/