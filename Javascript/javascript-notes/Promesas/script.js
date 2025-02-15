// una forma hermosa para manejar multiples errores bajo un mismo catch, es una combinación de las callbacks pero mejoradas.

class Student {
    constructor(n = undefined,a = undefined){
        this.nombre = n;
        this.apodo = a
    }
}

const estudiantes = [
    new Student("jose","tercero"),
    new Student("Marta"),
    new Student("Camilo","Herrera"),
    new Student(undefined,"Pacinto"),
    new Student("Rafa","DistroyerPussy")
]


// console.log(estudiantes)

const obtenerEstudiante = (id) => {
    return new Promise((resolve,reject) => {
        if(estudiantes[id].nombre !== undefined) resolve(estudiantes[id].nombre)
        reject("Error no se ubico el nombre")
    })
}

const obtenerApodo = (id) => {
    return new Promise((resolve,reject) => {
        const apodo = estudiantes[id].apodo
        apodo !== undefined ? resolve(apodo) : reject("Error no se ubico el apodo")
    })
}


obtenerEstudiante(id = 1).then((name)=>{
    console.log(name)
    return obtenerApodo(id)
}).then((apodo)=>{
    console.log(apodo)
}).catch((error)=>{
    console.log(error)
})
