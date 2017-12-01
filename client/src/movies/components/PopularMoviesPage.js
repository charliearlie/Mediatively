import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import { bindActionCreators } from 'redux';
import * as movieActions from '../../actions/movieActions';
import '../../App.css';

class PopularMoviesPage extends Component {
    constructor(props) {
        super(props);

        this.actions = bindActionCreators(movieActions, this.props.dispatch);
    }
    
    render() {
        const { movies } = this.props;
        return (
            <div className="container">
                <div className="row">
                    {movies.slice(0,3).map(movie => (
                        <div className="col-lg-4">
                            <MovieCard
                                title={movie.title}
                                releaseDate={movie.release_date}
                                id={movie.id}
                            />
                        </div>
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
        loadMovies: () => {
            this.movieActions.loadMovies()
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopularMoviesPage);