//29.- Promesas -> 6:09:29
// Son un tipo especial de objeto que nos permite realizar tareas asíncronas y luego manejar los resultados
// puede fallar o puede ser exitosa y nos devuelve un valor. Nos permite manejar una secuencialidad de acciones. 
// Motivo más IMPORTANTE Es para consumir APIs de un servidor de terceros del back-end
// -> Resolve 
// -> Reject

let promesa =  new Promise((resolve, reject) => { 
    setTimeout(() => {
        let resp = {
            response: 200, 
            description: 'Esta información es importante'
        }
        resolve(resp)
        reject('Falló')
    }, 3000);   
 })

 promesa.then(res => {
    console.log(res.description)
 }).catch( error => {
    console.warn(error)
 })
 

// // Ejemplo de Pirámide de Perdición
//  let promesa1 =  new Promise((resolve) => { 
//     setTimeout(() => {
//         let resp = {
//             response: 200, 
//             description: '1.- Esta información es importante'
//         }
//         resolve(resp)       
//     }, 3000);   
//  })
//  let promesa2 =  new Promise((resolve) => { 
//     setTimeout(() => {
//         let resp = {
//             response: 200, 
//             description: '2.-Esta información es importante pero suele demorar mucho'
//         }
//         resolve(resp)       
//     }, 5000);   
//  })
//  let promesa3 =  new Promise((resolve) => { 
//     setTimeout(() => {
//         let resp = {
//             response: 200, 
//             description: '3.-Información rápida'
//         }
//         resolve(resp)       
//     }, 2500);   
//  })


//  // Pirámide de la peridción
//  promesa1.then(res => {
//     console.log(res.description)
//     promesa2.then( res => {
//         console.log(res.description)
//         promesa3.then(res => {
//             console.log(res.description)
//         }).catch(error => {
//             console.info(error)
//         })
//     }).catch(error => {
//         console.error(error)
//     })
//  }).catch( error => {
//     console.warn(error)
//  })
 