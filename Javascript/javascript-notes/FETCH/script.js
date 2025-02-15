// pagina de la api https://reqres.in/

// para el metodo GET simplemente podemos declara en fetch la url de la api, ahora tenemos que entender que fetch es una promesa, la cual nos devolvera el resultado encapsulado. Luego de desecapsular dicha respuesta debemos manejarla y transformarla en un tipo de variable que quedramos, se nos presenta dos formas: 1) .text() que nos devuelve el conteniedo de la api en un formato serializado es decir un string de un json. 2) .json() nos devuelve un dato descerializado.
fetch("https://reqres.in/api/users?page=2")
    .then(res => res.text())
    .then(res => console.log(JSON.parse(res)))      // lo deserializamos

fetch("https://reqres.in/api/users?page=2")
    .then(res => res.json())
    .then(res => console.log(res))

// para aplicar un metodo POST, todo lo debemos trabajar en el fetch, pero para disponer de mejor orden podemos enviarle el atributo como una variable si es más cómodo y visual
// ES importante primero declarar el methodo en este caso POST, luego el body sera la información que debemos enviar, y por último en headers indicamos que tipo de contenido estamos enviando, en este caso es un json para que se de cuenta el servidor

const headers = {
    method : "POST",
    body : JSON.stringify({
        name : "Rafa",
        job : "Programador"
    }),
    headers : {
        "Content-type" : "application/json"
    } 
}

fetch("https://reqres.in/api/users",headers)
    .then(res => res.json())
    .then(res => console.log(res))

// una forma increible de cargar una imagen es con el metodo blob, que lo maneja como respuesta, luego para poder imprimirlo con el metodo createObjectURL vuelve esa imagen en una url momentanea para poder colocarla en el atributo de html img en src y poder visualizarla

const image = document.querySelector(".image")
fetch("pitochu.jpg")
    .then(res => res.blob())
    .then(res => {
        console.log(res)
        image.src = URL.createObjectURL(res)
    })
