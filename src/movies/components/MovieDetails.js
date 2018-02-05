import React from 'react';
import PropTypes from 'prop-types';

function displayDollars(amount) {
	if (!amount) return '';
	return (amount).toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	});
}

function displayRuntime(minutes) {
	if (minutes <= 60) {
		return `${minutes}m`;
	}
	return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
}

const MovieDetails = (props) => {
	const revenueIcon = props.budget > props.revenue ?
		<i className="fas fa-minus-square" /> : <i className="fas fa-plus-square" />;
	return (
		<div className="col-xs-12 MediaDetails">
			<div className="col-xs-6 col-md-3">
				<h3><i className="fas fa-film" /></h3>
				<h5 className="MovieDetails__detail">Runtime</h5>
				<p className="MovieDetails__runtime">{displayRuntime(props.runtime)}</p>
			</div>
			<div className="col-xs-6 col-md-3">
				<h3><i className="fas fa-video" /></h3>
				<h5 className="MovieDetails__detail">Director</h5>
				<p className="MovieDetails__director">{props.director}</p>
			</div>
			<div className="col-xs-6 col-md-3">
				<h3><i className="fas fa-dollar-sign" /></h3>
				<h5 className="MovieDetails__detail">Budget</h5>
				<p className="MovieDetails__budget">{displayDollars(props.budget)}</p>
			</div>
			<div className="col-xs-6 col-md-3">
				<h3>{revenueIcon}</h3>
				<h5 className="MovieDetails__detail">Revenue</h5>
				<p className="MovieDetails__revenue">{displayDollars(props.revenue)}</p>
			</div>
		</div>
	);
};

MovieDetails.propTypes = {
	runtime: PropTypes.number,
	budget: PropTypes.number,
	revenue: PropTypes.number,
	director: PropTypes.string,
};

MovieDetails.defaultProps = {
	runtime: 0,
	budget: 0,
	revenue: 0,
	director: '',
};

export default MovieDetails;
