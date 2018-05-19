import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import LimitedSizeContent from '../LimitedSizeContent';


describe('<LimitedSizeContent>', () => {
	const longContent = 'If you are not doing anything this weekend, make sure you watch this movie.'
	+ ' It is exciting, thrilling and utterly pant wetting. The lead actor is superb and deserves a '
	+ 'lead role in an Academy Award level. He could be the next Daniel Day Lewis.';


	const target = shallow(<LimitedSizeContent content={longContent} size={150} />);
	let anchor = target.find('a');

	it('should display shortened review with "more" anchor', () => {
		const review = target.find('.Review__Content');

		expect(anchor.text()).to.equal(' Show more');
		expect(review.text()).to.equal('If you are not doing anything this weekend, make sure you watch this movie. It is exciting, thrilling and utterly pant wetting. The lead actor is ...');
	});

	it('should display all of the content when the more anchor is clicked', () => {
		anchor.simulate('click');
		anchor = target.find('a');
		const review = target.find('.Review__Content');

		expect(review.text()).to.equal(longContent);
		expect(anchor.text()).to.equal(' Show less');
	});

	it('should display all of the content if it\'s length is under the size prop', () => {
		target.setProps({ size: longContent.length });
		anchor = target.find('a');
		const review = target.find('.Review__Content');

		expect(review.text()).to.equal(longContent);

		expect(anchor.length).to.equal(0);
	});
});
