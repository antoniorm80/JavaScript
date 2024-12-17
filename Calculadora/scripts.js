function mensaje() {
    // alert("Calculadora");

    document.getElementById('mensaje').innerHTML = "Calculadora"
    
}

// Esto agrega a la pantalla el valor del botón de la calculadora que toquemos.
// es .value porque hacemos referencia a un Input (value) y no a la pantalla (.innerHTML).
function agregar(valor) {
    document.getElementById("pantalla").value += valor;
}

// Esta acción limpia la pantalla
function borrar() {
    document.getElementById("pantalla").value = '';
}

// Esta acción toma el valor de la pantalla y ejecuta los cálculos
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado
}
