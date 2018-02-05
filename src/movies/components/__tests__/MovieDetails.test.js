import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import MovieDetails from '../MovieDetails';

const movieDetailProps = {
	runtime: 152,
	director: 'Christopher Nolan',
	budget: 185000000,
	revenue: 1004558444,
};

describe('MovieDetails component', () => {
	const target = shallow(<MovieDetails {...movieDetailProps} />);

	it('should display the runtime in the correct format', () => {
		const runtime = target.find('.MovieDetails__runtime');
		expect(runtime.text()).to.equal('2h 32m');
	});

	it('should display the director\'s name', () => {
		const director = target.find('.MovieDetails__director');
		expect(director.text()).to.equal('Christopher Nolan');
	});

	it('should display the budget in the correct format with a $ prepended', () => {
		const budget = target.find('.MovieDetails__budget');
		expect(budget.text()).to.equal('$185,000,000.00');
	});

	it('should display the director\'s name', () => {
		const revenue = target.find('.MovieDetails__revenue');
		expect(revenue.text()).to.equal('$1,004,558,444.00');
	});
});
