import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import getRatingClass from '../globalComponents/helpers/ratingsHelper';
import CoreInfoLoader from './loaders/CoreInfoLoader';
import imageAssets from '../assets/imageAssets';

const CoreInfo = (props) => {
	const { posterUrl, imageSizes } = imageAssets;
	const releaseYear = props.releaseDate ? props.releaseDate.substring(0, 4) : '';
	const ratingClass = getRatingClass(props.voteAverage);
	const backgroundImage = `url("${posterUrl}${imageSizes.posterSizes.original}${props.backdropUrl}")`;

	return (
		<div
			className="col-xs-12 CoreInfo card"
			style={{
				backgroundImage,
				backgroundSize: 'cover',
				backgroundColor: 'transparent',
				backgroundPosition: 'center',
			}}
		>
			<div className="CoreInfo__layer">
				<div className="CoreInfo__details">
					{props.title ?
						<Fragment>
							<div className="col-sm-3 col-xs-12 text-center coreinfo-image-container">
								<img
									src={`${posterUrl}${imageSizes.posterSizes.medium}${props.posterUrl}`}
									alt={`${props.title}_poster`}
									className="image-responsive"
								/>
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
								{props.voteCount > 0 &&
								<div className={`rating ${ratingClass}`}>
									<p className="text-center CoreInfo__rating">{props.voteAverage}</p>
								</div>
								}
								<a href="/movies">Rate movie</a>
							</div>
							<div className="col-sm-offset-1 col-sm-2 col-xs-12 CoreInfo__side" />
						</Fragment> : <CoreInfoLoader />}
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
	voteCount: PropTypes.number,
	posterUrl: PropTypes.string,
	overview: PropTypes.string,
	backdropUrl: PropTypes.string,
};

CoreInfo.defaultProps = {
	genres: [],
	voteAverage: 0,
	voteCount: 0,
	posterUrl: '',
	overview: '',
	backdropUrl: '',
};

export default CoreInfo;
