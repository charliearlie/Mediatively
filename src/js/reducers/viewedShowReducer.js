import * as types from '../actions/actionTypes';

export default function viewedShowReducer(state = {}, action) {
	switch (action.type) {
	case types.LOAD_SHOW_DETAILS_SUCCESS:
		return Object.assign({}, state, action.payload);
	default:
		return state;
	}
}
