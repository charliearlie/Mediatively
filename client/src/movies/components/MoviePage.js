import React from 'react';
import CoreInfo from '../../globalComponents/CoreInfo';
import DocumentTitle from 'react-document-title';
class MoviePage extends React.Component {
    
    render() {
        const { movieInfo } = this.props;
        const releaseDate = movieInfo.release_date;
        return (
            <DocumentTitle title={movieInfo.title}>
                <div className="container">
                    <CoreInfo 
                        title={movieInfo.title}
                        releaseDate={releaseDate}
                        posterUrl={movieInfo.poster_path}
                        inProduction={movieInfo.in_production}
                        overview={movieInfo.overview}
                        voteAverage={movieInfo.vote_average}
                        genres={movieInfo.genres}
                        cast={movieInfo.cast}
                    />
                    <hr />
                </div>
            </DocumentTitle>
        )
    }
}

export default MoviePage;