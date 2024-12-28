const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'c19c199d65a1f94340805e76e9adf9cc'
const difKelvin = 273.15

// let ciudad = "Monterrey"

document.getElementById("botonBusqueda").addEventListener('click', () => {
    let inputCiudad = document.getElementById('ciudadEntrada').value
    if(inputCiudad){
        datosApiClima(inputCiudad)
    }
})

function datosApiClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(data =>  {
        //  console.log(data)
        mostrarDatosClima(data)
    })
}

function mostrarDatosClima(data){
    // console.log(data)
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML= ''

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const descripcion = data.weather[0].description
    const icono = data.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}` 

    const tempInfo = document.createElement('p')
    tempInfo.textContent =  `La temperatura es: ${Math.floor(temperatura - difKelvin)}°C` 
   
    const humedadInfo = document.createElement('p')
    humedadInfo.textContent =  `La húmedad es: ${humedad}%` 

    const iconoInfo = document.createElement('img')
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

    const descInfo = document.createElement('p')
    descInfo.textContent = `La descripción meteorológica es: ${descripcion}` 

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(tempInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descInfo)

}