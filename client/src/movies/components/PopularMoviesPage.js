import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import { bindActionCreators } from 'redux';
import ApiHoc from '../../globalComponents/ApiHoc';
import { loadMovies } from '../../actions/movieActions';
import '../../App.css';

class PopularMoviesPage extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { movies } = this.props;
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
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        movies: state.movies.popularMovies
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => {
            dispatch(loadMovies());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiHoc(PopularMoviesPage));