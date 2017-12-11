import React from 'react';
import DefaultCastImage from '../../assets/default-cast-image.png';

const PersonRow = (props) => {
    const baseImageUrl = "https://image.tmdb.org/t/p/w45";
    const image = props.image ? baseImageUrl + props.image : DefaultCastImage;
    return (
        <div className="row person-row">
            <div className="col-xs-2">
                <img src={image} alt={`${props.name}_image`} />
            </div>
            <div className="col-xs-6">
                <h3>{props.name}</h3>
                <p>{props.character}</p>
            </div>
        </div>
    );
}

export default PersonRow;