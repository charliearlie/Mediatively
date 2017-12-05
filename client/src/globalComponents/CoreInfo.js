import React from 'react';
import PropTypes from 'prop-types';
import CastMember from '../globalComponents/CastMember';

const getRatingClass = rating => {
    if (rating < 3) {
        return 'low';
    } else if (rating < 7) {
        return 'medium';
    } else {
        return 'high';
    }
}

const CoreInfo = (props) => {
    const releaseYear = props.releaseDate ? props.releaseDate.substring(0,4) : '';
    const ratingClass = getRatingClass(props.voteAverage);
    return (
        <div className="coreInfo">
            <div className="col-lg-12">
                <div className="col-sm-3 col-xs-12 text-center coreinfo-image-container">
                    <img src={props.posterUrl} alt={`${props.title}_poster`} className="image-responsive" />
                </div>
                <div className="col-sm-6 col xs-12 coreinfo-detail">
                    <h2>{props.title} <span className="year">({releaseYear})</span></h2>
                    {props.genres &&
                    <h4>{props.genres.map((genre, i) => (
                        <a key={`${genre.id}_key`} href="#">{genre.name}{i === props.genres.length - 1 ? '' : ', '}</a>   
                    ))}</h4>}
                    <p>{props.overview}</p>
                    <div className={`rating ${ratingClass}`}>
                        <p className="text-center">{props.voteAverage}</p>
                    </div>
                    <a href="#">Rate movie</a>
                </div>
                <div className="col-sm-offset-1 col-sm-2 col-xs-12 coreInfo-side text-right">
                </div>
            </div>
        </div>
    );
}

CoreInfo.propTypes = {
    title: PropTypes.string,
    releaseYear: PropTypes.string,
    genres: PropTypes.array,
    voteAverage: PropTypes.number
}

export default CoreInfo;