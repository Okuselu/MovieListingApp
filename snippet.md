snippet.js// var, let, const \*
_ const apiUrl = 'https://api.themoviedb.org/3'
_ const imageUrl = 'https://image.tmdb.org/t/p/w500'
_ const apiKey = '0dc88445c8a59bfe506c1ae3cfd3375a'
_ \*
_ // number, string, boolean, undefined, null
_
_ // arithemetic => + - /  
 _ // , comparison => ===, ==, <, > >= <=
_ // logical => !, &&, ||
_ // assignment => = \*
_ // conditionals => if, if-else, if-else-if, switch
_ // Functions \*
_ // Write a funcition that makes api call to a puplic api and logs the data to the console using fetch api. use async/await
_ async function getMovies () {
_ try {
_ const res = await fetch(`${apiUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
_ const data = await res.json()
_ return data
_ } catch (error) {
_ console.log(error)
_ }
_ }
_ getMovies()
_ \*
_ async function searchMovie (query) {
_ try {
_ const res = await fetch(`${apiUrl}/search/movie?api_key=${apiKey}&query=${query}&page=2`)
_ const data = await res.json()
_ console.log(data)
_ data.results.map((movie)=>{
_ console.log(movie)
_ // console.log(`${imageUrl}${movie.poster_path}`)
_ })
_ } catch (error) {
_ console.log(error)
_ }
_ }
_
_ const searchBtn = document.getElementById('search')
_ searchBtn.addEventListener('click', (e)=>{
_ e.preventDefault()
_ const moveiDetails = {
_ "adult": false,
_ "backdrop_path": null,
_ "genre_ids": [
_ 18,
_ 36,
_ 10752,
_ 10770
_ ],
_ "id": 294357,
_ "original_language": "en",
_ "original_title": "The Seekers",
_ "overview": "This follow-up to \"The Bastard\" and \"The Rebels\" continues the account of Philip Kent's life and career from his emigration to colonial Massachusetts through the American Revolutionary War and concludes the family saga with the story of his two sons and their children as they arrive in the unexplored Northwest Territory. (Episodes 5 and 6 of the Kent Chronicles miniseries.)",
_ "popularity": 2.643,
_ "poster_path": "/gtSEOoiExrPv1yU7ibF41Wyk8c6.jpg",
_ "release_date": "1979-12-03",
_ "title": "The Seekers",
_ "video": false,
_ "vote_average": 0,
_ "vote_count": 0
_ }
_ localStorage.setItem('film', JSON.stringify(moveiDetails))
_ }) \*
_ const current_movie = localStorage.getItem('movie')
_
_ console.log('CURRENT', JSON.parse(current_movie).poster_path)
_ \* searchMovie('the seeker')
