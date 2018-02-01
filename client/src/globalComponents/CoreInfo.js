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
	return (
		<div className="coreInfo">
			<div className="col-lg-12">
				<div className="col-sm-3 col-xs-12 text-center coreinfo-image-container">
					<img src={props.posterUrl} alt={`${props.title}_poster`} className="image-responsive" />
				</div>
				<div className="col-sm-6 col xs-12 coreinfo-detail">
					<h2 className="CoreInfo__title">
						{props.title} <span className="year">({releaseYear})</span>
					</h2>
					{props.genres &&
					<h4 className="CoreInfo__genreList">{props.genres.map((genre, i) => (
						<a key={`${genre.id}_key`} href="/movies">{genre.name}{i === props.genres.length - 1 ? '' : ', '}</a>
					))}
					</h4>}
					<p className="CoreInfo__overview">{props.overview}</p>
					<div className={`rating ${ratingClass}`}>
						<p className="text-center">{props.voteAverage}</p>
					</div>
					<a href="/movies">Rate movie</a>
				</div>
				<div className="col-sm-offset-1 col-sm-2 col-xs-12 coreInfo-side text-right" />
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
};

CoreInfo.defaultProps = {
	genres: [],
	voteAverage: 0,
	posterUrl: '',
	overview: '',
};

export default CoreInfo;
