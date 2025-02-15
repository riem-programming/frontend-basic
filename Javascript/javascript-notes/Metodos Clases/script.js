const titulo = document.querySelector(".titulo");

// de default nos devuelve todas las clases relacionadas con el elemento
document.write(titulo.classList);
document.write("<br>"); // salto de linea

// añade una clase al elemento
titulo.classList.add("fondo");
document.write(titulo.classList);
document.write("<br>");

// elimina una clase al elemento
titulo.classList.remove("color");
document.write(titulo.classList);
document.write("<br>");

// señala una clase en especifico de acuerdo al orden de declaración desde indice 0 a N
document.write(titulo.classList.item(1));
document.write("<br>");

// verifica si el elemento tiene la clase o no, en caso q lo tenga devuelve true caso contrario false
document.write(titulo.classList.contains("color"));
document.write("<br>");

// remplaza una clase del elemento por otra, en caso q se cumpla devuelve true, caso q no exista false
document.write(`Resultado de función: ${titulo.classList.replace("fondo","color")}, Resultado: ${titulo.classList}`);
document.write("<br>");

// Si no tiene la clase especificada, la agrega, caso contrario la elimina
titulo.classList.toggle("grande");  // la elimino xq existia
titulo.classList.toggle("pequeño"); // la creo xq no existia
document.write(titulo.classList);
