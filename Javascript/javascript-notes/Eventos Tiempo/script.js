const parrafo = window.document.querySelector(".parrafo");


// realizamos una accion cada 2 segundos, en la funcion declaramos primero que vamos hacer y en que tiempo va tardar
const temporizador = setTimeout(()=>{
    parrafo.textContent += "temporizador";
},2000);

setInterval(()=>{
    // elimina el temporizador con esa variable
    clearTimeout(temporizador);
},1000)

// lo mismo que arriba solo que este no se detendra de ejecutar una ves empiece
const parrafo2 = window.document.querySelector(".parrafo2");
const intervalos = setInterval(() => {
    parrafo2.textContent += "intervalo";
}, 1000);

setTimeout(()=>{
    // elimina el temporizador de intervalo
    clearInterval(intervalos)
},10000)

// clearInterval()