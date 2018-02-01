import { expect } from 'chai';
import reducer from '../moviesReducer';
import * as types from '../../actions/actionTypes';
import { testMovies } from '../../assets/testAssets';

const initialState = {
	popularMovies: [],
};

describe('movies reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).to.deep.equal(initialState);
	});

	it('should handle LOAD_POPULAR_MOVIES_SUCCESS', () => {
		expect(reducer(undefined, {
			type: types.LOAD_POPULAR_MOVIES_SUCCESS,
			payload: testMovies,
		})).to.deep.equal({ popularMovies: testMovies });
	});
});
