import React from 'react';
import PropTypes from 'prop-types';
import imageAssets from '../../assets/imageAssets';

const SuggestedMoviesSection = (props) => {
	const { suggestedMovies } = props;
	const { posterUrl, imageSizes } = imageAssets;
	return (
		<div>
			<h2>You may also like</h2>
			{suggestedMovies.map(movie => (
				<div
					key={movie.title + movie.release_date}
					className="col-xs-6 col-md-2 SuggestedMovie text-center"
				>
					<div className="row">
						<img
							className="image-responsive SuggestedMovie__image"
							src={`${posterUrl}${imageSizes.posterSizes.small}${movie.poster_path}`}
							alt={movie.title}
						/>
					</div>
					<div className="row">
						<p className="text-center">{movie.title}</p>
					</div>
				</div>
			))}
		</div>
	);
};

SuggestedMoviesSection.propTypes = {
	suggestedMovies: PropTypes.arrayOf().isRequired,
};

export default SuggestedMoviesSection;
