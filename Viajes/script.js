// Desestructuramos los objetos desde otro archivo.
import { barcelona, roma, paris, londres, monterrey } from "./ciudades.js";

// Obtener los elementos del DOM
let enlaces = document.querySelectorAll("a")
let tituloElemento = document.getElementById("titulo")
let subTituloElemento = document.getElementById("subtitulo")
let parrafoElemento = document.getElementById("parrafo")
let precioElemento = document.getElementById("precio")

document.getElementById("textBtn").addEventListener('click', function() {
    console.log('this in a event', this);
    alert("La Cotización está en Construcción...")
})


//// Otra forma de realizarlo. 
// enlaces.forEach(function(enlace){  
//     enlace.addEventListener('click', function() {
//         let contenido =  obtenerContenido(this.textContent);
//         enlaces.forEach(ele =>{
//             ele.classList.remove('active')            
//         } )
//         enlace.classList.add('active');
//         tituloElemento.innerHTML = contenido.titulo
//         subTituloElemento.innerHTML = contenido.subtitulo
//         parrafoElemento.innerHTML = contenido.parrafo
//         precioElemento.innerText = contenido.precio
//     })
// })

//Agregar un evento CLICK a cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        // Remover la clase "active" de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });
        
        // Agregar la clase "active" al enlace actual
        this.classList.add('active')

        // Obtener el contenido correspondiente según el enlace
        let contenido = obtenerContenido(this.textContent)

        //Mostrar la infoación en el DOM
        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
    });
});

//Función para traer la información correcta desde ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'Paris': paris,
        'Londres': londres,
        'Monterrey': monterrey
    };
    return contenido[enlace];
}