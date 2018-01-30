/*
	Actions are going to be swithced to using axios and Redux Promise
*/

import * as types from './actionTypes';

export function loadPopularMoviesSuccess(movies) {
	return { type: types.LOAD_POPULAR_MOVIES_SUCCESS, movies };
}

export function loadUpcomingMoviesSuccess(movies) {
	return { type: types.LOAD_UPCOMING_MOVIES_SUCCESS, movies };
}

export function loadMovieDetailsSuccess(movie) {
	return { type: types.LOAD_MOVIE_DETAILS_SUCCESS, movie };
}

export function addCreditsToMovie(credits) {
	return { type: types.ADD_CREDITS_TO_MOVIE, credits };
}

export function loadPopularMovies() {
	return (dispatch) => {
		fetch('/movies/popular')
			.then(res => res.json())
			.then(movies => dispatch(loadPopularMoviesSuccess(movies)));
	};
}

export function loadUpcomingMovies() {
	return (dispatch) => {
		fetch('movies/upcoming')
			.then(res => res.json())
			.then(movies => dispatch(loadUpcomingMoviesSuccess(movies)));
	};
}

export function loadMovieDetails(id) {
	return (dispatch) => {
		fetch(`/movies/${id}`)
			.then(res => res.json())
			.then(movie => dispatch(loadMovieDetailsSuccess(movie)));
	};
}

export function loadMovieCredits(id) {
	return (dispatch) => {
		fetch(`/movies/credits/${id}`)
			.then(res => res.json())
			.then(credits => dispatch(addCreditsToMovie(credits)));
	};
}
