// https://reqres.in/
// NOS AHORRAMOS 1 LIENA DE CODIGO puesto que los datos ya no vienen encapsulados, segundo no es necesario serializar el JSON que enviamos, en caso que necesitamos cambiar algo del header o metodo, en el segundo parametro lo establecemos

// axios("https://reqres.in/api/users?page=2")
//     .then(res => console.log(res.data))

const newUser = {
    "name": "morpheus",
    "job": "leader"
}

// metodo 1 para realziar un post
axios.post("https://reqres.in/api/users",newUser)
    .then(res => console.log(res))

// metodo 2 para realizar un post
axios("https://reqres.in/api/users",{
    "method":"post",
    "body":newUser
})
    .then(res => console.log(res))