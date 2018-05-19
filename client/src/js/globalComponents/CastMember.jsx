import React from 'react';
import PropTypes from 'prop-types';
import DefaultCastImage from '../assets/default-cast-image.png';

const CastMember = (props) => {
	const image = props.image || DefaultCastImage;
	return (
		<div className="CastMember">
			<div className="row">
				<div className="text-center col-xs-2">
					<img className="CastMember__image" height="92px" src={`${image}`} alt={props.name} />
				</div>
				<div className="col-xs-8">
					<div className="CastMember__name">
						<h4>{props.name}</h4>
						<p>{props.character}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

CastMember.propTypes = {
	name: PropTypes.string.isRequired,
	character: PropTypes.string.isRequired,
	image: PropTypes.string,
};

CastMember.defaultProps = {
	image: '',
};

export default CastMember;
