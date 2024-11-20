function init () {
    const movieDetails = JSON.parse(localStorage.getItem('selectedMovie'));
    const hero = document.getElementById('hero')
    const title = document.getElementById('movie-title')
    const date = document.getElementById('release-date')
    const imageUrl = 'https://image.tmdb.org/t/p/w500'; // This is the image base URL
    const overview = document.getElementById('overview')
    hero.style.backgroundImage = `url('${imageUrl}/${movieDetails.backdrop_path}')`
    date.textContent = `Released on ${movieDetails.release_date}`
    title.textContent = movieDetails.title
    overview.textContent = movieDetails.overview
}
init ()

