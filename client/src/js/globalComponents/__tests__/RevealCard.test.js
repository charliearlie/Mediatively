import React from 'react';
import { expect } from 'chai';
import RevealCard from '../RevealCard';
import mountWrap from '../../helpers/testHelper';


describe('<RevealCard />', () => {
	const props = {
		id: 284053,
		title: 'Thor: Ragnarok',
		image: 'https://image.tmdb.org/t/p/w185/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg',
		voteAverage: 7.5,
		voteCount: 80210,
		type: 'movie',
	};

	const target = mountWrap(<RevealCard {...props} />);

	it('renders', () => {
		expect(target.find('.RevealCard').length).to.equal(1);
	});

	it('displays the media\'s image', () => {
		const image = target.find('img');

		expect(image.props().src).to.equal(props.image);
		expect(image.props().alt).to.equal(props.title);
	});

	it('displays the media\'s title', () => {
		const title = target.find('h5');

		expect(title.text()).to.equal(props.title);
	});

	it('displays the overlay when the menu is clicked', () => {
		const menuAnchor = target.find('.fa-ellipsis-v');
		menuAnchor.simulate('click');

		const overlay = target.find('.RevealCard__reveal');
		expect(overlay.length).to.equal(1);
	});

	it('closes the overlay when the menu is clicked when it\'s open', () => {
		const menuAnchor = target.find('.fa-ellipsis-v');
		menuAnchor.simulate('click');

		const overlay = target.find('.RevealCard__reveal');
		expect(overlay.length).to.equal(0);
	});
});
