'use strict'

const key = require('./api-key')
const api_key = 

function searchMovie(movieName) {
    const name = movieName.toString().replace(" ", "+").toLowerCase();
    const uri = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&name=${name}`;
    
}