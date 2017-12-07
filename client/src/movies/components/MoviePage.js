import React from 'react';
import Modal from 'react-modal';
import CoreInfo from '../../globalComponents/CoreInfo';
import DocumentTitle from 'react-document-title';
import CastMember from '../../globalComponents/CastMember';
class MoviePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false
        }

        this.openCastModal = this.openCastModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this); 
    }

    openCastModal() {
        this.setState({modalOpen: true});
    }

    afterOpenModal() {

    }

    closeModal() {
        this.setState({modalOpen: false});
    }
    
    render() {
        const { movieInfo } = this.props;
        const title = movieInfo.title || 'Show Brainer';
        const releaseDate = movieInfo.release_date;
        return (
            <DocumentTitle title={title}>
                <div className="container">
                    <div className="row">
                        <CoreInfo
                            title={movieInfo.title}
                            releaseDate={releaseDate}
                            posterUrl={movieInfo.poster_path}
                            inProduction={movieInfo.in_production}
                            overview={movieInfo.overview}
                            voteAverage={movieInfo.vote_average}
                            genres={movieInfo.genres}
                        />
                    </div>
                    <hr data-content="Cast" />
                    <div className="row cast-row">
                        <div className="col-md-1" />
                            {movieInfo.cast && movieInfo.cast.slice(0,5).map(castMember => (
                                <div key={`${castMember.id}_key`}>
                                    <div className="col-xs-4 col-md-2">
                                        <CastMember 
                                            name={castMember.name}
                                            character={castMember.character}
                                            image={castMember.profile_path}
                                        />
                                    </div>
                                </div>
                            ))}
                        <div className="col-md-1" />
                    </div>
                    <div className="row">
                        <div className="col-xs-12 text-center" style={{padding:'10px'}}>
                            <button onClick={this.openCastModal}>View full cast</button>
                            <Modal
                                isOpen={this.state.modalOpen}
                                onAfterOpen={this.afterOpenModal}
                                onRequestClose={this.closeModal}
                                contentLabel="Example Modal"
                            >
                            {movieInfo.cast && movieInfo.cast.map(castMember => (
                                <p>{castMember.name}</p>
                            ))}
                            </Modal>
                            

                        </div>
                    </div>
                </div>
            </DocumentTitle>
        )
    }
}

export default MoviePage;