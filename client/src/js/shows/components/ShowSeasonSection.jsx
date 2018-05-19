import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../globalComponents/Card';

const ShowSeasonSection = ({ seasons }) => (
	<Card
		styles={{ minHeight: '400px' }}
		shadowLevel={2}
	>
		{seasons.map(season => (
			console.log(season)
		))}
	</Card>
);

ShowSeasonSection.propTypes = {
	seasons: PropTypes.arrayOf().isRequired,
};

export default ShowSeasonSection;
