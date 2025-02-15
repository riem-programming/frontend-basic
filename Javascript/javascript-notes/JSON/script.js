// Según el papu de dalto menciono que el json es aquel que declara sus variables entre comillas a diferencia del objeto q usamos en javascript.

const json = {"nombre":"rafa","apeliido":"echevarria"}
const objeto = {nombre: "rafa",apellido:"echevarria"}

console.log(json)
console.log(objeto)

if(json === objeto)
    console.log("Son iguales")
else
    console.log("No son iguales")

// para enviar una información al servidor debemos hacerlo en un string todo el contenido del json a esto se le conoce como serializado, ahora cuando recibimos información puede que este serializado asi que para poder manipularla debemos descerializarlo y se comportara igual que un json como el de arriba

const serializado = JSON.stringify(json)
const descerializado = JSON.parse(serializado)

console.log(typeof(serializado))
console.log(typeof(descerializado))