import axios from 'axios';
import {
	LOAD_POPULAR_MOVIES_SUCCESS,
	LOAD_UPCOMING_MOVIES_SUCCESS,
	LOAD_MOVIE_DETAILS_SUCCESS,
	LOAD_BOX_OFFICE_MOVIES,
	CLEAR_MOVIE,
} from './actionTypes';

export function loadPopularMovies() {
	return {
		type: LOAD_POPULAR_MOVIES_SUCCESS,
		payload: new Promise((resolve) => {
			axios.get('https://mediatively-api.herokuapp.com/movies/popular').then(response => resolve(response.data));
		}),
	};
}

export function loadUpcomingMovies() {
	return {
		type: LOAD_UPCOMING_MOVIES_SUCCESS,
		payload: new Promise((resolve) => {
			axios.get('https://mediatively-api.herokuapp.com/movies/upcoming').then(response => resolve(response.data));
		}),
	};
}

export function loadMovieDetails(id) {
	return {
		type: LOAD_MOVIE_DETAILS_SUCCESS,
		payload: new Promise((resolve) => {
			axios.get(`https://mediatively-api.herokuapp.com/movies/${id}`).then(response => resolve(response.data));
		}),
	};
}

export function loadBoxOfficeMovies() {
	return {
		type: LOAD_BOX_OFFICE_MOVIES,
		payload: new Promise((resolve) => {
			axios.get('https://mediatively-api.herokuapp.com/movies/nowplaying/GB').then(response => resolve(response.data));
		}),
	};
}

export function clearViewedMovie() {
	return {
		type: CLEAR_MOVIE,
	};
}
