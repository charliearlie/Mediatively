import axios from 'axios';
import { LOAD_POPULAR_SHOWS_SUCCESS, LOAD_SHOW_DETAILS_SUCCESS } from './actionTypes';

export function loadPopularShows() {
	return {
		type: LOAD_POPULAR_SHOWS_SUCCESS,
		payload: new Promise((resolve) => {
			axios.get('/shows/popular').then(response => resolve(response.data));
		}),
	};
}

export function loadShowDetails(id) {
	return {
		type: LOAD_SHOW_DETAILS_SUCCESS,
		payload: new Promise((resolve) => {
			axios.get(`/shows/${id}`).then(response => resolve(response.data));
		}),
	};
}