// 21.- For, While, DoWhile (Bucles) -> 4:14:50
let tecnologias = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'ANGULAR']

// // FOR 
// for (let i = 0; i < tecnologias.length; i++) {
//     const element = tecnologias[i];
//     console.log(element)
// }
// // FOR 
// for (tecnologia of tecnologias){
//     console.log(tecnologia)
// }
 

// FOR
let selBucle = document.getElementById('selecionableBucle')
let textBucle = ''
for (let i = 0; i < tecnologias.length; i++) {
    textBucle += tecnologias[i] 
    if( i < tecnologias.length - 1) {
        textBucle += ', '
    }
    selBucle.textContent = textBucle    
}
 

// OBJETOS 
const alumno = {
    nombre: 'Antonio Rivera',
    edad: 38,
    tecnologias: ['React', 'Angular']
}
for(const clave in alumno) {
    console.log(alumno[clave])
    
}

// ForEACH
let numeros = [1,2,3,4,5,6,7,8,9]
numeros.forEach(numero => {
   console.log(numero)
});

// // WHILE  -Bucle infinito siempre INCREMENTARLO
// let edad = 0
// while (edad < 18) {
//    console.log(`Tienes ${edad} años y aún eres MENOR de edad`) 
//    edad++;
// }
// console.log(`Tienes ${edad} años ya eres MAYOR de edad`) 

// WHILE - BREAK - Bucle infinito siempre INCREMENTARLO
// let edadBreak = 0
// while (edadBreak < 30) {
//    console.log(edadBreak) 
//    edadBreak++;
//    if (edadBreak == 25) break;
// }
// console.log(`Saliste del bucle porque tienes ${edadBreak} años`) 

// DoWHILE
// let edadDoWhile = 0
// do {
//    console.log(`Tienes ${edadDoWhile} años y aún eres MENOR de edad`) 
//    edadDoWhile++;
// }while(edadDoWhile < 18)

// console.log(`Tienes ${edadDoWhile} años ya eres MAYOR de edad`) 
