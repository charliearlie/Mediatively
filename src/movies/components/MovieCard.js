import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = (props) => {
	const { title, releaseDate, id } = props;

	return (
		<div className="text-center">
			<a href={`/movie/${id}`}>
				<h3 className="MovieCard__title">{title}</h3>
				<p className="MovieCard__releaseDate">{releaseDate}</p>
			</a>
		</div>
	);
};

export default MovieCard;

MovieCard.propTypes = {
	title: PropTypes.string.isRequired,
	releaseDate: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
};
