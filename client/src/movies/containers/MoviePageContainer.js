import { connect } from 'react-redux';
import queryString from 'query-string';
import MoviePage from '../components/MoviePage';
import ApiHoc from '../../globalComponents/ApiHoc';
import { loadMovieDetails } from '../../actions/movieActions';

/*
    Can I share one container between the movie and show page? Probably...
*/

const mapStateToProps = (state, ownProps) => {
    return {
        movieInfo: state.viewedMovie
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const movieId = ownProps.match ? ownProps.match.params.id : undefined;
    return {
        onLoad: () => {
            dispatch(loadMovieDetails(movieId))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiHoc(MoviePage));