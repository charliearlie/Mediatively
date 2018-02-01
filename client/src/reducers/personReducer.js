import * as types from '../actions/actionTypes';

const initialState = {
	person: {},
};

export default function movieReducer(state = initialState, action) {
	switch (action.type) {
	case types.LOAD_PERSON_SUCCESS:
		return Object.assign({}, state, action.payload.data);
	default:
		return state;
	}
}
