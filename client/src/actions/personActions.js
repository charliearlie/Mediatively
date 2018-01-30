import * as types from './actionTypes';

export function loadPersonSuccess(person) {
	return { type: types.LOAD_PERSON_SUCCESS, person };
}

export function loadPerson(id) {
	return (dispatch) => {
		return fetch(`/person/${id}`)
			.then(res => res.json())
			.then(person => dispatch(loadPersonSuccess(person)))
			.catch((error) => {
				throw (error);
			});
	};
}
