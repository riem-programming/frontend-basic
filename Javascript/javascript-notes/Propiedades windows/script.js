
// es igual que window.confirm() donde devuelve true si aceptamos o false si rechazamos
let confirmacion = confirm("Estas seguro de abrir la pestaña?");
let link = "https://www.youtube.com/";

// abre una nueva ventana
let ventana = window.open(link);

if (confirmacion == true){
    //el .closed devuelve true si la ventana esta cerrada caso contrario false
    console.log(ventana.closed);
    // sirve para parar la carga de una ventana
    // ventana.stop();
}
else {
    // la funcion close() cierra la ventana que abrimos
    ventana.close();
    console.log(ventana.closed);
}

// abre la funcion de imprimir
// window.print();

// abre una casilla para ingresar un texto, todo lo que ingresemos sera tipo string 
// window.prompt('Ingresa tu chiste:');

// abre una casilla para comunicar algo y solo aceptar
// window.alert("Alerta foto");

