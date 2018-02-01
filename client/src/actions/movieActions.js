import axios from 'axios';
import { LOAD_POPULAR_MOVIES_SUCCESS,
	LOAD_UPCOMING_MOVIES_SUCCESS,
	LOAD_MOVIE_DETAILS_SUCCESS,
	ADD_CREDITS_TO_MOVIE }
	from './actionTypes';

export function loadPopularMovies() {
	const request = axios.get('movies/popular');
	return { type: LOAD_POPULAR_MOVIES_SUCCESS, payload: request };
}

export function loadUpcomingMovies() {
	const request = axios.get('movies/upcoming');
	return { type: LOAD_UPCOMING_MOVIES_SUCCESS, payload: request };
}

export function loadMovieDetails(id) {
	const request = axios.get(`/movies/${id}`);
	return { type: LOAD_MOVIE_DETAILS_SUCCESS, payload: request };
}

export function loadMovieCredits(id) {
	const request = axios.get(`/movies/credits/${id}`);
	return { type: ADD_CREDITS_TO_MOVIE, payload: request };
}
