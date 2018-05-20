import axios from 'axios';
import * as types from './actionTypes';

function performSearch(query) {
	return {
		type: types.SEARCH_PERFORM_SEARCH,
		payload: new Promise((resolve) => {
			axios.get(`search/${query}`).then(response => resolve(response.data));
		}),
	};
}

export default performSearch;

