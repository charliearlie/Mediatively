import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CastMember from '../../globalComponents/CastMember';
import CastModal from './CastModal';

class PersonSection extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalOpen: false,
		};

		this.toggleModal = this.toggleModal.bind(this);
	}

	toggleModal() {
		this.setState({ modalOpen: !this.state.modalOpen });
	}
	render() {
		const personType = this.props.cast ? 'cast' : 'crew';
		const header = personType === 'cast' ? 'Top billed cast' : 'Crew';
		return (
			<div className="col-md-12">
				<div className="row">
					<h2 className="CastSection__header">{header}</h2>
					{this.props.personGroup.slice(0, 5).map(person => (
						<div key={`${person.id}_key`}>
							<div className="row">
								<CastMember
									name={person.name}
									character={person.character}
									image={person.profile_path}
								/>
							</div>
						</div>
					))}
					<div className="col-md-1" />
				</div>
				<div className="row">
					<div className="col-xs-12 text-center" style={{ padding: '10px' }}>
						<button className="btn btn-default" id="cast-modal-btn" onClick={this.toggleModal}>
							View full {personType}
						</button>
					</div>
					<CastModal
						show={this.state.modalOpen}
						onHide={this.toggleModal}
						cast={this.props.personGroup}
					/>
				</div>
			</div>
		);
	}
}

PersonSection.propTypes = {
	personGroup: PropTypes.arrayOf(PropTypes.object).isRequired,
	cast: PropTypes.bool,
};

PersonSection.defaultProps = {
	cast: false,
};

export default PersonSection;
