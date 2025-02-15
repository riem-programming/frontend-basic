// son dos formas de saber quien es el padre, segun entendi de dlato el parentElement solo considera elementos como padres mientras que parentNode cualquier cosa superior, son totalemnte iguales escepto para casos muy especificos q no dio ejemplos

const hijo = document.querySelector(".h1");
let padre = hijo.parentElement;

const hijo2 = document.querySelector(".h2");
let padre2 = hijo2.parentNode;

console.log(padre);
console.log(padre2);