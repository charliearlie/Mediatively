import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { testMovie } from '../../../assets/testAssets';
import MovieCard from '../MovieCard';


describe('Movie Page component', () => {
	const target = mount(<MovieCard
		key={`${testMovie.id}_key`}
		title={testMovie.title}
		releaseDate={testMovie.releaseDate}
		id={testMovie.id}
	/>);

	test('should change the title of the page/tab', () => {
		const title = target.find('.MovieCard__title');
		expect(title.text()).to.equal('Fight Club');
	});
});
