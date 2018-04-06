import React from 'react';
import DocumentTitle from 'react-document-title';
import CoreInfo from '../../globalComponents/CoreInfo';
import PersonSection from '../../people/components/PersonSection';
import MovieDetails from './MovieDetails';
import TrailerSection from './TrailerSelection';
import SuggestedMoviesSection from './SuggestedMoviesSection';
import ReviewSection from '../../globalComponents/ReviewSection';

const MoviePage = (props) => {
	// eslint-disable-next-line react/prop-types
	const { movieInfo } = props;
	const { suggestedMovies, reviews } = movieInfo;
	const title = movieInfo.title || 'Show Brainer';
	const director = movieInfo.credits ? movieInfo.credits.crew.find(c => c.job === 'Director') : '';
	const directorName = director ? director.name : 'Not listed';

	return (
		<DocumentTitle title={title}>
			<div className="MoviePage">
				<div className="row">
					<CoreInfo
						title={movieInfo.title}
						releaseDate={movieInfo.releaseDate}
						posterUrl={movieInfo.posterPath}
						inProduction={movieInfo.in_production}
						overview={movieInfo.overview}
						voteAverage={movieInfo.vote_average}
						voteCount={movieInfo.vote_count}
						genres={movieInfo.genres}
						backdropUrl={movieInfo.backdropPath}
					/>
				</div>
				<div className="row">
					<MovieDetails
						director={directorName}
						budget={movieInfo.budget}
						runtime={movieInfo.runtime}
						revenue={movieInfo.revenue}
					/>
				</div>
				<div className="row card">
					<div className="col col-md-9 CoreInfo__related">
						{movieInfo.videoId &&
						<TrailerSection
							name={movieInfo.name}
							youtubeId={movieInfo.videoId}
						/>
						}
					</div>
					<div className="col-md-3 CoreInfo__cast">
						{movieInfo.cast &&
						<PersonSection
							cast
							personGroup={movieInfo.cast}
						/>}
					</div>
				</div>
				{reviews && reviews.length > 0 &&
				<div className="row card ReviewSection">
					<div className="col-xs-12">
						<ReviewSection reviews={reviews} />
					</div>
				</div>
				}
				<div className="row card SuggestedMoviesSection">
					<div className="col-xs-12">
						{suggestedMovies &&
							<SuggestedMoviesSection suggestedMovies={suggestedMovies} />
						}
					</div>
				</div>
			</div>
		</DocumentTitle>
	);
};

export default MoviePage;
