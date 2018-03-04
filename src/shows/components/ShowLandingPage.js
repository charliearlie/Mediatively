import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ShowCard from './ShowCard';
import * as showActions from '../../actions/showActions';
import '../../App.css';

class ShowLandingPage extends Component {
	constructor(props) {
		super(props);

		// eslint-disable-next-line react/prop-types
		this.actions = bindActionCreators(showActions, this.props.dispatch);
	}

	componentWillMount() {
		// eslint-disable-next-line react/prop-types
		this.props.loadShows();
	}
	render() {
		const { shows } = this.props;
		return (
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						{shows.slice(0, 4).map(show => (
							<div className="col-lg-3 text-center">
								<ShowCard
									key={show.id}
									id={show.id}
									title={show.name}
									posterPath={show.poster_path}
									voteAverage={show.vote_average}
									firstAirDate={show.first_air_date}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({ shows: state.shows.showLandingPage });

const mapDispatchToProps = (dispatch) => {
	const temp = dispatch;
	console.log(temp);
	return {
		loadShows: () => {
			this.showActions.loadShows();
		},
	};
};

ShowLandingPage.propTypes = {
	shows: PropTypes.arrayOf().isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowLandingPage);
