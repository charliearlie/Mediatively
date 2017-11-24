import React from 'react';

const ShowPage = ({ match }) => {
    return (
        <h1>{match.params.id}</h1>
    );
}

export default ShowPage;