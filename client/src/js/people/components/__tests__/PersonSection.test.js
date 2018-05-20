import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import PersonSection from '../PersonSection';

const cast = [
	{
		cast_id: 6,
		character: 'Wade Watts / Parzival',
		credit_id: '56cea5ffc3a3681e440016c2',
		gender: 2,
		id: 1034681,
		name: 'Tye Sheridan',
		order: 0,
		profile_path: '/uBvjOdxatypS6wb2jSQECZ2Snam.jpg',
	},
	{
		cast_id: 2,
		character: 'Samantha Cook / Art3mis',
		credit_id: '55f835b0c3a3686d1800c1d7',
		gender: 1,
		id: 1173984,
		name: 'Olivia Cooke',
		order: 1,
		profile_path: '/6znUjdqZ2tOeHFJ4jVnVXkIMLXs.jpg',
	},
	{
		cast_id: 7,
		character: 'Nolan Sorrento',
		credit_id: '56cea6289251413e6800132a',
		gender: 2,
		id: 77335,
		name: 'Ben Mendelsohn',
		order: 2,
		profile_path: '/nAeZkSUXh9CUAUq1cFAg77rZLIS.jpg',
	},
	{
		cast_id: 8,
		character: 'Ogden Morrow',
		credit_id: '56f8657f9251410a31001178',
		gender: 2,
		id: 11108,
		name: 'Simon Pegg',
		order: 3,
		profile_path: '/23e2uoNlpDvLumNic16fS2YjZjL.jpg',
	},
	{
		cast_id: 12,
		character: 'James Donovan Halliday / Anorak',
		credit_id: '57948925c3a3683f87000bec',
		gender: 2,
		id: 40900,
		name: 'Mark Rylance',
		order: 4,
		profile_path: '/5XrQYvdYqiGUepbgmRQfOltgBRJ.jpg',
	},
];

describe('Person Section component', () => {
	const target = mount(<PersonSection personGroup={cast} />);

	test('Correct type is displayed: crew', () => {
		const button = target.find('#cast-modal-btn');
		const header = target.find('.CastSection__header');
		expect(button.text()).to.equal('View full crew');
		expect(header.text()).to.equal('Crew');
	});

	test('Correct type is displayed: cast', () => {
		const button = target.find('#cast-modal-btn');
		const header = target.find('.CastSection__header');
		target.setProps({ cast: true });
		expect(button.text()).to.equal('View full cast');
		expect(header.text()).to.equal('Top billed cast');
	});
});
