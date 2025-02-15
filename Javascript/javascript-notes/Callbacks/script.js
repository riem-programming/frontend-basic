// no existe mucho por comentar, pero lo que hace las callaback es poder dentro de una función llamar distintas funciones bajo el mismo nombre, en el ejemplo de ordenar una lista  podemos llamar el comparador que buscar el mnenor para ordenar descendentemente o el comparador que busca el mayor para ordenar ascendentemente

class Person {
    constructor(nombre,instagram){
        this.nombre = nombre
        this.instagram = instagram
    }
}

let data = []

for(let i = 0; i < 10; i++){
    data[i] = new Person(`Rafa${i}`,`Rafa${i}`)
}
const identifica_Nombre = id => {
    const nombre = data[id].nombre
    if (nombre == undefined){
        console.log("Error en nombre")
    } else{
        console.log(`Nombre: ${data[id].nombre}`)
    }
}

const saludar = cb => {
    cb(3)
}

data[3].nombre = undefined;



saludar(identifica_Nombre)



// Vas a crear una función que tome una lista de números y una función de comparación como parámetros. La función ordenará la lista de números utilizando la función de comparación proporcionada.

let numbers = [2, 3, 4, 1, 2, 7, 9]

const comparar_Menor = (num1,num2) => {
    return num1 > num2 ? true : false
}

const comparar_Mayor = (num1,num2) => {
    return num1 < num2 ? true : false
}

const ordenar = (data,cb) => {
    let listaOrdenada = []
    iteraciones = data.length
    let listaTest = []
    for(let m=0;m<iteraciones;m++) listaTest[m] = data[m];
    for(let i = 0; i < iteraciones; i++){
        numeroMenor = listaTest[0]
        index = 0
        for(let j = 0; j < listaTest.length; j++){
            if(cb(numeroMenor,listaTest[j])){
                numeroMenor = listaTest[j]
                index = j
            }
        }
        listaTest.splice(index,1)
        listaOrdenada[i] = numeroMenor
    }
    return listaOrdenada
}

let menor

menor = ordenar(numbers,comparar_Mayor)
console.log(menor)


menor = ordenar(numbers,comparar_Menor)
console.log(menor)


// forma god

const ordenarLista = (lista, funcionComparar) => {
    return lista.sort(funcionComparar)
}

const comprarAscendente = (a,b) =>{
    return a - b
}

const comprarDescendente = (a,b) => {
    return b - a
}

const numeros = [5, 3, 8, 1, 2, 9, 4, 7, 6];

// Ordenar la lista de manera ascendente
const listaAscendente = ordenarLista(numeros.slice(), comprarAscendente);
console.log('Orden ascendente:', listaAscendente);

console.log(numeros)

// Ordenar la lista de manera descendente
const listaDescendente = ordenarLista(numeros.slice(), comprarDescendente);
console.log('Orden descendente:', listaDescendente);