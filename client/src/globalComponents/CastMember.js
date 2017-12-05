import React from 'react';
import PropTypes from 'prop-types';

const CastMember = (props) => {
    const baseImageUrl = "https://image.tmdb.org/t/p/w185";
    return (
        <div className="cast-member">
            <div className="row">
                <div className="text-center">
                    <img className="image-responsive" src={`${baseImageUrl + props.image}`} alt={props.name}/>
                </div>
            </div>
            <div className="row">
                <div className="cast-member-name text-center">
                    <h4>{props.name}</h4>
                    <p>{props.character}</p>
                </div>
            </div>
        </div>
    );
}

CastMember.propTypes = {
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired
}

export default CastMember;