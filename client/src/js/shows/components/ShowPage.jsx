import React from 'react';
import PropTypes from 'prop-types';
import CoreInfo from '../../globalComponents/CoreInfo';
import ShowSeasonSection from './ShowSeasonSection';

const ShowPage = (props) => {
	const { showInfo } = props;
	return (
		<div className="ShowPage">
			<div className="row">
				<CoreInfo
					title={showInfo.title}
					releaseDate={showInfo.releaseDate}
					posterUrl={showInfo.posterPath}
					inProduction={showInfo.inProduction}
					overview={showInfo.overview}
					voteAverage={showInfo.voteAverage}
					genres={showInfo.genres}
					backdropUrl={showInfo.backdropPath}
					voteCount={showInfo.voteCount}
				/>
			</div>
			<div className="row">
				{ showInfo.seasons &&
					<ShowSeasonSection seasons={showInfo.seasons} />
				}
			</div>
		</div>
	);
};

ShowPage.propTypes = {
	showInfo: PropTypes.objectOf().isRequired,
};

export default ShowPage;
