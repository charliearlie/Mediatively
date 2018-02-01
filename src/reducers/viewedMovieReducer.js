import * as types from '../actions/actionTypes';

export default function viewedMovieReducer(state = {}, action) {
	switch (action.type) {
	case types.LOAD_MOVIE_DETAILS_SUCCESS:
		return Object.assign({}, state, action.payload);
	case types.ADD_CREDITS_TO_MOVIE:
		return Object.assign({}, state, { credits: action.payload });
	default:
		return state;
	}
}
