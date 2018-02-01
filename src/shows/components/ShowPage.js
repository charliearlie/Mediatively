import React from 'react';
import CoreInfo from '../../globalComponents/CoreInfo';

const ShowPage = (props) => {
	const { showInfo } = props;
	const releaseDate = showInfo.first_air_date ? showInfo.first_air_date : showInfo.release_date;
	return (
		<div className="container">
			<CoreInfo
				title={showInfo.name}
				releaseDate={releaseDate}
				posterUrl={showInfo.poster_path}
				inProduction={showInfo.in_production}
				overview={showInfo.overview}
				voteAverage={showInfo.vote_average}
				genres={showInfo.genres}
				cast={showInfo.cast}
			/>
		</div>
	);
};

export default ShowPage;
