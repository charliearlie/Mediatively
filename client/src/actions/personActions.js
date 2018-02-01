import axios from 'axios';
import { LOAD_PERSON_SUCCESS } from './actionTypes';

export function loadPerson(id) {
	return {
		type: LOAD_PERSON_SUCCESS,
		payload: new Promise((resolve) => {
			axios.get(`/person/${id}`).then(response => resolve(response.data));
		}),
	};
}

export function emptyFunction() {
	console.log('getting the linter to stop complaining');
}
