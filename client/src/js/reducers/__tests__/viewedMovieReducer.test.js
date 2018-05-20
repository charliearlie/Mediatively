import { expect } from 'chai';
import reducer from '../viewedMovieReducer';
import * as types from '../../actions/actionTypes';
import { testMovie } from '../../assets/testAssets';

describe('viewed movie reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).to.deep.equal({});
	});

	it('should handle LOAD_MOVIE_DETAILS_SUCCESS', () => {
		expect(reducer(undefined, {
			type: types.LOAD_MOVIE_DETAILS_SUCCESS,
			payload: testMovie,
		})).to.deep.equal(testMovie);
	});
});
