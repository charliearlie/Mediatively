import React from 'react';
import DocumentTitle from 'react-document-title';
import PropTypes from 'prop-types';
import CoreInfo from '../../globalComponents/CoreInfo';
import CastMember from '../../globalComponents/CastMember';
import CastModal from '../../people/components/CastModal';

class MoviePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modalOpen: false
		};

		this.toggleModal = this.toggleModal.bind(this);
	}


	toggleModal() {
		this.setState({ modalOpen: !this.state.modalOpen });
	}

	render() {
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
					<div className="row cast-row">
						<div className="col-md-1" />
						{movieInfo.cast && movieInfo.cast.slice(0,5).map(castMember => (
							<div key={`${castMember.id}_key`}>
								<div className="col-xs-4 col-md-2">
									<CastMember
										name={castMember.name}
										character={castMember.character}
										image={castMember.profile_path}
									/>
								</div>
							</div>
						))}
						<div className="col-md-1" />
					</div>
					<div className="row">
						<div className="col-xs-12 text-center" style={{ padding: '10px' }}>
							<button id="cast-modal-btn" onClick={this.toggleModal}>View full cast</button>
						</div>
					</div>
					{movieInfo.cast &&
					<CastModal show={this.state.modalOpen} onHide={this.toggleModal} cast={movieInfo.cast} />
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
