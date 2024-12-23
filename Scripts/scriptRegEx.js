// 26.- Regex: Expresiones Regulares -> 5:49:29

// Modificadores
// i: Ignora mayúsculas y minúsculas
// g: Buscar en todo el texto pasado
// m: Búsqueda multilinea
// s: que permite usar . DEPRECATED

// SEARCH()
let texto = "Este curso es de Javascript y 1 está dado por Sergie Code"
let busqueda = texto.search(/sergie/i)
console.log(busqueda)


// TEST()
let pattern = /Sergie/i
let resultado = pattern.test(texto)
console.log(resultado)

let patternNumbers = /[0-9]/ 
let patternNumbersDos = /\d/ 
let resultadoNumbers = patternNumbers.test(texto)
let resultadoNumbersDos = patternNumbersDos.test(texto)
// console.log(resultadoNumbers)
// console.log(resultadoNumbersDos)

// EXEC()
let patternExec = /Sergie/i
let resultadoExec = patternExec.exec(texto)
// console.log(resultadoExec)

// Validar el correo electrónico.
let patternEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9]{1,63}\.){1,125}[A-Z]{2,63}$/i

console.log('El correo es:', patternEmail.test('antoniorm80@hotmail.com'))
console.log('El correo es:', patternEmail.test('antoniorm80@hotmailcom'))
