
//   18.- Objeto Math -> 3:34:44
Math.E          // Devuelve el númeor de Euler
Math.PI         // Devuelve PI
Math.SQRT2      // Devuelve la raíz cuadrada de 2
Math.SQRT1_2    // Devuelve la raíz cuadrada de 1/2
Math.LN2        // Devuelve el logaritmo natural de 2
Math.LN10       // Devuelve el logaritmo natural de 10
Math.LOG2E      // Devuelve el logaritmo de E en base 2
Math.LOG10E     // Devuelve el logaritmo de E en base 10


const numero = 2.9

// PI()
// console.log(Math.PI)

// Euler()
// console.log(Math.E)

// random() 
// console.log(Math.random() * 100 )

// round() > 5 arriba y < 5 abajo
const redondeo = Math.round(numero)
console.log(redondeo)

// ceil() 
const redondeoMathCiel = Math.ceil(numero)
console.log(redondeoMathCiel)

// floor() 
const redondeoMathFloor = Math.floor(numero)
console.log(redondeoMathFloor)

// trunc() 
const redondeoMathTrunc = Math.trunc(numero)
console.log(redondeoMathTrunc) // Trunca todos los decimales

// random() 
let numRandom = Math.random() * 100
let redondeoRandom = Math.round(numRandom)
console.log(redondeoRandom) // Trunca todos los decimales
