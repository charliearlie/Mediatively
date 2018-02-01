import React from 'react';
import PropTypes from 'prop-types';
import CastMember from '../../globalComponents/CastMember';
import CastModal from './CastModal';

const CastSection = (props) => {
	return (
		<div>
			<div className="row cast-row">
				<div className="col-md-1" />
				{props.cast.slice(0, 5).map(castMember => (
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
					<button id="cast-modal-btn" onClick={() => props.toggleModal}>View full cast</button>
				</div>
				<CastModal
					show={props.modalOpen}
					onHide={props.toggleModal}
					cast={props.cast}
				/>
			</div>
		</div>
	);
};

CastSection.propTypes = {
	modalOpen: PropTypes.bool.isRequired,
	toggleModal: PropTypes.func.isRequired,
	cast: PropTypes.arrayOf().isRequired,
};

export default CastSection;
