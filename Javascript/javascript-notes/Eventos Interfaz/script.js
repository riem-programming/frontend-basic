const imagen = window.document.querySelector(".imagen");
const input = window.document.querySelector(".entrada");

// ocurre cuando pasa un error de cargado de una imagen, en tal caso se ejecuta este evento
// imagen.addEventListener("error",()=>{
//     console.log("La imagen no se cargo");
// })

// ocurre cuando cargamos completamente un elemento o en este caso la pagina entera
// addEventListener("load",()=>{
//     console.log("La pagina se cargo");
// })

// antes de terminar de cargar la pagina o el elemento seleccionado, ocurre este evento por un momento
// antes de irte de sitio
// addEventListener("beforeunload",()=>{
//     console.log("La pagina esta por cargar algo")
// })

// este es lo contrario a beforeunload es que se muestra esto cuando completmanete se cargo la accion, es decir estamos en otro contexto
// despues que te fuiste del sitio
// addEventListener("unload",()=>{
//     console.log("Se cargo completamente")
// })

// link.addEventListener("beforeunload",()=>{
//     console.log("Accion antes de cargar");
// })

// cada que se scrolea se aplica este evento en el elemento, en este caso esta para window que seria toda la pagina
// addEventListener("scroll",()=>{
//     console.log("Se scroleo");
// })

// cada que modificamos el tamaño se activara este evento
// addEventListener("resize",()=>{
//     console.log("Se modifico el tamaño");
// })


// solo funciona con input y textarea, es un evento que se activa cuando seleccionamos contenido dentro del input
// para este ejemplo utilizamos las propiedade selectionStart para obetenre cuando inicio la candea y cuando temrino con selection end y luego con la funcion propia de js substring que en base a un string lo corta por inicio y fin.
input.addEventListener("select",(e)=>{
    const parrafonuevo = window.document.querySelector(".parrafonuevo");
    let inicio = e.target.selectionStart;
    let fin = e.target.selectionEnd;
    parrafonuevo.textContent = e.target.value.substring(inicio,fin);
})