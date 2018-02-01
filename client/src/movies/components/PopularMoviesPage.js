import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import ApiHoc from '../../globalComponents/ApiHoc';
import { loadPopularMovies, loadUpcomingMovies } from '../../actions/movieActions';
import '../../App.css';

const PopularMoviesPage = (props) => {
	const { movies } = props;
	return (
		<div className="container">
			<div className="row">
				{movies.map(movie => (
					<MovieCard
						key={`${movie.id}_key`} 
						title={movie.title}
						releaseDate={movie.release_date}
						id={movie.id}
					/>
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		movies: state.movies.popularMovies,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLoad: () => {
			dispatch(loadPopularMovies());
			dispatch(loadUpcomingMovies());
		}
	};
};

PopularMoviesPage.propTypes = {
	movies: PropTypes.arrayOf().isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiHoc(PopularMoviesPage));
