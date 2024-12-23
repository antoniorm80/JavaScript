// 28.- Callbacks -> 6:06:31
// Pasar una función como parámetro. Es similar a los Delegate de C# 
function mostrarConsola(num) {
 console.log(num)
}

function calclular(num1, num2, callback) {
    let suma = num1 + num2
    callback(suma)
}

calclular(5,3, mostrarConsola)
