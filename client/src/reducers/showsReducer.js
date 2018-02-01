import * as types from '../actions/actionTypes';

const initialState = {
	showLandingPage: [],
};

export default function showReducer(state = initialState, action) {
	switch (action.type) {
	case types.LOAD_SHOWS_SUCCESS:
		return Object.assign({}, state, { showLandingPage: action.payload.data });
	default:
		return state;
	}
}
