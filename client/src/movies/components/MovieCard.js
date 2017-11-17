import React, { Component } from 'react';

class MovieCard extends Component {
    render() {
        const { title, releaseDate} = this.props;

        return(
            <div class="text-center">
                <h3>{title}</h3>
                <p>{releaseDate}</p>
            </div>
        );
    }
}

export default MovieCard;