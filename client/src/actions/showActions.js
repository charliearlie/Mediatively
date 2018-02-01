import axios from 'axios';
import { LOAD_SHOWS_SUCCESS, LOAD_SHOW_DETAILS_SUCCESS } from './actionTypes';

export function loadShows() {
	const request = axios.get('/shows/popular');
	return { type: LOAD_SHOWS_SUCCESS, payload: request };
}

export function loadShowDetails(id) {
	const request = axios.get(`/shows/${id}`);
	return { type: LOAD_SHOW_DETAILS_SUCCESS, payload: request };
}
