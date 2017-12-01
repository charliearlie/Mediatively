import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends Component {
    render() {
        const { title, releaseDate, id} = this.props;

        return(
            <Link to={`/movie/${id}`}>
                <div class="text-center">
                    <h3>{title}</h3>
                    <p>{releaseDate}</p>
                </div>
            </Link>
        );
    }
}

export default MovieCard;