import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Code } from 'react-content-loader';
import CoreInfo from '../../globalComponents/CoreInfo';
import PersonSection from '../../people/components/PersonSection';
import MovieDetails from './MovieDetails';
import TrailerSection from './TrailerSelection';
import SuggestedMoviesSection from './SuggestedMoviesSection';
import ReviewSection from '../../globalComponents/ReviewSection';

class MoviePage extends Component {
	renderPage() {
		// eslint-disable-next-line react/prop-types
		const { movieInfo } = this.props;
		const { suggestedMovies, reviews } = movieInfo;
		const releaseDate = movieInfo.release_date;
		const director = movieInfo.credits ? movieInfo.credits.crew.find(c => c.job === 'Director') : '';
		const directorName = director ? director.name : 'Not listed';

		return (
			<div className="MoviePage">
				<div className="row">
					<CoreInfo
						title={movieInfo.title}
						releaseDate={releaseDate}
						posterUrl={movieInfo.poster_path}
						inProduction={movieInfo.in_production}
						overview={movieInfo.overview}
						voteAverage={movieInfo.vote_average}
						voteCount={movieInfo.vote_count}
						genres={movieInfo.genres}
						backdropUrl={movieInfo.backdrop_path}
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
						{movieInfo.credits &&
						<PersonSection
							cast
							personGroup={movieInfo.credits.cast}
						/>}
					</div>
				</div>
				<div className="row card ReviewSection">
					<div className="col-xs-12">
						{reviews &&
							<ReviewSection reviews={reviews} />
						}
					</div>
				</div>
				<div className="row card SuggestedMoviesSection">
					<div className="col-xs-12">
						{suggestedMovies &&
							<SuggestedMoviesSection suggestedMovies={suggestedMovies} />
						}
					</div>
				</div>
			</div>
		);
	}

	render() {
		// eslint-disable-next-line react/prop-types
		const title = this.props.movieInfo.title || 'Show Brainer';
		return (
			<DocumentTitle title={title}>
				{this.props.movieInfo.title ? this.renderPage() : <Code />}
			</DocumentTitle>
		);
	}
}

export default MoviePage;
