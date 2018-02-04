import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CastMember from '../../globalComponents/CastMember';
import CastModal from './CastModal';

class CastSection extends Component {
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
		return (
			<div>
				<div className="row CastSection">
					<div className="col-md-1" />
					{this.props.cast.slice(0, 5).map(castMember => (
						<div key={`${castMember.id}_key`}>
							<div className="col-xs-4 col-md-2">
								<CastMember
									name={castMember.name}
									character={castMember.character}
									image={castMember.profile_path}
								/>
							</div>
						</div>
					))}
					<div className="col-md-1" />
				</div>
				<div className="row">
					<div className="col-xs-12 text-center" style={{ padding: '10px' }}>
						<button id="cast-modal-btn" onClick={this.toggleModal}>View full cast</button>
					</div>
					<CastModal
						show={this.state.modalOpen}
						onHide={this.toggleModal}
						cast={this.props.cast}
					/>
				</div>
			</div>
		);
	}
}

CastSection.propTypes = {
	cast: PropTypes.arrayOf().isRequired,
};

export default CastSection;
