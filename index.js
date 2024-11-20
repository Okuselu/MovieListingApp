const apiUrl = "https://api.themoviedb.org/3";
const imageUrl = "https://image.tmdb.org/t/p/w500";
const apiKey = "0dc88445c8a59bfe506c1ae3cfd3375a";
const moviesList = document.getElementById('movies')
const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('search-btn')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

let moviesResult;
let page = 1;

// Write a funcition that makes api call to a puplic api and logs the data to the console using fetch api. use async/await
async function getMovies(currentPage=page) {
  try {
    const res = await fetch(`${apiUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=${currentPage}`);
    const data = await res.json();
    console.log(data);
    moviesResult = data.results.map((movie)=>{
      return `
        <li class="movie-poster">
            <a href="details.html" class="movie-link" data-movie='${JSON.stringify(movie)}'>
              <div class="movie-card">
                <img src=${imageUrl}${movie.poster_path} alt="poster" />
                <div class="movie-info">
                  <h2>${movie.title}</h2>
                  <p>Year: ${movie.release_date}</p>
                  <p>Rating: ${movie.vote_average}</p>
                </div>
              </div>
            </a>
          </li>
      ` 
    }).join('')
    moviesList.innerHTML = moviesResult;
    const links = document.querySelectorAll('.movie-link')// gives us access to all the anchor elements. look through and add event listener
    links.forEach((link)=>{
     link.addEventListener('click', function(e){
      // e.preventDefault()
      const movieData = this.getAttribute('data-movie')
      localStorage.setItem('selectedMovie', movieData)
    })
    })
    

  } catch (error) {
    console.log(error);
  }
}
getMovies();

async function searchMovie(query, currentPage=page) {
  action='search'
  try {
    const res = await fetch(`${apiUrl}/search/movie?api_key=${apiKey}&query=${query}&page=${currentPage}`);
    const data = await res.json();
    console.log(data);
    moviesResult = data.results.map((movie)=>{
      return `<li class="movie-poster">
        <a href="details.html" class="movie-link" data-movie='${JSON.stringify(movie)}'>
                <div class="movie-card">
                  <img src=${imageUrl}${movie.poster_path?movie.poster_path:'/tCKWksaQI8XkAQLVou0AlGab5S6.jpg'} alt="poster" />
                  <div class="movie-info">
                    <h2>${movie.title}</h2>
                    <p>Year: ${movie.release_date?movie.release_date:'none'}</p>
                    <p>Rating: ${movie.vote_average}</p>
                  </div>
                </div>
                </a>
          </li>` 
    }).join('')
    moviesList.innerHTML = moviesResult;


    links.forEach((link)=>{
      link.addEventListener('click', function(e){
       // e.preventDefault()
       const movieData = this.getAttribute('data-movie')
       localStorage.setItem('selectedMovie', movieData)
     })
     })
  } catch (error) {
    console.log(error);
  }
}

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(searchInput.value)
  searchMovie(searchInput.value)
})

next.addEventListener('click', (e)=>{
  e.preventDefault()
  page = page+1
  getMovies(page)
})

prev.addEventListener('click', (e)=>{
  e.preventDefault()
  if(page>1){
    page = page-1
    getMovies(page)
}
})