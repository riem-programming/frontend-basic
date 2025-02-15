// esta funcion es hermosa, nos ayuda a ejectura secuencialmente de manera estricta solictudes a servidores esperando a que llegue la información para poder continuar, es lo mismo que hacemos con promesas solo que estaas cuando tienen la información la proyectan no se esperan que el anterior termine para recien ejecutarse, es decir es desordenado pero más legible al codificar, por otra parte el await y async lo maneja de manera ordenada, su forma de controlar los errores lo hacemos por try catch

const obtenerTexto = (texto) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            texto !== undefined ? resolve(texto) : reject("Error parcero")
        },Math.random()*200)
    })
}

// obtenerTexto("1").then(r => console.log(r));
// obtenerTexto("2").then(r => console.log(r));
// obtenerTexto().then(r => console.log(r)).catch(e => console.log(e));

// console.log("***********************************************")

const mostrarTexto = async () => {
    try {
        data1 = await obtenerTexto("1")
        data2 = await obtenerTexto("2")
        data3 = await obtenerTexto("3")
        console.log(data1)
        console.log(data2)
        console.log(data3)
    }catch (e) {
        console.log(e)
    }
}

mostrarTexto()