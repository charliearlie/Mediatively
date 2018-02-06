import React from 'react';
import DocumentTitle from 'react-document-title';
import CoreInfo from '../../globalComponents/CoreInfo';
import PersonSection from '../../people/components/PersonSection';
import MediaDetails from './MovieDetails';
import TrailerSection from './TrailerSelection';

const MoviePage = (props) => {
	// eslint-disable-next-line react/prop-types
	const { movieInfo } = props;
	const title = movieInfo.title || 'Show Brainer';
	const releaseDate = movieInfo.release_date;
	const director = movieInfo.credits ? movieInfo.credits.crew.find(c => c.job === 'Director') : '';

	return (
		<DocumentTitle title={title}>
			<div className="MoviePage">
				<div className="container">
					<div className="row">
						<CoreInfo
							title={movieInfo.title}
							releaseDate={releaseDate}
							posterUrl={movieInfo.poster_path}
							inProduction={movieInfo.in_production}
							overview={movieInfo.overview}
							voteAverage={movieInfo.vote_average}
							genres={movieInfo.genres}
						/>
					</div>
					<div className="row">
						<MediaDetails
							director={director.name}
							budget={movieInfo.budget}
							runtime={movieInfo.runtime}
							revenue={movieInfo.revenue}
						/>
					</div>
					<div className="row">
						<div className="col col-md-9 card CoreInfo__related">
							<TrailerSection
								name={movieInfo.name}
								youtubeId={movieInfo.videoId}
							/>
						</div>
						<div className="col-md-3 CoreInfo__cast">
							{movieInfo.credits &&
							<PersonSection
								cast
								personGroup={movieInfo.credits.cast}
							/>}
						</div>
					</div>
				</div>
			</div>
		</DocumentTitle>
	);
};

export default MoviePage;

// MoviePage.propTypes = {
// 	movieInfo: PropTypes.shape.isRequired,
// };
