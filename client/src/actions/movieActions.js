import * as types from './actionTypes';

export function loadMoviesSuccess(movies) {
    return {type: types.LOAD_MOVIES_SUCCESS, movies};
}

export function loadMovieDetailsSuccess(movie) {
    return {type: types.LOAD_MOVIE_DETAILS_SUCCESS, movie};
}

export function loadMovies() {
    return function(dispatch) {
        fetch('/movies/popular')
            .then(res => res.json())
            .then(movies => dispatch(loadMoviesSuccess(movies)));
    }
}

export function loadMovieDetails(id) {
    return function(dispatch) {
        fetch(`/movies/${id}`)
            .then(res => res.json())
            .then(movie => loadMovieDetailsSuccess(movie));
    }
}