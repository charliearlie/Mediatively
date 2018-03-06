import * as types from '../actions/actionTypes';

const initialState = {
	showLandingPage: [],
};

export default function showReducer(state = initialState, action) {
	switch (action.type) {
	case types.LOAD_POPULAR_SHOWS_SUCCESS:
		return Object.assign({}, state, { popular: action.payload });
	case types.LOAD_TODAYS_SHOWS_SUCCESS:
		return Object.assign({}, state, { today: action.payload });
	default:
		return state;
	}
}
