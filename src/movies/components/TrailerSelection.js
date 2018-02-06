import React from 'react';
import PropTypes from 'prop-types';

const TrailerSection = props => (
	<div className="MovieSelection">
		<h2>Trailer</h2>
		<iframe
			className="MovieTrailer"
			title={props.movieName}
			src={`https://www.youtube.com/embed/${props.youtubeId}?rel=0&amp;showinfo=0`}
			frameBorder="0"
			allow="autoplay; encrypted-media"
			allowFullScreen
		/>
		Row of other trailers here
	</div>
);

TrailerSection.propTypes = {
	movieName: PropTypes.string.isRequired,
	youtubeId: PropTypes.string,
};

TrailerSection.defaultProps = {
	youtubeId: '',
};

export default TrailerSection;
