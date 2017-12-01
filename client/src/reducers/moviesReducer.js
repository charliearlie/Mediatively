import * as types from '../actions/actionTypes';

const initialState = {
    popularMovies: []
}

export default function movieReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOAD_MOVIES_SUCCESS:
            return Object.assign({}, state, {popularMovies: action.movies});
        default:
            return state;
    }
}