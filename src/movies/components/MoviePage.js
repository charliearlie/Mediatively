import React from 'react';
import DocumentTitle from 'react-document-title';
import CoreInfo from '../../globalComponents/CoreInfo';
import PersonSection from '../../people/components/PersonSection';
import MediaDetails from './MovieDetails';
import TrailerSection from './TrailerSelection';
import SuggestedMoviesSection from './SuggestedMoviesSection';

const MoviePage = (props) => {
	// eslint-disable-next-line react/prop-types
	const { movieInfo } = props;
	const { suggestedMovies } = movieInfo;
	const title = movieInfo.title || 'A website name';
	const releaseDate = movieInfo.release_date;
	const director = movieInfo.credits
		? movieInfo.credits.crew.find((c) => c.job === 'Director')
		: '';
	const directorName = director ? director.name : 'Not listed';

	return (
		<DocumentTitle title={title}>
			<div className="MoviePage">
				<div className="row">
					<CoreInfo
						title={movieInfo.title}
						releaseDate={releaseDate}
						posterUrl={movieInfo.poster_path}
						inProduction={movieInfo.in_production}
						overview={movieInfo.overview}
						voteAverage={movieInfo.vote_average}
						genres={movieInfo.genres}
						backdropUrl={movieInfo.backdrop_path}
					/>
				</div>
				<div className="row">
					<MediaDetails
						director={directorName}
						budget={movieInfo.budget}
						runtime={movieInfo.runtime}
						revenue={movieInfo.revenue}
					/>
				</div>
				<div className="row card">
					<div className="col col-md-9 CoreInfo__related">
						{movieInfo.name && (
							<TrailerSection name={movieInfo.name} youtubeId={movieInfo.videoId} />
						)}
					</div>
					<div className="col-md-3 CoreInfo__cast">
						{movieInfo.credits && (
							<PersonSection cast personGroup={movieInfo.credits.cast} />
						)}
					</div>
				</div>
				<div className="row card SuggestedMoviesSection">
					<div className="col-xs-12">
						{suggestedMovies && (
							<SuggestedMoviesSection suggestedMovies={suggestedMovies} />
						)}
					</div>
				</div>
			</div>
		</DocumentTitle>
	);
};
export default MoviePage;
