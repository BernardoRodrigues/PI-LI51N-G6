const config = require('./config');

module.exports = (apiKey, id = 0, name = '') => {
    return {
        search: `https://developers.themoviedb.org/3/search/search-movies?api_key=${config(apiKey).key}&name=${name}`,
        movieDetails: `https://developers.themoviedb.org/3/movies/${id}`,
        movieCharactersList: `https://developers.themoviedb.org/3/movies/get-movie-credits/${id}`,
        actorParticipations: `https://developers.themoviedb.org/3/people/get-person-movie-credits/${id}`,
        personDetails: `https://developers.themoviedb.org/3/people/get-person-details/${id}`
    }
};