import axios from 'axios';
import { LOAD_SHOWS_SUCCESS, LOAD_SHOW_DETAILS_SUCCESS } from './actionTypes';

export function loadShows() {
	return {
		type: LOAD_SHOWS_SUCCESS,
		payload: new Promise((resolve) => {
			axios.get('https://mediatively-api.herokuapp.com/shows/popular').then(response => resolve(response.data));
		}),
	};
}

export function loadShowDetails(id) {
	return {
		type: LOAD_SHOW_DETAILS_SUCCESS,
		payload: new Promise((resolve) => {
			axios.get(`https://mediatively-api.herokuapp.com/shows/${id}`).then(response => resolve(response.data));
		}),
	};
}
