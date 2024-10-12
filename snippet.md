snippet.js   // var, let, const
    * 
    * const apiUrl = 'https://api.themoviedb.org/3'
    * const imageUrl = 'https://image.tmdb.org/t/p/w500'
    * const apiKey = '0dc88445c8a59bfe506c1ae3cfd3375a'
    * 
    * 
    * // number, string, boolean, undefined, null
    * 
    * // arithemetic => + - /  
    * // , comparison => ===, ==, <, > >= <=
    * //  logical => !, &&, ||
    * // assignment => =
    * 
    * // conditionals => if, if-else, if-else-if, switch
    * // Functions
    * 
    * // Write a funcition that makes api call to a puplic api and logs the data to the console using fetch api. use async/await
    * async function getMovies () {
    *     try {
    *         const res = await fetch(`${apiUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
    *         const data = await res.json()
    *         return data
    *     } catch (error) {
    *         console.log(error)
    *     }
    * }
    * getMovies()
    * 
    * 
    * async function searchMovie (query) {
    *     try {
    *         const res = await fetch(`${apiUrl}/search/movie?api_key=${apiKey}&query=${query}&page=2`)
    *         const data = await res.json()
    *         console.log(data)
    *         data.results.map((movie)=>{
    *             console.log(movie)
    *             // console.log(`${imageUrl}${movie.poster_path}`)
    *         })
    *     } catch (error) {
    *         console.log(error)
    *     }
    * }
    * 
    * const searchBtn = document.getElementById('search')
    * searchBtn.addEventListener('click', (e)=>{
    *     e.preventDefault()
    *     const moveiDetails = {
    *         "adult": false,
    *         "backdrop_path": null,
    *         "genre_ids": [
    *             18,
    *             36,
    *             10752,
    *             10770
    *         ],
    *         "id": 294357,
    *         "original_language": "en",
    *         "original_title": "The Seekers",
    *         "overview": "This follow-up to \"The Bastard\" and \"The Rebels\" continues the account of Philip Kent's life and career from his emigration to colonial Massachusetts through the American Revolutionary War and concludes the family saga with the story of his two sons and their children as they arrive in the unexplored Northwest Territory. (Episodes 5 and 6 of the Kent Chronicles miniseries.)",
    *         "popularity": 2.643,
    *         "poster_path": "/gtSEOoiExrPv1yU7ibF41Wyk8c6.jpg",
    *         "release_date": "1979-12-03",
    *         "title": "The Seekers",
    *         "video": false,
    *         "vote_average": 0,
    *         "vote_count": 0
    *     }
    *     localStorage.setItem('film', JSON.stringify(moveiDetails))
    * })
    * 
    * const current_movie = localStorage.getItem('movie')
    * 
    * console.log('CURRENT', JSON.parse(current_movie).poster_path)
    * 
    * searchMovie('the seeker') 
