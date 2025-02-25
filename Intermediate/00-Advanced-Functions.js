const greet = function(name) {
    console.log(`Hola!, ${name}`);
}

greet("Antonio");

function processGreeting(greetFunction, name) {
    greetFunction(name);
}

function returnGreeting() {
    return greet;
}

processGreeting(greet, "antoniorm80");

const greet2 = returnGreeting()
greet2("Antonio Rivera")

// Arrrow function avanzadas

// - Retorno implícito
const multiply = (a, b) => a * b
console.log(multiply(2, 5))

// - this léxico 
const name = "Carlos Nieblas"
const handler =  {
    name: "Antonio",
    greeting: function() {
        console.log(`Hola!, ${this.name}`);
    },
    arrowGreeting: () => {
        console.log(`Hola!, ${this.name}`);
    }
}

handler.greeting()
handler.arrowGreeting();

// IIFE (Expresión de Función Invocada Inmediatamente)

(function () {
    console.log("IIFE clásico")
})();

( () => {
    console.log("IIFE con arrow function")
})();

// Parámetros Rest (...)

function sum(...numbers) {
    //console.log(numbers)
    let result = 0
    for (let number of numbers) {
        result += number
    }    
    return result    
}
console.log(sum(1, 2, 3, 4, 5))
console.log(sum(10, 15))

// Operador Spread (....)
const numbers = [1, 2, 3]
function sumWithSpread(a, b, c) {
    return a + b  +c
}

console.log(sumWithSpread(1, 2, 3)) // Sin Spread
console.log(sumWithSpread(...numbers)) // Con Spread

// Closures (Clausuras) : Ocurre cuando una función interna de una función accede a las varibales externas

function createCounter() {
    let counter = 0
    return function () {
        counter++
        console.log(`Contador:  ${counter}`)
    }
}
const counter = createCounter()
counter()
counter()
counter()
counter()

// se guarda en otra variable (scope) y se reinicia el contador
const counter2 = createCounter()
counter2()
counter2()
counter2()
counter2()

// Recursividad: Funcion que se llama a sí misma

// function myFunction() {
//     myFunction()
// }

// myFunction()

function factorial(n) {
    if ( n <= 1) {
        return 1
    }
    return n * factorial(n -1)
}

console.log(factorial(5))

// Funciones parciales
function parcilaSum(a) {
    return function(b, c) {
        return sum(a, b, c)
    }
}

const sumWith = parcilaSum(4)
console.log(sumWith(2, 3))
console.log(sumWith(1, 2))

// Currying : Transformar una función que recibe varios parámetros en una función que recibe uno cada vez. 

function currySum(a) {
    return function (b) {
        return function(c) {
            return function (d) 
            {
                return sum(a, b, c, d)
            }            
        }
    }
}
 const sumAB = currySum(1)(2)
 const sumC = sumAB(3)
 console.log(sumAB(3))
 console.log(sumAB(4))
 console.log(sumAB(5))
 console.log(sumC(3))
 console.log(sumC(4))
 console.log(sumAB(5)(7))

 // Callbacks:  pasar una función a otra función
 function processData( data, callback) {
    // console.log(sum (...data))
    const result = sum (...data)
    callback(result)
 }

 function processResult(result) {
    console.log(result)
 }
 function processResult2(result) {
    console.log(`Mi resultado es: ${result}`)
 }

 processData([1, 2, 3], processResult)
 processData([1, 2, 3], processResult2)
 processData([1, 2, 3], (result) => {
    console.log(`Mi resultado en la arrow function es: ${result}`)
 })
