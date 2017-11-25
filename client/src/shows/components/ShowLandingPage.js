import React, { Component } from 'react';
import ShowCard from './ShowCard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as showActions from '../../actions/showActions';
import '../../App.css';

class ShowLandingPage extends Component {
    constructor(props) {
        super(props);

        this.actions = bindActionCreators(showActions, this.props.dispatch);
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        {this.state.shows.slice(0,4).map(show => (
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

const mapStateToProps = (state, ownProps) => {
    return {
        shows: state.shows
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadShows: () => {
            this.showActions.loadShows()
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowLandingPage);