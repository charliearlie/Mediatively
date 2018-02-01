import * as types from '../actions/actionTypes';

const initialState = {
	popularMovies: [],
};

export default function movieReducer(state = initialState, action) {
	switch (action.type) {
	case types.LOAD_POPULAR_MOVIES_SUCCESS:
		return Object.assign({}, state, { popularMovies: action.payload });
	case types.LOAD_UPCOMING_MOVIES_SUCCESS:
		return Object.assign({}, state, { upcomingMovies: action.payload });
	default:
		return state;
	}
}
