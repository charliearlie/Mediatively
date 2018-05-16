import * as types from '../actions/actionTypes';

export const initialState = {
	results: [],
	totalPages: 0,
	numberOfResults: 0,
};

export default function searchReducer(state = initialState, action) {
	switch (action.type) {
	case types.SEARCH_PERFORM_SEARCH:
		return { results: action.payload, numberOfResults: action.payload.length };
	case types.SEARCH_RESET:
		return Object.assign({}, state, initialState);
	default:
		return state;
	}
}
