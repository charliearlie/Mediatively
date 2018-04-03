import * as types from '../actions/actionTypes';


export default function viewedMovieReducer(state = {}, action) {
	switch (action.type) {
	case types.LOAD_MOVIE_DETAILS_SUCCESS:
		return Object.assign({}, state, action.payload);
	case types.CLEAR_MOVIE:
		return {};
	default:
		return state;
	}
}
