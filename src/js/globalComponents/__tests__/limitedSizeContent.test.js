import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import LimitedSizeContent from '../limitedSizeContent';


describe('<LimitedSizeContent>', () => {
	const content = 'If you are not doing anything this weekend, make sure you watch this movie.'
	+ ' It is exciting, thrilling and utterly pant wetting. The lead actor is superb and deserves a '
	+ 'lead role in an Academy Award level. He could be the next Daniel Day Lewis.';


	const target = shallow(<LimitedSizeContent content={content} size={150} />);

	test('should display shortened review', () => {
		const review = target.find('.Review__Content');
		expect(review.text()).to.equal('If you are not doing anything this weekend, make sure you'
		+ ' watch this movie. It is exciting, thrilling and utterly pant wetting.');
	});
});
