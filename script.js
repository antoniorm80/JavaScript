
// DOM (Document Object Model): Es una representación estructurada de un documento HTML
//                              Se organiza como un arbol de nodos y cada nodo es un elemento

// 2.- Javascript en HTML -> 0:05:29
// document.getElementById('demostracion').innerHTML = 'Antonio Rivera'

// 3.- Declaraciones y Asignaciones -> 0:16:40
// var, let, const

// var nombreDeVariable = "Antonio"
// let nombreDeVariable 
// const nombreDeVariable = "Rivera"


// let x, y, z;
// x = 5
// y = 6
// z = 7

function nombreDeFuncion() {
    const variable = "Variable dentro de la función"
}


// 4.- Datos Number y String -> 0:35:06
// // NUMEROS
let variableNumero = 10 // Valor numérico
let variableDecial = 10.50 // Valor flotante

// STRING 
let variableTexto = 'Este es un valor tipo string con comilla simples'  // Comillas Simples
let variableTexto2 = "Este es un valor tipo string con comillas dobles" // Comillas Dobles
let variableTexto3 = `Este es un valor tipo string con Backsticks ${variableNumero}` // Backsticks

// console.log(variableTexto3)

// 5.- Operadores en Javascript -> 0:40:34
let operadores = 'Valor de la variable'

const suma = 1 + 2 // + es operador aritmético de la suma
const resta = 1 - 2 // - es operador aritmético de la resta
const multiplicacion = 1 * 2 // * es operador aritmético de la multiplicacion
const division = 1 / 2 // / es operador aritmético de la division
const resto = 5 % 2 // % es operador aritmético que nos dará el resto de una división
const exponente = 3 ** 3  // ** es operador aritmético de la exponenciación.

// NOTA: El resto en una división se refiere al número que queda como residuo
// después de dividir un número por otro

let x = 5 
let y = 5
x++; // aumentdor
y--; // disminuidor

// console.log(y)

// 6.- Sintaxis de las variables -> 0:47:33
const $variable = 'NombreVariable'
const variable = 'NombreVariable'
const Variable = 'NombreVariable'
const _variable = 'NombreVariable'
const variable123a = 'NombreVariable'

/*
    Reglas:
    1) se puede iniciar con $, mayúsculas, minúsculas 7 _ (guión bajo)
    2) No se puede iniciar con números pero, si usuarlos en el resto del nombre
    3) No se puede usar caracteres especiales salvo $ y _

    CamelCase
    PascalCase
    Snake Case
    Kebab Case
    Case Sensitive: Se refiere a la sensibilidad de las variables y los identificadores a las 
    diferencias de mayúsculas y minúsculas. 
*/ 


// 7.- Scope (Disponibilidad) -> 0:51:16
// let n = 5
// {
//     let n = 2
//     console.log(n)
// }
// console.log(n)

// No está definido dentro de las llaves pero, toma el valor de afuera. 
// const m = 5  // Padre
// {
//     console.log(m) // Hijo
// }
// console.log(m) // Padre

let p = 3
{
    let q = 2
     p = p + q
    // p += q  // aumenta
    // p -= q  // disminye
    // p *= q  // multiplica
    // p /= q  // division
    // p %= q  // resto
    // p **= q // exponenciación
    console.log(p)
}

// 8.- Tipos de Datos -> 0:58:09 
// NUMBER
let a = 5 // Valor entero
let b = 2.5 // Valor Float
// STRING
let c = 'Cadena de texto' // Valor String (texto)
// BOOLEAN
let d = true // Verdadero
let e = false // Falso

// Operadores Lógicos
// && = Y  // Conjunctión
// || = O  // Disyunción
// !       // Negación

// UNDEFINED
let f  // No se le asignó valor por lo tanto es undefined

// NULL
let g = null

// OBJETO
let h = {
    'clave': 'valor'
}

// ARRAY
let array = [1,2,3,4,5,6,7,8,9] // Listas de Números
let arrayLetras = ['HTML', 'CSS', 'Javascript'] // Lista de Palabras

// DATE
const fecha = new Date()
console.log(fecha)

// Suma Enteros
let i = 5
let j = '5'
let k = i + j // Lo concatena
// console.log(k)
let l = i + parseInt(j) // Lo suma
// console.log(l)

// Suma Decimales
let m = 5.4
let n = '6.5'
let o = m + parseFloat(n)
// console.log(o)

// 9.- Operadores Lógicos -> 1:05:38
let q = 5
let r = 5 
let s = q == r  // true - compara valores absolutos Operador de Igual "=="
// console.log(s)
let t = '5'
let u = q === t  // false - compara valores absolutos y tipo de dato
// console.log(u)
let v = q != r // Operador de negacion "!="
// console.log(v)
// >, <, >=, <= 
let w = q > r // Boolean
// console.log(w)

