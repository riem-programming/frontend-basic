const container1 = window.document.querySelector(".container-1");
const container2 = window.document.querySelector(".container-2");
const button = window.document.querySelector(".button");

button.addEventListener("click",() => {
    alert('estamos en un button');
    // e.stopImmediatePropagation();    detenemos la cadena de eventos
})

container1.addEventListener("click",() => {
    alert('estamos en un container red');
},true)     //sin señaalar el true, esta funcion se ejecutaria al ultimo, esto se debe a que los eventos ocurren en cadena de el más pequeño y va escalando al más grande en este caso seria si apretamos en button, su cadena seria desde él hasta llegar a container 2 y despeus container 1, pero como pusimos true ahora el que se ejecuta primero es container 1; dado el caso q todos son true solo cambiariamos el orden de los eventos alreves


container2.addEventListener("click",(e)=>{
    alert('estamos en un caontiner blue')
    console.log(e.target);      // el único parametro de entrada q recibe estas funciones es una que declaremos puede tener cualquier nombre pero lo normal es poner 'e', donde dentro de esta tenemos diferentes valores y un común es e.target q nos señaala donde ocurrio el evento como reusltado.
})

const button2 = window.document.querySelector(".button2");

// otra forma de pasarle una funcion pero lo negativo no podemos pasarle un parametro y estructamente debe ser una function no puede ser funcion flecha

button2.addEventListener("click",saludar);

function saludar () {
    alert('Hola soy un boton solito');
}