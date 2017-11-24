import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import ShowPage from './ShowPage';

class ShowCard extends Component {
    render() {
        const { title, firstAirDate, posterPath, voteAverage, id} = this.props;

        return(
            <Link to={`/show/${id}`}>
                <div className="showcard">
                    <div className="showcard-img">
                        <img src={posterPath} />
                    </div>
                    <h3>{title}</h3>
                    <p>{firstAirDate.slice(0, 4)}</p>
                    <p>{voteAverage}</p>
                </div>
            </Link>
        );
    }
}

export default ShowCard;