// 10.- NODE js (Consola) -> 1:15:35
//  node script.js  // Ejecutar dentro de la terminald de Visual Studio Code

// 11.- Funciones -> 1:19:04
// Una Función: Es un bloque de código reutilizable para ser una tarea específica. 
//  Conjunto de instrucción que se agrupan en un nombre especial. 

let funcion = () => console.log("Soy una función")

funcion()


let num1 = 5
let num2 = 6

function sumar(x, y) {
    return x + y
}

let respuesta = sumar(3, 6)
console.log(respuesta)
let respTemplate = sumar(num1, num2)
// console.log(`La sumatoria de ${num1} + ${num2} es:`, respTemplate)

const temperatura = 58
function transformarCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5/9)
}
let respTemp = transformarCelsius(temperatura)
// console.log(`La temperatura es grados Celisus es:`, parseInt(respTemp))

// función tipo flecha --> Arrow function
let num = '10'
let sumaDocena = (numero) => {
    return numero + 12
}
let respSumaDocena = sumaDocena(parseInt(num))
// console.log(respSumaDocena)

// función tipo flecha --> Arrow function --> forma corta 
let numero = 10
let sumaDocenaShort = numero => numero + 12  // Con parámtros
// console.log('Sin Parámetro: ', sumaDocenaShort(numero))
let sumaDocenaSinParametro = () => numero + 12 // Sin parámetros
// console.log('Con Parámetro: ',sumaDocenaSinParametro())


// 12.- Objetos (literales) -> 1:40:05
// ¿Qué es un Objeto ?: Es una estructura de datos formada por pares "clave -valor" que puede tener propiedades 
//                      y métodos y representa una realizad. Carro, Alumnnos 

const auto1 = {
    marca: 'FIAT',
    modelo: 'UNO',
    peso: 1000,
    color: 'Rojo'
}

const auto2 = {
    marca: 'RENAULT',
    modelo: '12',
    peso: 1100,
    color: 'Marron'
}

// sobre escribir los atributos del objeto
auto1.marca = 'BMS'
auto1.modelo = 'XS'
console.log('Auto 1: ', auto1) // imprime todo el objeto
// console.log('Auto 2: ', auto2)
console.log('El color del auto1 es: ', auto1.color)  /// Sólo un campo (atributo)
// console.log('El color del auto2 es: ', auto2.color)
// console.log(auto1['marca'])


// Objetos con funciones integrados
const vendedor = {
    nombre: 'Modesto',
    apellido: 'Martínez Rodríguez',
    empresa: 'Comercializadora de Naranjas S. A. ',
    habilidadesBlandas: ['Carisma', 'Puntualidad', 'Atractivo'],
    vender: function() {
        return 'Pedro ha vendido un auto'
    }, 
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido
    }
}

console.log(vendedor.vender())
console.log(vendedor.nombreCompleto())
console.log(vendedor.habilidadesBlandas)
for(let hab of vendedor.habilidadesBlandas) {
    console.log(hab)
}

// 13.- Eventos -> 1:52:17
function mostrar(){
    document.getElementById("seleccionable").innerHTML = Date()
}

function onload() {
    // alert("Bienvenido Antonio Rivera")
    console.log("Evento on load desde el Body")
    return
}

// ***** 14.- Strings -> 2:01:15

// Escape de carácter "\"
let string = 'Let\'s do it'
// console.log(string)
// Escape de carácter "\" para escribirla se pone doble línea
let stringDoble = 'El símbolo con el que se escapa es \\ linea invertida '
// console.log(stringDoble)

// Salto de linea "\n" 
let stringTres = "Esta linea está arriba \ny esta está abajo"
// console.log(stringTres)

// Slice and Substring
let text = 'Educación'
// START 4 comienza DESDE el 4 (en el 5) HASTA el 7 (el 7 si lo toma)
let resultadoSlice = text.slice(4,7);
// console.log(resultadoSlice) // Output 'aci'

let resultadoConNegativos = text.slice(-5,-2);
// console.log(resultadoConNegativos) // Output 'aci'

let resultadoSubString = text.substring(4,7);
// console.log(resultadoSubString) // Output 'aci'


// Replace 
let textReplace = 'Ve y embriagate de amor donde tú, lo puedes hacer'
// let resultadoReplace = textReplace

// Split
const textoSplitUno = 'Separame'
//const resultadoUno = textoSplitUno.split('');
// console.log(resultadoUno)

// Comentarios 


function getAPI()  {
    try {
        let baseURL = "https://jsonplaceholder.typicode.com"
        let endPoint =  "posts"
        let request = fetch(`${baseURL}/${endPoint}`)
        .then(response => response.json())
        .then(json => {
            document.getElementById('registros').innerHTML = json[2].body
            console.log(json) 
        })
        return response        
    } catch (error) {
        console.log(error)
    }        
}

