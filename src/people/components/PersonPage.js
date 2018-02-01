import React from 'react';

const PersonPage = (props) => {
	const { person } = props;
	return (
		<div>
			<img src={person.profile_path} alt={person.name} />
			<h1>{person.name}</h1>
		</div>
	);
};

export default PersonPage;
