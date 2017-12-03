import React from 'react';

const CastMember = (props) => {
    const baseImageUrl = "https://image.tmdb.org/t/p/w300";
    return (
        <div className="cast-member">
            <div className="row">
                <div className="col-xs-4">
                    <img className="cast-member-image" src={`${baseImageUrl + props.image}`} height="55px"/>
                </div>
                <div className="col-xs-8 cast-member-name">
                    <h4>{props.name}</h4>
                    <p>{props.character}</p>
                </div>
            </div>
        </div>
    );
}

export default CastMember;