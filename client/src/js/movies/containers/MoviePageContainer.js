import { connect } from 'react-redux';
import MoviePage from '../components/MoviePage';
import ApiHoc from '../../globalComponents/ApiHoc';
import { clearViewedMovie, loadMovieDetails } from '../../actions/movieActions';

/*
	Can I share one container between the movie and show page? Probably...
*/

const mapStateToProps = (state) => {
	const movieInfo = state.viewedMovie;
	return {
		movieInfo,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const movieId = ownProps.match ? ownProps.match.params.id : undefined;
	/** I use movieId as a param for every function here. Make them one function? */
	return {
		onLoad: () => {
			dispatch(clearViewedMovie());
			dispatch(loadMovieDetails(movieId));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiHoc(MoviePage));
