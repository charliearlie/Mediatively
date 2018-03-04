import * as types from '../actions/actionTypes';

const initialState = {
	showLandingPage: [],
};

export default function showReducer(state = initialState, action) {
	switch (action.type) {
	case types.LOAD_POPULAR_SHOWS_SUCCESS:
		return Object.assign({}, state, { popular: action.payload });
	default:
		return state;
	}
}
