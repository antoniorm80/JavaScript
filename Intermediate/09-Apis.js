// Menejo de APIs

// - APIs REST (HTTP + URLs + JSON)

// Métodos HTTP:
// - GET
// - POST
// - PUT
// - DELETE

// Códigos de respuesta HTTP:
// - 200 - OK
// - 201 - El registro se ha creado exitosamente.
// - 400
// - 404 - No se ha encontrado
// - 500 - Erroes del servidor

// Cosumir una API desde Javascript

// fetch("https://antonior132.sg-host.com/api/positions")
//   .then((response) => {
//     // Transofrma la respuesta a JSON
//     return response.json();
//   })
//   .then((data) => {
//     // Procesa los datos
//     console.log(data);
//   })
//   .catch((errore) => {
//     // Caputra errores
//     console.log("Errore", errore);
//   });

// Uso de Async/Await
async function getPositions() {
  try {
    const response = await fetch(
      "https://antonior132.sg-host.com/api/positions"
    );
    const data = await response.json();
    console.log(data)
    // return data;
  } catch (error) {
    console.log("Error", error);
  }
}

// getPositions();

// Solicitud POST
async function createPosition() {
    try {

      const newPosition =  {
        id: 40,
        name: "Estúpida"
      }

      const response = await fetch(
        "https://antonior132.sg-host.com/api/positions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPosition)
        }
      );
      const data = await response.json();
      console.log(data)
    //   return data;
    } catch (error) {
      console.log("Error", error);
    }
  }
  
//   createPosition();

// Manejo de errores
// fetch("https://antonior132.sg-host.com/api/positionsea")
//   .then((response) => {
//     // Transofrma la respuesta a JSON    
//     // console.log(response.status);
//     if (!response.ok) {
//         // console.log(response.status)
//         throw Error(`Status HTTP: ${response.status}`)
//     }
//     return response.json()
//   })
//   .catch((errore) => {
//     // Caputra errores
//     console.log("Errore", errore);
//   });

// Métodos HTTP adicioales
// - PATCH
// - OPTIONS

// Solicitud POST
async function patchPosition() {
    try {
      const response = await fetch(
        "https://antonior132.sg-host.com/api/positions/40", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: "Estúpida osea"})
        }
      );
      const data = await response.json();
      console.log(data)
    //   return data;
    } catch (error) {
      console.log("Error", error);
    }
  }
  
//   patchPosition()

//   Autenticación mediante API Key

async function getWeather(city) {

    const apiKey = "c19c199d65a1f94340805e76e9adf9cc";
    const urlBase = "https://api.openweathermap.org/data/2.5/weather"

    try {
      const response = await fetch(`${urlBase}?q=${city}&APPID=${apiKey}`);
      const data = await response.json();
      console.log(data)
    //   return data;
    } catch (error) {
      console.log("Error", error);
    }
  }
  
getWeather("Madrid")
// Otros métodos de Autentiación y Autorización
// - Bearer Tokens
// - JWT
// - oAuth (Google, Github, Facebook so on)

// Versionando de APIS