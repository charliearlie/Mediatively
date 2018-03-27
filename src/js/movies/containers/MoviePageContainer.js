import { connect } from 'react-redux';
import MoviePage from '../components/MoviePage';
import ApiHoc from '../../globalComponents/ApiHoc';
import {
	loadMovieDetails,
	loadMovieCredits,
	loadYoutubeId,
	loadSuggestedMovies,
	loadMovieReviews,
} from '../../actions/movieActions';

/*
	Can I share one container between the movie and show page? Probably...
*/

const mapStateToProps = state => ({ movieInfo: state.viewedMovie });

const mapDispatchToProps = (dispatch, ownProps) => {
	const movieId = ownProps.match ? ownProps.match.params.id : undefined;
	/** I use movieId as a param for every function here. Make them one function? */
	return {
		onLoad: () => {
			dispatch(loadMovieDetails(movieId));
			dispatch(loadMovieCredits(movieId));
			dispatch(loadYoutubeId(movieId));
			dispatch(loadSuggestedMovies(movieId));
			dispatch(loadMovieReviews(movieId));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiHoc(MoviePage));
