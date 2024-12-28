
let API_KEY ="1a89e90843fec518f5d9d849aab02591"
let urlBase = "https://api.themoviedb.org/3/search/movie"   
let urlImage = "https://image.tmdb.org/t/p/w500"
let resultData = document.getElementById("results")

document.getElementById("searchButton").addEventListener('click', searchMovies)

function searchMovies() {
    resultData.innerHTML = 'Cargando...'
    let searchInput = document.getElementById("searchInput").value
    fetch(`${urlBase}?api_key=${API_KEY}&query=${searchInput}`)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        displayMovie(data.results)})
}

function displayMovie(movies) {
    // Limpiamos el contenedor de cualquier dato. 
    resultData.innerHTML = ' '
    
    if(movies.length === 0 ) {
        resultData.innerHTML = '<p> No se encontraron resultaods para tu búsqueda.</p>'
        return 
    }

    movies.forEach(movie => {
        // por cada película creamos los elementos a mostrar 
        let movieDiv = document.createElement("div")
        movieDiv.classList.add('movie')
        
        let titulo = document.createElement("h2")
        titulo.textContent = movie.title 

        let releaseDate = document.createElement('p')
        releaseDate.innerHTML = '<strong>La fecha de lanzamiento fue: </strong>' + movie.release_date

        let overview = document.createElement('p')
        overview.textContent = movie.overview

        let posterPath = urlImage + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath 

        // adjuntar los elementos al Div creado en modo ejecución
        movieDiv.appendChild(poster)
        movieDiv.appendChild(titulo)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview)

        // Adjuntamos el "div" de ejecucción al "div" declarado en el html
        resultData.appendChild(movieDiv)
    });
}