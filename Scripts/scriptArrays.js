// 16.- Arrays (Listas) -> 2:35:23
// Los arreglos deben declararse con "let" y no con "const" para poder mutarlos.

const array = ['Curso HTML', 'Curso CSS', 'Curso Javascript']
 
// Inicializarlo
const arrayIni = new Array(5);
arrayIni[0] = "HTML"
arrayIni[1] = "CSS"
arrayIni[2] = "Javascropt"
arrayIni[3] = 99
arrayIni[4] = [1,2,3,4,5]

//console.log(arrayIni)

// length
//console.log(arrayIni.length)

// Sort (Odenar)
const arraySort = [9,5,2,7,1]
//console.log(arraySort.sort())

const arrSortString = ["Modesto", "Alvaro", "Carlos", "José"]
//console.log(arrSortString.sort())

// Bucle for 
let arrElemento = ''
for (let i = 0; i < arrSortString.length; i++) {
  const element = arrSortString[i];
  // console.log(element);    
  arrElemento += "<li>" + arrSortString[i] + "</li>"    
}

// document.getElementById("seleccionado").innerHTML = arrElemento

// length - Agregar elementos a un Array
const arrayAddElements = ['HTML', 'CSS', 'Javascript']
arrayAddElements[arrayAddElements.length] = "Typescript"
arrayAddElements[arrayAddElements.length] = "React"

// Push - Agregar elementos a un Array
arrayAddElements.push("Angular")

// console.log(arrayAddElements)

// Others -> filter(), map(),  fill(), find, findIndex(), some(), every(), pop(), shift(), push(), unshift

// filter()
const arrayFrutas = ["Manzana", "Peras", "Banana", "Naranja", "Manzana", "Naranja"]
const resultadoFrutas = arrayFrutas.filter( x => x == "Manzana")
// console.log(resultadoFrutas)

// Arrays de Objetos []
const arrayObjetos = [
  {nombre: 'Pedro', apellido: 'Gonzalez'},
  {nombre: 'Maria', apellido: 'Gonzalez'},
  {nombre: 'Lucia', apellido: 'Gonzalez'},
  {nombre: 'Ricardo', apellido: 'Perez'},
  {nombre: 'Glottis', apellido: 'Juarez'},
  {nombre: 'Fernanda', apellido: 'Fernandez'}
]
// console.log(arrayObjetos)

const resObjetos = arrayObjetos.filter( x => x.apellido == "Gonzalez")
// console.log(resObjetos)
for (let i = 0; i < resObjetos.length; i++) {
  const element = resObjetos[i]; // Obtiene solo el nombre del filtro de apellidos
  // console.log(element.nombre)    
}

// map()
const arrayMapFrutas = ["Manzana", "Manzana", "Manzana", "Manzana"]
const resMapFrutas = arrayMapFrutas.map(x =>{
  if (x == 'Manzana') return 'Naranja'
} )
// console.log(resMapFrutas);

// fill()
const arrayFillFrutas = ["Manzana", "Manzana", "Manzana", "Manzana"]
const resFillFrutas = arrayFillFrutas.fill('Naranja', 1)
// console.log(resFillFrutas);

// find()  
const arrayFindFrutas = ["Manzana", "Manzana", "Pera", "Manzana", 'Pera']
const resFindFrutas = arrayFindFrutas.find( x => x == 'Pera') 
// console.log(resFindFrutas); // Te devuelve el primer elemento encontrado, como string NO como un Array

// find() de Objetos
const arrayFindObjetos = [
  {nombre: 'Pedro', apellido: 'Gonzalez'},
  {nombre: 'Maria', apellido: 'Gonzalez'},
  {nombre: 'Lucia', apellido: 'Gonzalez'}
]
const resFindObj = arrayFindObjetos.find( x => x.apellido == "Gonzalez") 
// console.log(resFindObj) // Te devuelve el primer objeto encontrado

// findIndex()  
const arrayFindIndexFrutas = ["Manzana", "Manzana", "Pera", "Manzana", 'Pera']
const resFindIndexFrutas = arrayFindIndexFrutas.findIndex( x => x == 'Pera') 
// console.log(resFindIndexFrutas); // Te devuelve el Indice del elemento encontrado

// some() - Boolean
const arraySomeFrutas = ["Manzana", "Manzana", "Pera", "Manzana", 'Pera']
const resSomeFrutasF = arraySomeFrutas.some( x => x == 'Pera')  // true
const resSomeFrutasT = arraySomeFrutas.some( x => x == 'Mango') // false
// console.log(resSomeFrutasF); // Devuelve 'true' 
// console.log(resSomeFrutasT); // Devuelve 'false'

// every() - Boolean - ¿Son todas Manzanas?.
const arrayEveryFrutas = ["Manzana", "Manzana", "Manzana", 'Pera']
const resEveryFrutas = arrayEveryFrutas.every( x => x == 'Pera') 
// console.log(resEveryFrutas); // Devuelve 'false' 

// pop()  - le quita (arranca) el elemento al array. 
const arrayPopFrutas = ["Manzana", "Manzana", "Manzana", 'Pera']
const resPopFrutas = arrayPopFrutas.pop()
// console.log(resPopFrutas); 
// console.log(arrayPopFrutas); 

// push()  - Agrega un elemento al FINAL del array.
const arrayPushFrutas = ["Manzana", "Naranja", "Limón", 'Pera']
arrayPushFrutas.push('Ciruela')
// console.log(arrayPushFrutas); 

// unshift()  - Agrega un elemento al INICIO del array.
const arrayUnShiftFrutas = ["Manzana", "Naranja", "Limón", 'Pera']
arrayUnShiftFrutas.unshift('Ciruela')
// console.log(arrayUnShiftFrutas); 

// splice()  - Indice, Cuántos quiero cortar, "Reemplazar"
const arraySplicetFrutas = ["Manzana", "Naranja", "Limón", 'Pera']
arraySplicetFrutas.splice(2, 1, 'Ciruela', 'kiwi')
// console.log(arraySplicetFrutas); 

// *** Diferencia enre Splice y Slice 
// 'Splice' reemplazar el array y 'Slice' deveulve los elementos.

// join() 
const arrayJoinFrutas = ["Manzana", "Naranja", "Limón", 'Pera']
document.getElementById("seleccionado").innerHTML = arrayJoinFrutas.join(' \\ ')

// concat() 
const arrayConcatFrutas = ["Manzana", "Naranja", "Limón", 'Pera']
const arrayConcatVerduaras = ["Tomate", "Cebolla", "Lechuga", 'Repollo']
// console.log(arrayConcatFrutas.concat(arrayConcatVerduaras))

// sort() - Otra forma de Ordenar con números repetidos.  !important - Code Challenge
const arraySortNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
// console.log(arraySortNumber.sort((x, y) => x - y )) // Ascendente
// console.log(arraySortNumber.sort((x, y) => y - x )) // Descendente

// sort()  - Objetos
const arraySortObjetos = [
  { auto: 'FIAT', año: 2020},
  { auto: 'BMW', año: 2019},
  { auto: 'RENAULT', año: 2023},
  { auto: 'FORD', año: 2021},
]
// console.log(arraySortObjetos.sort((x, y) => x.año - y.año )) // Ascendente
