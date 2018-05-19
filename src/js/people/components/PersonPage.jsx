import React from 'react';

const PersonPage = (props) => {
	// eslint-disable-next-line react/prop-types
	const { person } = props;
	return (
		<div>
			<img src={person.profile_path} alt={person.name} />
			<h1>{person.name}</h1>
		</div>
	);
};

export default PersonPage;
