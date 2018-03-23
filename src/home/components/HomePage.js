import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../App.css';
import HomePageContentSection from './HomePageContentSection';

class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			movieTabs: ['In Cinemas', 'Popular', 'Coming Soon'],
			showTabs: ['On Tonight (US)', 'Popular', 'On Soon'],
			width: 0,
		};
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth });
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
						width={this.state.width}
						tabs={this.state.movieTabs}
					/>
					<div className="col-xs-3 hidden-xs HomePage__column" style={{ textAlign: 'left', paddingLeft: '-16px' }}>
						<h2>Local</h2>
						<ul>
							<li>
								<p>Everyman Muswell Hill</p>
								<p>Fortis Green Road</p>
							</li>
							<li>
								<p>Vue North Finchley</p>
								<p>Great North Leisure Park</p>
							</li>
							<li>
								<p>Crouch End Picturehouse</p>
								<p>165 Tottenham Ln</p>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-xs-12 card">
					<HomePageContentSection
						header="Shows"
						type="show"
						sections={showSections}
						width={this.state.width}
						tabs={this.state.showTabs}
					/>
					<div className="col-xs-3 hidden-xs HomePage__column" style={{ textAlign: 'left', paddingLeft: '-16px' }} />
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
