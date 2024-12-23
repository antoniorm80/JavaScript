// 27.-Try & Catch (Manejo de errores síncronos) -> 5:57:21
//  Síncornia: Capacidad para realizar tareas sin bloquear 
//             la ejecución del programa principal. En lugar de esperar para ejecutar 
//             la siguiente. Javascript se basa en un sólo hilo. 

try {
    // Llamado al Backend ( A travé s de un API)
    console.log('llamando al BackEnd')
    // throw('Este cliente no está apto para la compra')
    // console.info('Salió todo con éxito')

    setTimeout(() => {
        console.log('El Backend nos responde.')
         console.log('Cliente apto para la compra.')
        // throw('Este cliente no está apto para la compra')
    }, 1000);

} catch (error) {
    // Tomamos el error y hacemos algo que nos parezca correcto
    console.log('Algo Falló: ', error)
}
// finally {
//     // Se ejecuta por más que falle o no falle
//     console.log('Se ejecuta siempre')
// }

