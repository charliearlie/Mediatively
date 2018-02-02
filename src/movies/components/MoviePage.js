import React from 'react';
import DocumentTitle from 'react-document-title';
import CoreInfo from '../../globalComponents/CoreInfo';
import CastSection from '../../people/components/CastSection';

class MoviePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modalOpen: false,
		};
	}

	render() {
		// eslint-disable-next-line react/prop-types
		const { movieInfo } = this.props;
		const title = movieInfo.title || 'Show Brainer';
		const releaseDate = movieInfo.release_date;

		return (
			<DocumentTitle title={title}>
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
					<hr data-content="Cast" />
					{movieInfo.credits &&
					<CastSection
						modalOpen={this.state.modalOpen}
						cast={movieInfo.credits.cast}
						toggleModal={this.toggleModal}
					/>
					}
				</div>
			</DocumentTitle>
		);
	}
}

export default MoviePage;

// MoviePage.propTypes = {
// 	movieInfo: PropTypes.shape.isRequired,
// };
