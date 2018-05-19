import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { testMovieWithCredits } from '../../../assets/testAssets';
import MoviePage from '../MoviePage';


describe('Movie Page component', () => {
	mount(<MoviePage movieInfo={testMovieWithCredits} />);

	test('should change the title of the page/tab', () => {
		expect(window.document.title).to.equal('Fight Club');
	});
});
