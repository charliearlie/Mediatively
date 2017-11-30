const API_KEY = require('./apiKey');

config = {};
config.tmdb = {
    baseUrl: 'http://api.themoviedb.org/3/',
    apiKey: API_KEY,
    moviesPopular: 'discover/movie?sort_by=popularity.desc',
    upcomingTitles: 'movie/upcoming',
    tvPopular: 'tv/popular',
    posterUrl: 'https://image.tmdb.org/t/p/',
    imageSizes: {
        posterSizes: {
            tiny: 'w92',
            extraSmall: 'w154',
            small: 'w185',
            medium: 'w342',
            large: 'w500',
            largest: 'w780',
            original: 'original'
        }
    }
};

module.exports = config;