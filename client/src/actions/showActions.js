import * as types from './actionTypes';

export function loadShowsSuccess(shows) {
    return {type: types.LOAD_SHOWS_SUCCESS, shows};
}

export function loadShowDetailsSuccess(show) {
    return {type: types.LOAD_SHOW_DETAILS_SUCCESS, show};
}

export function loadShows() {
    return (dispatch) => {
        return fetch('/shows/popular')
            .then(res => res.json())
            .then(shows => dispatch(loadShowsSuccess(shows)))
            .catch((error) => {
                throw (error);
            }
    }
}

export function loadShowDetails(id) {
    return function(dispatch) {
        return fetch(`/shows/${id}`)
            .then(res => res.json())
            .then(show => dispatch(loadShowDetailsSuccess(show)))
            .catch(error => {throw(error)});
    }
}