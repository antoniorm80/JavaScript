// 30.- Async & Await -> 6:18:56

async function ejecutarPromesas() {
    let respPromesa1 = await promesa1
    console.log(respPromesa1)
    let respPromesa2 = await promesa2
    console.log(respPromesa2)
    let respPromesa3 = await promesa3
    console.log(respPromesa3)
 }

 ejecutarPromesas()
// Ejemplo de Pirámide de Perdición
 let promesa1 =  new Promise((resolve) => { 
    setTimeout(() => {
        let resp = {
            response: 200, 
            description: '1.- Esta información es importante'
        }
        resolve(resp)       
    }, 3000);   
 })
 let promesa2 =  new Promise((resolve) => { 
    setTimeout(() => {
        let resp = {
            response: 200, 
            description: '2.- Esta información es importante pero suele demorar mucho'
        }
        resolve(resp)       
    }, 5000);   
 })
 let promesa3 =  new Promise((resolve) => { 
    setTimeout(() => {
        let resp = {
            response: 200, 
            description: '3.- Información rápida'
        }
        resolve(resp)       
    }, 2500);   
 })


 // Pirámide de la peridción
 promesa1.then(res => {
    console.log(res.description)
    promesa2.then( res => {
        console.log(res.description)
        promesa3.then(res => {
            console.log(res.description)
        }).catch(error => {
            console.info(error)
        })
    }).catch(error => {
        console.error(error)
    })
 }).catch( error => {
    console.warn(error)
 })
 

