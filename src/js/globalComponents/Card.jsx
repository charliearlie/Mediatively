import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
	const { styles, shadowLevel } = props;
	return (
		<div className={`card shadowLevel${shadowLevel}`} style={{ ...styles }} >
			{props.children}
		</div>
	);
};

Card.propTypes = {
	children: PropTypes.node.isRequired,
	styles: PropTypes.objectOf(),
	shadowLevel: PropTypes.number,
};

Card.defaultProps = {
	styles: {},
	shadowLevel: 1,
};

export default Card;
