import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomePageContentSection from './HomePageContentSection';

class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			movieTabs: ['In Cinemas', 'Popular', 'Coming Soon'],
			showTabs: ['On Tonight (US)', 'Popular', 'On Soon'],
		};
	}

	render() {
		const {
			boxOffice,
			popular,
			upcoming,
			popularShows,
			todaysShows,
		} = this.props;
		const movieSections = [boxOffice, popular, upcoming];
		const showSections = [todaysShows, popularShows];
		return (
			<div className="HomePage text-center">
				<div className="col-12 card HomePage__banner">
					<div className="HomePage__title-container">
						<h1 className="HomePage__title">Mediatively</h1>
					</div>
				</div>
				<div className="col-xs-12 card">
					<HomePageContentSection
						header="Movies"
						type="movie"
						sections={movieSections}
						tabs={this.state.movieTabs}
					/>
				</div>
				<div className="col-xs-12 card">
					<HomePageContentSection
						header="Shows"
						type="show"
						sections={showSections}
						width={this.state.width}
						tabs={this.state.showTabs}
					/>
				</div>
			</div>
		);
	}
}

HomePage.propTypes = {
	boxOffice: PropTypes.arrayOf(PropTypes.object),
	popular: PropTypes.arrayOf(PropTypes.object),
	upcoming: PropTypes.arrayOf(PropTypes.object),
	popularShows: PropTypes.arrayOf(PropTypes.object),
	todaysShows: PropTypes.arrayOf(PropTypes.object),
};

HomePage.defaultProps = {
	boxOffice: [],
	popular: [],
	upcoming: [],
	popularShows: [],
	todaysShows: [],
};

export default HomePage;
