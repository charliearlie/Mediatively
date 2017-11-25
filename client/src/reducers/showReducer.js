import * as types from '../actions/actionTypes';

export default function showReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_SHOWS_SUCCESS:
            return action.shows;
        default:
            return state;
    }
}