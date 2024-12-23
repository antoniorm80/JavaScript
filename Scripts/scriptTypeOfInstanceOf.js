// 23.- Typeof & Instanceof -> 4:44:13
// ******** Typeof
// STRING
let a = typeof 'Antonio'
// NUMBER
let b = typeof 3.14
// NUMBER (Caso especial)
let c = typeof NaN
// BOOLEAN
let d = typeof true
// ARRAY (Caso especial - Nos devuleve un objeto)
let e = typeof ['Alvaro', 'José Jaime', 'José de Jesús'] // Esto es un array
// OBJETO
let f = typeof {curso: 'Javascript'}
// OBJETO (Caso especial)
let g = typeof new Date()
// OBJETO (Caso especial)
let h = typeof new Map()
// OBJETO (Caso especial)
let i = typeof new Set()
// FUNCION
let j = typeof function(){}
// UNDEFINED (por error)
let k = typeof SergieCode
// OBJECT (Caso especial)
let l = typeof null

// ************** Condicional ***************
let datoBackEnd = 'Curso de Javascript'
if (typeof datoBackEnd === 'string') {
    console.log('lo que viene del Back-End es string')
}else {
    console.info('reclamar al compañero que te mande un string')
}

console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)
// console.log(g)
// console.log(h)
// console.log(i)
// console.log(j)
// console.log(k)
// console.log(l)

// ******** Instanceof
// ************** Condicional ***************


// OBJETO
let m = [1,2,3,4,5]
// OBJETO (Caso especial)
let n = new Date()
// OBJETO (Caso especial)
let o = new Map()
// OBJETO (Caso especial)
let p = new Set()
// OBJECT (Caso especial)
let q = null

console.log(m instanceof Array)

if (m instanceof Array) {
    console.log('Gracias Back-end por mandarme un Array')
} else {
    console.warn('Mándame un Array por favor')
}

if (n instanceof Date) {
    console.log('Gracias Back-end por mandarme un Date')
} else {
    console.warn('Mándame un Date por favor')
}

if (o instanceof Map) {
    console.log('Gracias Back-end por mandarme un Map')
} else {
    console.warn('Mándame un Map por favor')
}

if (p instanceof Set) {
    console.log('Gracias Back-end por mandarme un Set')
} else {
    console.warn('Mándame un Set por favor')
}

// null es algo vacío * MARCA ERROR
// if (q instanceof null) {
//     console.log('Gracias Back-end por mandarme un Null')
// } else {
//     console.warn('Mándame un Null por favor')
// }