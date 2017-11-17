import React, { Component } from 'react';
import '../../App.css';

class ShowPage extends Component {
    state = {
        popularShows: []
    };

    componentDidMount() {
        fetch('/shows/popular')
            .then(res => res.json())
            .then(shows => this.setState({popularShows: shows.results}));
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.popularShows.slice(0,3).map(show => (
                        <div className="col-lg-4 text-center">
                            {show.original_name}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ShowPage;