
// El juego selecciona un número al azar.

let numeroAzar = Math.floor(Math.random() * 100) + 1

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

function checarResultado() {
    // alert('Mode');
    intentos++;
    intento.textContent = intentos;
    let numeroIngresado = parseInt(numeroEntrada.value)
    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = 'Por favor, introduce un número válido entre 1 y 100'
        mensaje.style.color =  'black';
        numeroEntrada.style.backgroundColor = 'gray';
        return
    }

    if(numeroIngresado == numeroAzar) {
        mensaje.textContent = '¡Felicidades!, ¡ Has adiviando el número!';
        mensaje.style.color =  'green';
        numeroEntrada.disabled = true;
    }else if ( numeroIngresado < numeroAzar) {
        mensaje.textContent = '¡Más Alto!, El número es mayor al que dijiste';
        mensaje.style.color =  'red';
    }else{
        mensaje.textContent = '¡Más Bajo!, El número es menor al que dijiste';
        mensaje.style.color =  'red';
    }


}