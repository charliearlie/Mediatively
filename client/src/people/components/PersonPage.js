import React from 'react';

class PersonPage extends React.Component {
	render() {
		const {person} = this.props;
		return (
			<div>
				<img src={person.profile_path} />
				<h1>{person.name}</h1>
			</div>
		);
	}
}

export default PersonPage;
