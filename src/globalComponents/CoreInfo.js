import React from 'react';
import PropTypes from 'prop-types';

const getRatingClass = (rating) => {
	if (rating < 3) {
		return 'low';
	} else if (rating < 7) {
		return 'medium';
	}
	return 'high';
};

const CoreInfo = (props) => {
	const releaseYear = props.releaseDate ? props.releaseDate.substring(0, 4) : '';
	const ratingClass = getRatingClass(props.voteAverage);
	const backgroundImage = `url("${props.backdropUrl}")`;
	return (
		<div>
			<div className="col-xs-12 CoreInfo card" style={{ backgroundImage, backgroundSize: 'cover', backgroundColor: 'transparent' }}>
				<div className="CoreInfo__layer">
					<div className="CoreInfo__details">
						<div className="col-sm-3 col-xs-12 text-center coreinfo-image-container">
							<img src={props.posterUrl} alt={`${props.title}_poster`} className="image-responsive" />
						</div>
						<div className="col-sm-6 col xs-12 coreinfo-detail">
							<h2 className="CoreInfo__title">
								{props.title} <span className="year">({releaseYear})</span>
							</h2>
							{props.genres &&
							<div className="CoreInfo__genreList">{props.genres.map(genre => (
								<span key={`${genre.id}_key`} className="label label-default">{genre.name}</span>
							))}
							</div>}
							<h3 className="CoreInfo__overview">Overview</h3>
							<p className="CoreInfo__overview">{props.overview}</p>
							<div className={`rating ${ratingClass}`}>
								<p className="text-center CoreInfo__rating">{props.voteAverage}</p>
							</div>
							<a href="/movies">Rate movie</a>
						</div>
						<div className="col-sm-offset-1 col-sm-2 col-xs-12 CoreInfo__side" />
					</div>
				</div>
			</div>
		</div>
	);
};

CoreInfo.propTypes = {
	title: PropTypes.string.isRequired,
	releaseDate: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(Object),
	voteAverage: PropTypes.number,
	posterUrl: PropTypes.string,
	overview: PropTypes.string,
	backdropUrl: PropTypes.string,
};

CoreInfo.defaultProps = {
	genres: [],
	voteAverage: 0,
	posterUrl: '',
	overview: '',
	backdropUrl: '',
};

export default CoreInfo;
