import React from 'react';
import PropTypes from 'prop-types';

function selectFeaturedTrailer(videos) {
	const officialTrailer = videos.find(video => video.name.includes('Official Trailer'));
	return officialTrailer ? officialTrailer.key : videos[0].key;
}

const TrailerSection = (props) => {
	const video = selectFeaturedTrailer(props.videos); // eslint-disable-line react/prop-types

	return (
		<div className="MovieSelection">
			<h2>Trailer</h2>
			<iframe
				className="MovieTrailer"
				title={props.movieName}
				src={`https://www.youtube.com/embed/${video}?rel=0&amp;showinfo=0`}
				frameBorder="0"
				allow="autoplay; encrypted-media"
				allowFullScreen
			/>
			Row of other trailers here
		</div>
	);
};

TrailerSection.propTypes = {
	movieName: PropTypes.string.isRequired,
};

export default TrailerSection;
