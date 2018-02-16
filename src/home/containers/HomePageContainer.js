import { connect } from 'react-redux';
import HomePage from '../components/HomePage';
import ApiHoc from '../../globalComponents/ApiHoc';
import { loadBoxOfficeMovies } from '../../actions/movieActions';

/*
	Can I share one container between the movie and show page? Probably...
*/

const mapStateToProps = state => ({ boxOffice: state.movies.boxOfficeMovies });

const mapDispatchToProps = (dispatch) => {
	const x = 1;
	console.log(x);
	return {
		onLoad: () => {
			dispatch(loadBoxOfficeMovies());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiHoc(HomePage));
