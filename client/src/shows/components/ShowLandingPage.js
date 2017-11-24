import React, { Component } from 'react';
import ShowCard from './ShowCard';
import '../../App.css';

class ShowLandingPage extends Component {
    state = {
        popularShows: []
    };

    componentDidMount() {
        fetch('/shows/popular')
            .then(res => res.json())
            .then(shows => this.setState({popularShows: shows}));
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {this.state.popularShows.slice(0,4).map(show => (
                            <div className="col-lg-3 text-center">
                                <ShowCard
                                    key={show.id}
                                    id={show.id}
                                    title={show.name}
                                    posterPath={show.poster_path}
                                    voteAverage={show.vote_average}
                                    firstAirDate={show.first_air_date}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowLandingPage;