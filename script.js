// document.getElementById('demostracion').innerHTML = 'Antonio Rivera'

// 3.- Declaraciones y Asignaciones
// var, let, const

// var nombreDeVariable = "Antonio"
// let nombreDeVariable 
// const nombreDeVariable = "Rivera"


// let x, y, z;
// x = 5
// y = 6
// z = 7

// function nombreDeFuncion() {
//     const variable = "Variable dentro de la función"
// }


// // 4.- Datos Number y String
// // NUMEROS
// let variableNumero = 10 // Valor numérico
// let variableDecial = 10.50 // Valor flotante

// STRING


//  13.- Eventos -> 1:52:17
function mostrar(){
    document.getElementById("seleccionable").innerHTML = Date()
}

function onload() {
    // alert("Bienvenido Antonio Rivera")
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

