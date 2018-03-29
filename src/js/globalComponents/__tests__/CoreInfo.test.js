import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { testMovie } from '../../assets/testAssets';
import CoreInfo from '../CoreInfo';

describe('coreinfo component', () => {
	const target = shallow(<CoreInfo
		title={testMovie.title}
		releaseDate={testMovie.release_date}
		posterUrl={testMovie.poster_path}
		inProduction={testMovie.in_production}
		overview={testMovie.overview}
		voteCount={testMovie.vote_count}
		voteAverage={testMovie.vote_average}
		genres={testMovie.genres}
	/>);

	test('should display movie or show\'s title and release year', () => {
		const title = target.find('.CoreInfo__title');
		expect(title.text()).to.equal('Fight Club (1999)');
	});

	test('CoreInfo should display the image for movie/show', () => {
		const img = target.find('.image-responsive');
		expect(img.prop('src')).to.equal(testMovie.poster_path);
	});

	test('CoreInfo should show the genre as a header', () => {
		const genreList = target.find('.CoreInfo__genreList');
		expect(genreList.text()).to.equal('Drama');
	});

	test('If there are multiple genres, they should be displayed in a horizontal list', () => {
		target.setProps({ genres: [...testMovie.genres, { id: 28, name: 'Action' }] });
		const genreList = target.find('.CoreInfo__genreList');
		expect(genreList.text()).to.equal('DramaAction');
	});

	test('the vote average should be displayed on the page', () => {
		const voteAverage = target.find('.CoreInfo__rating');
		expect(voteAverage.text()).to.equal(testMovie.vote_average.toString());
	});
});
