const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'c19c199d65a1f94340805e76e9adf9cc'
const difKelvin = 273.15

let ciudad = "Monterrey"

 fetch(`${urlBase}?q=${ciudad}&APPID=${API_KEY}`)
.then(response => response.json())
.then(json =>  console.log(json))