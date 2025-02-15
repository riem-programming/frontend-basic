const input = document.querySelector(".input");

// PARA LOS ATRIBUTOS DE ELEMENTOS no es necesario usar el .setAtribute, sino defrente con punto como una funcion

// className, nos vota el nombre de className
document.write(input.className);
// Value es el contenido q se ingresa
document.write(input.value);
// Type, tipo de input
input.type = "password";
input.type = "text";

// accept, esto se utiliza para confirmar q tipo de información vamos a aceptar, cuando le des click al input te saldra q solo png y asi
const inputFile = document.querySelector(".input-file");
inputFile.accept = "image/png";

// form, un elemento que este afuera de un formulario adjuntarlo adentro del mismo formulario, pero este solo se puede realizar con setAttribute según probe
const inputAlone = document.querySelector(".input-alone");
inputAlone.setAttribute("form","formulario");

// Obliga para poder enviar q sea almenos 4 caracteres a más
input.minLength = 4;
// El contenido de fondo
input.placeholder = "AÑAÑAÑA";
// Obligar al usaurio a ingresar esta seccion para enviar el ormulario
input.required = " ";



// style, en ves de poner background-color nosotros ponemos backgroundColor
const titulo = document.querySelector(".titulo");
titulo.style.color = "green";
titulo.style.backgroundColor = "#004";