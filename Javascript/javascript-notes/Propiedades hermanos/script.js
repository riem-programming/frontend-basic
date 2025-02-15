const medio = document.querySelector(".hermano_medio");

// next el elemento hermano siguiente, previo el elemento hermano antes, lo mismo que pasaba a señalar hijos, el sibling sin mencionar elemento considera incluso los espacios en blanco que utilizamos, ientras que los que usan Element solo considera como hermanos a los elementos existentes.

console.log(medio.nextSibling);
console.log(medio.previousSibling);

console.log(medio.nextElementSibling);
console.log(medio.previousElementSibling);