import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import CastMember from '../CastMember';

const testCastMember = {
	cast_id: 30,
	character: 'Angel Face',
	credit_id: '52fe4250c3a36847f8014a51',
	gender: 2,
	id: 7499,
	name: 'Jared Leto',
	order: 3,
	profile_path: '/msugySeTCyCmlRWtyB6sMixTQYY.jpg',
};

describe('castmember component', () => {
	const target = shallow(<CastMember
		name={testCastMember.name}
		character={testCastMember.character}
		image={testCastMember.profile_path}
	/>);

	test('CastMember should display the image for cast member and an alt', () => {
		const img = target.find('.CastMember__image');
		expect(img.prop('src')).to.equal(`https://image.tmdb.org/t/p/w185${testCastMember.profile_path}`);
		expect(img.prop('alt')).to.equal(testCastMember.name);
	});
});
