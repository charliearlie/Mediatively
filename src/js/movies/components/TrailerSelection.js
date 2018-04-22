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
			this.setState({
				currentVideoId: videos.find(v => v.name.toLowerCase().includes(videoTerm)).key,
			});
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
