// Estructuras Avanzadas
// funciones de orden superior
// Arrays avanzados

// - Métodos

// forEach --- Sólo lee el arreglo SIN crear un nuevo array
let numbers = [1, 2, 3, 4, 5, 6]

numbers.forEach(element => {
    // console.log(element)
})

// map  - Retorna un Nuevo Array
let doubled = numbers.map(element => element * 2)
// console.log(doubled)

// filter - Ejecutar una operación donde filtre los datos - Nuevo Array
let evens = numbers.filter(element => element % 2 === 0 )
// console.log(evens)

// reduce --- Reduce en unico valor
let sum = numbers.reduce((result, current) => result + current, 5 )
// console.log(sum )

// - Manipulación 
// flat
let nestedArray = [1,[2,[3,[4]]]]

// console.log(nestedArray)
let flatArray  =nestedArray.flat(1)
// console.log(flatArray)
 flatArray  =nestedArray.flat(2)
// console.log(flatArray)
 flatArray  =nestedArray.flat(3)
// console.log(flatArray)

// flatMap - Nos devuelvo un nuevo array,  de 2 elementos con 4 elementos.
let phrases = ["Hola mundo", "Adiós mundo"]
let words = phrases.flatMap( phrase => phrase.split(" "))
// console.log(words)

// - Ordenación  - sort funciona para string perom no para números
let unsorted = [3, 4, 1, 6 , 10]
let sorted =  unsorted.sort((a, b) => a - b)
// console.log(sorted)

// reverse -- se ha mutado en el mismo array - (Mutable)
sorted.reverse()
// console.log(sorted)

// - Búsqueda
console.log(sorted.includes(4))
console.log(sorted.includes(5))

// find -- Devuelve el número primer encontrado y sale
let firstEven = sorted.find(element => element % 2 === 0)
// console.log(firstEven)

// findeIndex
// let firstEvenIndex = unsorted1.findIndex(element => element % 2 === 0)
// console.log(firstEvenIndex)

// Set Avanzaodos
// - Operaciones
let numbersArray = [1, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 6, 6, 6]
// let numbersSet = new Set(numbersArray) // --- Devuelve un Set SIN DUPLICADOS
let numbersSet = new Set(numbersArray) // --- Devuelve un Set SIN DUPLICADOS
numbersArray = [...new Set(numbersArray)] // --- Devuelve un ARRAY / SIN DUPLICADOS
// console.log(numbersSet)
// console.log(numbersArray)

// Unión
const setA = new Set([1, 2, 3])
const setB = new Set([2, 3, 4, 5])
const Union = new Set([...setA, ...setB]) // Un nuevo SET sin Duplicados
// console.log(Union)

// has -> Intersección - Valores comunes en 2 Set que exista en amabos => Output : 2, 3
const intersection = new Set([...setA].filter(element => setB.has(element)))
console.log(intersection)

// Diferencia -Valores que no están en el setA  => Output: 1 -- solo del setA
const difference = new Set([...setA].filter (element => !setB.has(element)))
console.log(difference)

// Conversión -- convertir de Set a Array "Spread operator"
console.log([...setA])

// - Iteración
// forEach
setA.forEach(element => console.log(element))

// Maps Avanzados
let myMap = new Map([
    ["name", "arivera"],
    ["age", "38"],
])
console.log(myMap)
myMap.forEach((value, key) => console.log(`${key}: ${value}`))

// - Conversión
// Map a Array
const arrayFromMap =  Array.from(myMap)
console.log(arrayFromMap)

// Map a Objeto (Dictionary) 
const objFromMap = Object.fromEntries(myMap)
console.log(objFromMap)

// Objeto a Map
const mapFromObject = new Map(Object.entries(objFromMap))
console.log(mapFromObject)