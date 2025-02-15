// una forma brutal de utilziar el fetch y axios con funciones asincronas evitandonos el .then, para ejectura el axios debe ser desde el html

const obtenerDataFetch = async () => {
    let peticion = await fetch("https://reqres.in/api/users?page=2")
    let resultado = await peticion.json()
    console.log(resultado)
}

const obtenerDataAxios = async () => {
    let resultado = await axios("https://reqres.in/api/users?page=2")
    console.log(resultado.data)
}

obtenerDataFetch()
obtenerDataAxios()
