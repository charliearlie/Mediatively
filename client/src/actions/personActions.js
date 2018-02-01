import axios from 'axios';
import { LOAD_PERSON_SUCCESS } from './actionTypes';

export function loadPerson(id) {
	const request = axios.get(`/person/${id}`);
	return { type: LOAD_PERSON_SUCCESS, payload: request };
}

export function emptyFunction() {
	console.log('getting the linter to stop complaining');
}
