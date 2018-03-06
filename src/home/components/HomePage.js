import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import '../../App.css';
import HomePageCollection from './HomePageCollection';


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
		const { TabPane } = Tabs;
		return (
			<div className="HomePage text-center">
				<div className="col-12 card HomePage__banner">
					<div className="HomePage__title-container">
						<h1 className="HomePage__title">Mediatively</h1>
					</div>
				</div>
				<div className="col-xs-12 card">
					<div className="col-xs-12 col-sm-9 HomePage__content" style={{ textAlign: 'left', paddingLeft: '-16px' }}>
						<h2>Movies</h2>
						<Tabs defaultActiveKey="0" onChange={this.onTabChange}>
							{movieSections.map((section, i) => (
								<TabPane
									tab={this.state.movieTabs[i]}
									key={i} // eslint-disable-line react/no-array-index-key
								>
									<HomePageCollection type="movie" collection={section} width={this.state.width} />
								</TabPane>
							))}
						</Tabs>
					</div>
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
					<div className="col-xs-12 col-md-9 HomePage__content" style={{ textAlign: 'left', paddingLeft: '-16px' }}>
						<h2>Shows</h2>
						<Tabs defaultActiveKey="0" onChange={this.onTabChange}>
							{showSections.map((section, i) => (
								<TabPane
									tab={this.state.showTabs[i]}
									key={i} // eslint-disable-line react/no-array-index-key
								>
									<HomePageCollection type="shows" collection={section} />
								</TabPane>
							))}
						</Tabs>
					</div>
					<div className="col-xs-3 hidden-xs HomePage__column" style={{ textAlign: 'left', paddingLeft: '-16px' }} />
				</div>
			</div>
		);
	}
}

HomePage.propTypes = {
	boxOffice: PropTypes.arrayOf().isRequired,
	popular: PropTypes.arrayOf().isRequired,
	upcoming: PropTypes.arrayOf().isRequired,
	popularShows: PropTypes.arrayOf().isRequired,
	todaysShows: PropTypes.arrayOf().isRequired,
};

export default HomePage;
