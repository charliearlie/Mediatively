import React, { Component } from 'react';

class ShowCard extends Component {
    render() {
        const { title, firstAirDate, posterPath, voteAverage} = this.props;

        return(
            <div class="showcard">
                <div className="showcard-img">
                    <img src={posterPath} />
                </div>
                <h3>{title}</h3>
                <p>{firstAirDate.slice(0, 4)}</p>
                <p>{voteAverage}</p>
            </div>
        );
    }
}

export default ShowCard;