import React from 'react';

const SuggestedMoviesSection = (props) => {
	const { suggestedMovies } = props;
	return (
		<div>
			<h2>You may also like</h2>
			{suggestedMovies.map(movie => (
				<div className="col-xs-6 col-md-2 SuggestedMovie text-center">
					<div className="row">
						<img
							className="image-responsive SuggestedMovie__image"
							src={movie.poster_path}
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

export default SuggestedMoviesSection;
