import * as types from './actionTypes';

export function loadShowsSuccess(shows) {
    return {type: types.LOAD_SHOWS_SUCCESS, shows};
}

export function loadShows() {
    return function(dispatch) {
        return fetch('/shows/popular')
            .then(res => res.json())
            .then(shows => {
                dispatch(loadShowsSuccess(shows));
            }).catch(error => {throw(error)});
    }
}