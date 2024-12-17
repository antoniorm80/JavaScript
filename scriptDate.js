//  Forma de poner la fecha AAAA-MM-DD
// Short: 
// Long: 
// const fecha = new Date('2021-06-01')
const fecha = new Date()
// console.log(fecha.getFullYear())
// console.log(fecha.getMonth())
// console.log(fecha.getDate())
let meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
]

const resultado = fecha.getDate() + '-' + meses[fecha.getMonth()] + '-' + fecha.getFullYear()
console.log(resultado)

// Set
fecha.setFullYear(2029)
fecha.setMonth(9)
fecha.setDate(29)
const resultadoSet = fecha.getDate() + '-' + meses[fecha.getMonth()] + '-' + fecha.getFullYear()
console.log(resultadoSet)

let mes = fecha.getMonth() + 1
const resultadoDos = fecha.getDate() + '/' + mes + '/' + fecha.getFullYear()
console.log(resultadoDos)


