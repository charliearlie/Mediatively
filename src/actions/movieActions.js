import axios from 'axios';
import { LOAD_POPULAR_MOVIES_SUCCESS,
	LOAD_UPCOMING_MOVIES_SUCCESS,
	LOAD_MOVIE_DETAILS_SUCCESS,
	ADD_CREDITS_TO_MOVIE,
	ADD_YOUTUBE_ID_TO_MOVIE,
	LOAD_SUGGESTED_MOVIES,
	LOAD_BOX_OFFICE_MOVIES }
	from './actionTypes';

export function loadPopularMovies() {
	return {
		type: LOAD_POPULAR_MOVIES_SUCCESS,
		payload: new Promise((resolve) => {
			axios.get('movies/popular').then(response => resolve(response.data));
		}),
	};
}

export function loadUpcomingMovies() {
	return {
		type: LOAD_UPCOMING_MOVIES_SUCCESS,
		payload: new Promise((resolve) => {
			axios.get('movies/upcoming').then(response => resolve(response.data));
		}),
	};
}

export function loadMovieDetails(id) {
	return {
		type: LOAD_MOVIE_DETAILS_SUCCESS,
		payload: new Promise((resolve) => {
			axios.get(`/movies/${id}`).then(response => resolve(response.data));
		}),
	};
}

export function loadMovieCredits(id) {
	return {
		type: ADD_CREDITS_TO_MOVIE,
		payload: new Promise((resolve) => {
			axios.get(`/movies/credits/${id}`).then(response => resolve(response.data));
		}),
	};
}

export function loadBoxOfficeMovies() {
	return {
		type: LOAD_BOX_OFFICE_MOVIES,
		payload: new Promise((resolve) => {
			axios.get('/movies/nowplaying/GB').then(response => resolve(response.data));
		}),
	};
}

export function loadYoutubeId(id) {
	return {
		type: ADD_YOUTUBE_ID_TO_MOVIE,
		payload: new Promise((resolve) => {
			axios.get(`/movies/videos/${id}`).then(response => resolve(response.data));
		}),
	};
}

export function loadSuggestedMovies(id) {
	return {
		type: LOAD_SUGGESTED_MOVIES,
		payload: new Promise((resolve) => {
			axios.get(`/movies/recommended/${id}`).then(response => resolve(response.data));
		}),
	};
}
