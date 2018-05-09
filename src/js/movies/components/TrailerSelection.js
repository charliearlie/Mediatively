import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TrailerSection extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentVideoId: '',
		};

		this.loadDefaultVideo = this.loadDefaultVideo.bind(this);
	}

	componentDidMount() {
		this.loadDefaultVideo();
	}

	loadDefaultVideo(index) {
		const { videos, videoTerm } = this.props;
		if (index) this.setState({ currentVideoId: videos[index].key });

		if (Array.isArray(videos)) {
			const video = videos.find((v) => {
				const trailerId = v.name.toLowerCase().includes(videoTerm) ? v.key : videos[0].key;

				return trailerId;
			});

			this.setState({ currentVideoId: video.key });
		} else {
			this.setState({ currentVideoId: videos.key });
		}
	}

	render() {
		const { currentVideoId } = this.state;
		return (
			<div className="MovieSelection">
				<h2>Trailer</h2>
				<iframe
					className="MovieTrailer"
					title={this.props.movieName}
					src={`https://www.youtube.com/embed/${currentVideoId}?rel=0&amp;showinfo=0`}
					frameBorder="0"
					allow="autoplay; encrypted-media"
					allowFullScreen
				/>
				Row of other trailers here
			</div>
		);
	}
}

TrailerSection.propTypes = {
	movieName: PropTypes.string.isRequired,
	videos: PropTypes.arrayOf().isRequired,
	videoTerm: PropTypes.string.isRequired,
};


export default TrailerSection;
