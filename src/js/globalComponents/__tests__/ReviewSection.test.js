import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ReviewSection from '../ReviewSection';

describe('<ReviewSection>', () => {
	const reviews = [
		{
			id: 1,
			author: 'Test Author',
			content: 'This was a good movie',
		},
		{
			id: 2,
			author: 'Test Author II',
			content: 'It might have just been the best film I have ever seen',
		},
		{
			id: 3,
			author: 'Someone else',
			content: 'This is the third review of this movie',
		},
	];


	const target = shallow(<ReviewSection reviews={reviews} />);

	test('should display 3 reviews', () => {
		const review = target.find('.Review');
		expect(review.length).to.equal(3);
	});

	test('should display names of reviewers', () => {
		const elements = target.find('.Review__Author');

		const authors = elements.map(a => a.text());
		expect(authors.length).to.equal(3);
		expect(authors).to.deep.equal(['Test Author', 'Test Author II', 'Someone else']);
	});

	test('should display names of reviewers', () => {
		const elements = target.find('.Review__Author');

		const authors = elements.map(a => a.text());
		expect(authors.length).to.equal(3);
		expect(authors).to.deep.equal(['Test Author', 'Test Author II', 'Someone else']);
	});
});
