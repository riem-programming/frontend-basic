const titulo = document.querySelector(".titulo");

alert(titulo.textContent);  // obtiene todo el contenido ignorando el html interno
alert(titulo.innerHTML);    // obtiene todo el contenido y el html interno del elemento
alert(titulo.outerHTML);    // obtiene informacion del elemento, su contenido y el html interno