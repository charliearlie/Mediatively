import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
	const { title, releaseDate, id } = props;

	return (
		<Link to={`/movie/${id}`}>
			<div className="text-center">
				<h3>{title}</h3>
				<p>{releaseDate}</p>
			</div>
		</Link>
	);
};

export default MovieCard;

MovieCard.propTypes = {
	title: PropTypes.string.isRequired,
	releaseDate: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};
