import React, { Component } from 'react';
import MovieCard from './MovieCard';
import '../../App.css';

class PopularMoviesPage extends Component {
    state = {
        popularMovies: []
    };

    componentDidMount() {
        fetch('/movies/popular')
            .then(res => res.json())
            .then(movies => this.setState({popularMovies: movies.results}));
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.popularMovies.slice(0,3).map(movie => (
                        <div className="col-lg-4">
                            <MovieCard
                                title={movie.title}
                                releaseDate={movie.release_date}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default PopularMoviesPage;