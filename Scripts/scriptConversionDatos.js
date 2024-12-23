// 24.- Conversión de datos -> 4:58:54

// STRING A NUMBER 
let a = Number("3.14")
// ParseInt -> Devuelve solamente la parte entera
let b = parseInt("3.14")
// ParseFloat -> Devuelve solamente la parte entera y decimal
let c = parseFloat("3.14")
// NaN
let d = Number('Antonio')
// Vacío - devuelve 0
let e = Number('')
// Caso especial se utiliza en Frameworks +variable lo convierte a número 
let f = +'1'


console.log(a)
console.log(typeof a)
// console.log(b)
// console.log(typeof b)
// console.log(c)
// console.log(typeof c)
// console.log(d)
// console.log(typeof d)
// console.log(e)
// console.log(typeof e)
// console.log(f)
// console.log(typeof f)


// NUMBER A STRING
let g = String(1)

// No funciona directo
// let h = 1.toString() // Marca Error

// Tenemos que usar 2 variables. 
let i = 1
let j = i.toString()

console.log(g)
console.log(typeof g)
console.log(j)
console.log(typeof j)

// DATE A NUMBER
let k = new Date()
let l = Number(k) // La convierte en Milisegundos

// console.log(k)
// console.log(typeof k)
// console.log(l)
// console.log(typeof l)

// DATE A STRING
let m = new Date()
let n = String(m) // La convierte en Milisegundos
let o = new Date().toString() // Directo si se puede

// console.log(n)
// console.log(typeof n)
// console.log(o)
// console.log(typeof o)

// NUMBER A BOOLEAN
// 0 = false
// 1 = true
let p = Boolean(0)
let q = Boolean(1)
let r = Boolean(2) // A partir del 1 es TRUE  por ejemplo el 2,3,4 etc.

// BOOLEAN A STRING
let s = String(true)
let t = true.toString()
console.log(s, typeof s)
console.log(t, typeof t)

// console.log(p)
// console.log(typeof p)
// console.log(q)
// console.log(typeof q)
// console.log(r)
// console.log(typeof r)

// NOTA: el 0 devuelve null or undefined Ejmplo de Code Challenge
// 0 es False: Por lo tanto, debemos especificarlo con la condición adicional
let ceroEsNullOrUndefined = 0
if (ceroEsNullOrUndefined || ceroEsNullOrUndefined == 0) {
    console.log('Vino un dato')
}else {
    console.log('Es null or undefined')
}
// NOTA: Si el 0 viene como string "0" es verdadro
let ceroComoString = '0' // Devuelve TRUE
if (ceroComoString) {
    console.log('Vino un dato')
}else {
    console.log('Es null or undefined')
}
