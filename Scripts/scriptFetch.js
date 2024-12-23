
// 31.- Fetch API's JSON -> 6:24:05
// API = Application Programming Interface: Es un conjunto de reglas 
// que nos permite comunicar 2 sistemas diferentes entre un FrontEnd y Backend
// JSON = Javascript Object Notation:

let baseURL = "https://jsonplaceholder.typicode.com"
let endPoint =  "posts"

// //Get - Pedir Información
fetch(`${baseURL}/${endPoint}`)
.then(response => response.json())
.then(json => {
    document.getElementById('registros').innerHTML = json[2].body
    console.log(json) 
})

// //Get - Pedir Información
// fetch(`${baseURL}/${endPoint}`)
// .then(response => response.json())
// .then(json =>  console.log(json)
// )

// //Post - Enviar Información
// let requestPostBody = {
//     title: 'Antonio Rivera',
//     body: 'Hay que lograr las metas',
//     userId: 1,
// }
  
// fetch(`${baseURL}/${endPoint}`, {
//     method: 'POST',
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
//     body: JSON.stringify(requestPostBody)
// })
// .then(response => response.json())
// .then(json =>  console.log(json)
// )

// //Put - Editar Información
// let posteo = 5
// let requestPutBody = {
//     id: 3,
//     title: 'Antonio Rivera',
//     body: 'Hay que lograr las metas',
//     userId: 5,
// }

// fetch(`${baseURL}/${endPoint}/${posteo}`, {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json; charset=UTF-8',
//     },
//     body: JSON.stringify(requestPutBody)
// })
// .then(response => response.json())
// .then(json =>  console.log(json)
// )

// // Patch - Editar Información
// let post = 10
// let requestPatchBody = {
//     title: 'Antonio Rivera ha sido modificado',    
// }
// fetch(`${baseURL}/${endPoint}/${post}`, {
//     method: 'PATCH',
//     headers: {
//         'Content-Type': 'application/json; charset=UTF-8',
//     },
//     body: JSON.stringify(requestPatchBody)
// })
// .then(response => response.json())
// .then(json =>  console.log(json)
// )

// // Delete - Elimina Información - No devuele ninguna respuesta. 
// let posted = 7
// fetch(`${baseURL}/${endPoint}/${posted}`, {
//         method: 'DELETE'       
// })

