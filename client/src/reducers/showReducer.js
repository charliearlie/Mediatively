import * as types from '../actions/actionTypes';

const initialState = {
    showLandingPage: [],
    selectedShow: {}
}

export default function showReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOAD_SHOWS_SUCCESS:
            return Object.assign({}, state, {showLandingPage: action.shows});
        case types.LOAD_SHOW_DETAILS_SUCCESS:
            return Object.assign({}, state.selectedShow, action.show)
        default:
            return state;
    }
}