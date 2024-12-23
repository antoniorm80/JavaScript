// 22.- Set y Maps -> 4:33:22  ---> !Important

// SET: me trae un objeto SIN  repetidos. Pero, hay que convertirlo a Array.
let conjunto = new Set(['Pedro', 'María', 'Ricardo','Pedro', 'Ricardo', 'Ricardo'])

// Agregar
conjunto.add('Antonio')
// Eliminar
conjunto.delete('Pedro')
// Tiene un elemento
let pregunta = conjunto.has('Modesto')
// Tamañan de un Array
let tamanio = conjunto.size

// console.log(conjunto)
// console.log(pregunta)
// console.log(tamanio)

// Ejemplo para eliminar repetidos
let array = ['Cama', 'Armario', 'Escritorio', 'Cama', 'Estante', 'Mesa']
// console.log(array)

function comprar(muebles) {
console.log(muebles)
}

function comprarSoloUnaUnidad(muebles) {
    let unicaUnidad = new Set(muebles)

    console.log(unicaUnidad)
}

 comprar(array)
 comprarSoloUnaUnidad(array)

 // ********** Ejericio de Code Challenge ***********
  let arrNumbers = [1,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,5]
  let  numUnico = new Set(arrNumbers) // Limpiar los duplicados 
  console.log(numUnico)
  // *** Spread Operator ***
  let newArray = [...numUnico] //Convertirlo nuevamente a Array
  console.log("Convertirlo a Array")
  console.log(newArray)
// **************************************************

// MAPs: Pares claves / valor 
let map = new Map([
    ['Computadoras', 10],
    ['Tablets', 5],
    ['Celulares', 15],
])

// // Diferencia entre un Objeto y un Map
// let objeto = {
//     'Computadoras': 10,
//     'Tablets': 5,
//     'Celulares': 15,
// }

// Agregar
map.set("Teclados", 20)
// Delete
map.delete("Computadoras")
// Tienen un elemento
let preguntaHas = map.has("Tablets")
// Tamaño
let preguntaMap = map.size

console.log(map)
console.log(preguntaHas)
console.log(preguntaMap)