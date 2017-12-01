import React from 'react';
import CoreInfo from '../../globalComponents/CoreInfo';

class MoviePage extends React.Component {
    
    render() {
        const { movieInfo } = this.props;
        const releaseDate = movieInfo.first_air_date ? movieInfo.first_air_date : movieInfo.release_date;
        return (
            <div className="container">
                <CoreInfo 
                    title={movieInfo.name}
                    releaseDate={releaseDate}
                    posterUrl={movieInfo.poster_path}
                    inProduction={movieInfo.in_production}
                    overview={movieInfo.overview}
                    voteAverage={movieInfo.vote_average}
                    genres={movieInfo.genres}
                />
            </div>
        )
    }
}

export default MoviePage;